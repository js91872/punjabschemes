import type { MetadataRoute } from "next";
import { schemes } from "@/lib/schemes";
import { siteConfig } from "@/lib/site";
import { categoryConfig, categorySlugFor } from "@/lib/categories";
import { punjabiSchemeSlugs } from "@/lib/punjabi-schemes";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/schemes",
    "/about",
    "/editorial-policy",
    "/contact",
    "/disclaimer",
    "/privacy-policy",
  ];

  const categories = Object.keys(categoryConfig).filter((slug) =>
    schemes.some((scheme) => categorySlugFor(scheme.category) === slug),
  );

  const punjabiSlugs = new Set(punjabiSchemeSlugs);
  const languageAlternates = (englishPath: string, punjabiPath: string) => ({
    languages: {
      "en-IN": `${siteConfig.url}${englishPath}`,
      "pa-IN": `${siteConfig.url}${punjabiPath}`,
      "x-default": `${siteConfig.url}${englishPath}`,
    },
  });

  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.6,
      ...(path === "" ? { alternates: languageAlternates("", "/pa") } : {}),
    })),

    ...categories.map((slug) => ({
      url: `${siteConfig.url}/categories/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    ...schemes.map(({ slug }) => ({
      url: `${siteConfig.url}/schemes/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...(punjabiSlugs.has(slug) ? { alternates: languageAlternates(`/schemes/${slug}`, `/pa/schemes/${slug}`) } : {}),
    })),

    {
      url: `${siteConfig.url}/pa`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: languageAlternates("", "/pa"),
    },

    ...punjabiSchemeSlugs.map((slug) => ({
      url: `${siteConfig.url}/pa/schemes/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: languageAlternates(`/schemes/${slug}`, `/pa/schemes/${slug}`),
    })),
  ];
}

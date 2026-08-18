import type { MetadataRoute } from "next";
import { schemes } from "@/lib/schemes";
import { siteConfig } from "@/lib/site";
import { categoryConfig, categorySlugFor } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/schemes", "/about", "/editorial-policy", "/contact", "/disclaimer", "/privacy-policy"];
  const categories = Object.keys(categoryConfig).filter((slug) => schemes.some((scheme) => categorySlugFor(scheme.category) === slug));
  return [...pages.map((path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.6 })), ...categories.map((slug) => ({ url: `${siteConfig.url}/categories/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })), ...schemes.map(({ slug }) => ({ url: `${siteConfig.url}/schemes/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}

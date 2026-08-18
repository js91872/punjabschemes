import type { MetadataRoute } from "next";
import { schemes } from "@/lib/schemes";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/schemes", "/about", "/contact", "/disclaimer", "/privacy-policy"];
  const categories = ["pensions", "scholarships", "women-and-children", "agriculture", "construction-workers"];
  return [...pages.map((path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.6 })), ...categories.map((slug) => ({ url: `${siteConfig.url}/categories/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })), ...schemes.map(({ slug }) => ({ url: `${siteConfig.url}/schemes/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}

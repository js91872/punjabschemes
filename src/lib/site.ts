export const siteConfig = {
  name: "Punjab Schemes",
  domain: "PunjabSchemes.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://punjabschemes.com",
  description:
    "Independent information about Punjab government schemes, pensions, scholarships and welfare benefits.",
} as const;

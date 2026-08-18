export type Scheme = {
  slug: string;
  name: string;
  summary: string;
  category: "Pensions" | "Scholarships" | "Women & Children" | "Agriculture";
  beneficiaries: string;
  officialUrl: string;
  lastReviewed: string;
};

export const schemes: Scheme[] = [];

export function getScheme(slug: string) {
  return schemes.find((scheme) => scheme.slug === slug);
}

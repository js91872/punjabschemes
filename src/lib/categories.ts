import type { Scheme } from "@/lib/schemes";

export const categoryConfig = {
  pensions: { name: "Pensions", title: "Punjab Pension Schemes 2026", description: "Compare verified Punjab pension guides for older residents and women. Check eligibility, documents and official application channels.", intro: "Explore Punjab government pension schemes for older residents and eligible women. Each guide explains who may apply, which evidence to prepare and where to confirm the latest benefit and eligibility rules." },
  scholarships: { name: "Scholarships", title: "Punjab Scholarship Schemes 2026", description: "Find Punjab scholarship and education-support schemes with eligibility, document and application guidance.", intro: "Browse verified education-support programmes for Punjab students. Published guides distinguish official eligibility and current application routes from older or unverified information." },
  "women-and-children": { name: "Women & Children", title: "Punjab Schemes for Women and Children 2026", description: "Explore Punjab government schemes for women and children, including financial assistance, pensions and family support.", intro: "Find Punjab programmes supporting women, children and household financial security. Use the guides to compare benefits, eligibility evidence and authorized registration channels." },
  agriculture: { name: "Agriculture", title: "Punjab Agriculture Schemes 2026", description: "Verified Punjab agriculture scheme guidance for farmers and rural households.", intro: "This category will contain agriculture schemes only after current rules and official application sources have been verified." },
  "children-and-families": { name: "Children & Families", title: "Punjab Family Benefit Schemes 2026", description: "Find Punjab family-benefit and dependent-child schemes with eligibility, documents and official sources.", intro: "These guides cover assistance connected with dependent children and major family circumstances. Check the exact case-specific evidence before applying." },
  disability: { name: "Disability", title: "Punjab Disability Schemes and Pension 2026", description: "Punjab disability pension and assistance guides with certification, eligibility and application information.", intro: "Explore verified support for persons with disabilities in Punjab, including certificate, guardian, bank and application guidance." },
  "construction-workers": { name: "Construction Workers", title: "Punjab BOCW Welfare Schemes 2026", description: "Compare Punjab BOCW benefits for registered construction workers, including education, marriage, maternity and tool assistance.", intro: "Punjab Building and Other Construction Workers Welfare Board programmes support eligible registered workers and families. Active registration, contributions and scheme-specific documents are central to most claims." },
  health: { name: "Health", title: "Punjab Health Schemes 2026", description: "Find verified Punjab health-scheme guidance, including eligibility, health-card registration, cashless treatment and official hospital checks.", intro: "Explore Punjab healthcare programmes with practical guidance on registration, health cards, empanelled hospitals and cashless treatment. Always confirm that the proposed treatment package is authorized before admission." },
} as const;

export type CategorySlug = keyof typeof categoryConfig;

export function categorySlugFor(category: Scheme["category"]): CategorySlug {
  return category.toLowerCase().replaceAll(" & ", "-and-").replaceAll(" ", "-") as CategorySlug;
}

export type Scheme = {
  slug: string;
  name: string;
  summary: string;
  category: "Pensions" | "Scholarships" | "Women & Children" | "Agriculture" | "Children & Families" | "Disability";
  beneficiaries: string;
  officialUrl: string;
  department: string;
  fee: string;
  documents: string[];
  applicationMethods: string[];
  importantNote: string;
  lastReviewed: string;
};

export const schemes: Scheme[] = [
  {
    slug: "old-age-pension-punjab",
    name: "Old Age Pension Scheme - Punjab",
    summary: "Punjab's social-security pension service for eligible older residents, administered by the Department of Social Security and Women & Child Development.",
    category: "Pensions",
    beneficiaries: "Older Punjab residents whose applications satisfy the department's current income, residence, age and property-verification rules.",
    officialUrl: "https://punjab.gov.in/wp-content/uploads/2025/09/Old-Age-Pension-Scheme.pdf",
    department: "Department of Social Security and Women & Child Development, Government of Punjab",
    fee: "The current service sheet lists no government or facilitation fee.",
    documents: [
      "An accepted identity proof",
      "An accepted address proof",
      "Proof of date of birth or age",
      "Bank passbook",
    ],
    applicationMethods: [
      "Apply online through the Punjab Connect Portal",
      "Visit a Punjab Sewa Kendra",
      "Call 1076 for doorstep service guidance",
    ],
    importantNote: "The official service sheet does not state the pension amount or full eligibility thresholds. Confirm these with the department before relying on any third-party figure.",
    lastReviewed: "2026-08-18",
  },
  {
    slug: "widow-destitute-pension-punjab",
    name: "Widow and Destitute Women Pension Scheme - Punjab",
    summary: "Punjab's pension service for eligible widowed, divorced or otherwise destitute women, subject to departmental verification.",
    category: "Pensions",
    beneficiaries: "Women applying as widowed, divorced or destitute applicants under the categories and evidence accepted by the Punjab department.",
    officialUrl: "https://punjab.gov.in/wp-content/uploads/2025/09/Widow-Destitute-pension-scheme.pdf",
    department: "Department of Social Security and Women & Child Development, Government of Punjab",
    fee: "The current service sheet lists no government or facilitation fee.",
    documents: [
      "An accepted identity proof",
      "An accepted address proof",
      "Proof of date of birth",
      "Bank passbook",
      "Situation-specific evidence such as a husband's death certificate, divorce order, missing-person FIR or disability proof",
    ],
    applicationMethods: [
      "Apply online through the Punjab Connect Portal",
      "Visit a Punjab Sewa Kendra",
      "Call 1076 for doorstep service guidance",
    ],
    importantNote: "The evidence required depends on whether the application is based on widowhood, divorce, a missing spouse or a disabled spouse. Check the official service sheet for the applicable documents.",
    lastReviewed: "2026-08-18",
  },
  {
    slug: "dependent-children-pension-punjab",
    name: "Dependent Children Pension Scheme - Punjab",
    summary: "Punjab's social-assistance service for eligible dependent children where parental death or disability conditions apply.",
    category: "Children & Families",
    beneficiaries: "Dependent children represented by an eligible mother, father or guardian, subject to the department's current verification rules.",
    officialUrl: "https://punjab.gov.in/wp-content/uploads/2025/09/Dependent-children-pension-scheme.pdf",
    department: "Department of Social Security and Women & Child Development, Government of Punjab",
    fee: "The current service sheet lists no government or facilitation fee.",
    documents: [
      "Applicant identity and address proof",
      "Applicant proof of date of birth",
      "Proof of each dependent child's date of birth",
      "Bank passbook",
      "Situation-specific parental death certificate or disability certificate",
    ],
    applicationMethods: [
      "Apply online through the Punjab Connect Portal",
      "Visit a Punjab Sewa Kendra",
      "Call 1076 for doorstep service guidance",
    ],
    importantNote: "The supporting certificate depends on who applies: the official sheet distinguishes applications by a guardian, mother or disabled father.",
    lastReviewed: "2026-08-18",
  },
];

export function getScheme(slug: string) {
  return schemes.find((scheme) => scheme.slug === slug);
}

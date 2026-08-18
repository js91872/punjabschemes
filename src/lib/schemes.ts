export type Scheme = {
  slug: string;
  name: string;
  summary: string;
  category: "Pensions" | "Scholarships" | "Women & Children" | "Agriculture" | "Children & Families" | "Disability" | "Construction Workers";
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
  {
    slug: "construction-worker-shagun-scheme-punjab",
    name: "Punjab BOCW Shagun Scheme",
    summary: "Marriage assistance of ₹31,000 under the Punjab Building and Other Construction Workers Welfare Board for eligible registered workers' daughters or an eligible female beneficiary's own marriage.",
    category: "Construction Workers",
    beneficiaries: "A registered Punjab BOCW beneficiary applying for an eligible daughter's first marriage, or an eligible registered female beneficiary applying for her own first marriage. The official form limits assistance to the marriages of up to two daughters.",
    officialUrl: "https://bocw.punjab.gov.in/userfiles/file/shagun%20Form%2035%20updated.pdf",
    department: "Punjab Building and Other Construction Workers Welfare Board, Department of Labour",
    fee: "The official scheme form does not state a separate application fee. The worker's BOCW registration and contribution must be current.",
    documents: [
      "Registered marriage certificate",
      "Photograph of the bride",
      "Marriage photograph",
      "Bride's date-of-birth certificate issued by a school, medical authority or birth registrar",
      "BOCW registration and bank-account details requested in Form 35",
      "Marriage confirmation from the Sarpanch or another local authority",
    ],
    applicationMethods: [
      "Complete the Punjab BOCW Board's Form 35",
      "Attach the official supporting documents",
      "Submit through the relevant Punjab labour authority or service channel",
      "Apply within three months after the marriage date",
    ],
    importantNote: "The assistance is ₹31,000 for an eligible marriage. It applies only once for each of up to two daughters and does not apply to a second marriage. Confirm that the worker's Board membership and contributions are active before applying.",
    lastReviewed: "2026-08-18",
  },
  {
    slug: "construction-worker-scholarship-punjab",
    name: "Punjab BOCW Stipend Scheme for Education",
    summary: "Education assistance for eligible children of registered Punjab construction workers, covering school through degree-level study, with higher listed support for some hostel students.",
    category: "Construction Workers",
    beneficiaries: "Children of registered Punjab BOCW beneficiaries who are studying in an eligible class or course. The Board's detailed scheme also allows a registered beneficiary studying in evening classes at an approved institution to seek assistance.",
    officialUrl: "https://bocw.punjab.gov.in/bApi/images/file-1657795250542.pdf",
    department: "Punjab Building and Other Construction Workers Welfare Board, Department of Labour",
    fee: "The official documents reviewed do not state a separate application fee. The construction worker's Board registration and contributions should be current.",
    documents: [
      "Student photograph attested by the school, college or educational institution",
      "Certificate from the institution confirming admission in the present class",
      "Certificate for the last or previous class passed",
      "Hostel certificate from the institution, when hostel assistance is claimed",
      "BOCW beneficiary registration and bank details requested by the application service",
    ],
    applicationMethods: [
      "Prepare the education and admission certificates listed by the Board",
      "Apply through the Punjab BOCW welfare-scheme service channel",
      "Upload or submit the supporting certificates with the application",
      "Keep the acknowledgement or application number for follow-up",
    ],
    importantNote: "An official Board summary lists annual assistance from ₹3,000 to ₹70,000 depending on class, gender, course and hostel status, but its detailed rates are marked effective from 1 April 2016. Confirm the currently sanctioned rate before applying.",
    lastReviewed: "2026-08-18",
  },
  {
    slug: "construction-worker-maternity-benefit-punjab",
    name: "Punjab BOCW Maternity Benefit Scheme",
    summary: "Financial assistance connected with the birth of up to two children for eligible registered Punjab construction workers.",
    category: "Construction Workers",
    beneficiaries: "A registered female construction worker, or an eligible registered male construction worker applying in connection with his spouse, subject to active contribution and membership conditions. The official scheme material limits the benefit to two children.",
    officialUrl: "https://punjab.gov.in/wp-content/uploads/2020/05/Application-for-Maternity-Benefit-scheme-Form-No-46.pdf",
    department: "Punjab Building and Other Construction Workers Welfare Board, Department of Labour",
    fee: "The official Form 46 does not state a separate application fee. The beneficiary's BOCW registration and contribution record are part of the application.",
    documents: [
      "Child's birth certificate issued by the Registrar of Births and Deaths",
      "Certificate issued by the village Sarpanch",
      "BOCW registration number and contribution details",
      "Applicant's bank account number, bank branch and IFSC code",
    ],
    applicationMethods: [
      "Complete the Punjab BOCW Board's Maternity Benefit Form 46",
      "Attach the mandatory birth certificate and Sarpanch certificate",
      "Submit through a Sewa Kendra or the currently authorized BOCW service channel",
      "Apply within three months of the child's birth, as stated in the Board's scheme conditions",
    ],
    importantNote: "The Board's official scheme summary lists ₹21,000 per child for a female worker and ₹5,000 per child for a male worker, up to two children. Because the detailed application form was last revised in October 2017, confirm the current amount and deadline before submission.",
    lastReviewed: "2026-08-18",
  },
  {
    slug: "construction-worker-tools-kit-punjab",
    name: "Punjab BOCW Tool Kit Scheme",
    summary: "Reimbursement assistance for work tools purchased by eligible registered construction workers who completed the Board's Skill Upgradation or Recognition of Prior Learning training.",
    category: "Construction Workers",
    beneficiaries: "Registered Punjab BOCW beneficiaries with regular contributions who completed training under the Board's Skill Upgradation or Recognition of Prior Learning scheme and purchased tools related to their profession.",
    officialUrl: "https://bocw.punjab.gov.in/userfiles/file/Scheme%20Forms/Twenty%20Welfare%20Sch%20in%20English%20report%20wise.pdf",
    department: "Punjab Building and Other Construction Workers Welfare Board, Department of Labour",
    fee: "The official scheme summary does not state a separate application fee. Assistance is reimbursement after eligible tools have been purchased.",
    documents: [
      "Proof of BOCW beneficiary registration and regular contributions",
      "Proof of completing Skill Upgradation or Recognition of Prior Learning training",
      "Purchase bills for tools connected with the worker's profession",
      "Bank-account details for direct transfer after approval",
    ],
    applicationMethods: [
      "Purchase eligible tools and retain the original bills",
      "Apply through the Punjab BOCW welfare-scheme web portal or currently authorized service channel",
      "Upload the training proof and tool-purchase bills",
      "The application is verified at the subdivisional level before an approved payment is transferred",
    ],
    importantNote: "The official Board material describes reimbursement up to ₹5,000 and says the benefit may be claimed again after three years. Confirm the current ceiling and qualifying interval with the Board before purchasing tools in reliance on the scheme.",
    lastReviewed: "2026-08-18",
  },
];

export function getScheme(slug: string) {
  return schemes.find((scheme) => scheme.slug === slug);
}

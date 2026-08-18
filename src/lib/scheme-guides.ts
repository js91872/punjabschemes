export type SchemeGuide = {
  overview: string[];
  benefitDetails: string[];
  eligibilityChecklist: string[];
  practicalTips: string[];
  faqs: { question: string; answer: string }[];
};

export const schemeGuides: Record<string, SchemeGuide> = {
  "mukh-mantri-mawan-dheeyan-satkar-yojana": {
    overview: [
      "The Mukh Mantri Mawan Dheeyan Satkar Yojana is a statewide Punjab cash-assistance programme notified on 2 April 2026. It is administered by the Department of Social Security, Women and Child Development and is intended to give adult women a predictable source of personal financial support.",
      "Eligibility is assessed woman by woman, not household by household. The notification expressly says that more than one eligible woman from the same family may receive assistance. A woman already receiving a Punjab social-security pension is also permitted to receive the full Satkar Yojana benefit.",
      "Payment is made through Direct Benefit Transfer, so the applicant's Aadhaar authentication, Punjab voter record and Aadhaar-linked bank account must match. Registration itself is free and is supported at designated Anganwadi Centres and Sewa Kendras.",
    ],
    benefitDetails: [
      "₹1,500 per month for an eligible woman belonging to the Scheduled Caste category",
      "₹1,000 per month for an eligible woman in another category",
      "Payment to the beneficiary's Aadhaar-linked bank account through DBT",
      "No one-woman-per-family restriction under the notified rules",
    ],
    eligibilityChecklist: [
      "The applicant is a woman aged 18 years or above",
      "She is a registered resident voter of Punjab",
      "She possesses valid Aadhaar and a Punjab voter ID",
      "She is not in one of the government-employee, public-body pensioner, income-taxpayer or elected-representative exclusion groups",
      "Her bank account can receive Aadhaar-based DBT payments",
    ],
    practicalTips: [
      "Check that the name and date of birth match across Aadhaar, voter ID and bank records before registration.",
      "Ask the bank to confirm Aadhaar seeding and DBT readiness; merely giving Aadhaar to the bank does not always confirm the active DBT mapping.",
      "Carry the original documents and readable copies, and obtain an acknowledgement after registration.",
      "Do not pay an agent: the Gazette states that registration at designated centres is free.",
    ],
    faqs: [
      { question: "Can two eligible women from one family apply?", answer: "Yes. The official notification places no restriction on the number of eligible women in a family." },
      { question: "Can a woman receiving an old-age or other social-security pension apply?", answer: "Yes. Existing social-security pensioners may receive the full scheme benefit in addition to their pension, subject to the other eligibility rules." },
      { question: "Is there an income limit?", answer: "The notification uses an income-tax exclusion rather than publishing a general household-income ceiling: a woman who paid income tax of ₹1 or more in the previous financial year is excluded." },
      { question: "Where is registration completed?", answer: "The notified primary registration locations are designated Anganwadi Centres and Sewa Kendras. Additional centres may be designated by the implementation committee." },
    ],
  },
  "old-age-pension-punjab": {
    overview: [
      "Punjab's Old Age Pension Scheme is a state social-security service for older residents who satisfy the department's age, residence, income and property checks. Applications are examined by the Department of Social Security and Women and Child Development rather than approved automatically on age alone.",
      "The current Punjab service sheet is most useful for confirming the application channels and core documents. It does not publish every financial threshold or the current monthly pension amount, so applicants should treat figures on unofficial websites cautiously and obtain current terms from the department or Sewa Kendra.",
    ],
    benefitDetails: ["Recurring social-security pension after approval", "Payment through the bank account recorded in the application", "Online, Sewa Kendra and doorstep-guidance routes listed by Punjab"],
    eligibilityChecklist: ["Applicant meets the department's current minimum-age rule", "Applicant is a Punjab resident", "Income and property fall within the current permitted limits", "Identity, age, address and bank evidence can be verified"],
    practicalTips: ["Use the same spelling of the applicant's name on identity and bank records.", "Take the bank passbook rather than relying only on a handwritten account number.", "Ask the Sewa Kendra to confirm the current income and property thresholds before submission.", "Keep the application receipt for status enquiries."],
    faqs: [
      { question: "Does reaching old age guarantee approval?", answer: "No. Age is only one condition; residence, income, property and document verification also apply." },
      { question: "Can the application be made without visiting an office?", answer: "Punjab lists an online route through Punjab Connect and provides 1076 for doorstep-service guidance, subject to current service availability." },
      { question: "What pension amount should I expect?", answer: "The current service sheet reviewed by us does not state the amount. Confirm it directly with the department instead of relying on an undated third-party page." },
      { question: "Why might an application be delayed?", answer: "Common practical causes include mismatched personal details, unclear age evidence, incomplete bank information, or pending income and property verification." },
    ],
  },
  "widow-destitute-pension-punjab": {
    overview: [
      "This Punjab pension service supports women applying under the widow, divorced or destitute categories recognized by the Department of Social Security and Women and Child Development. The correct evidence depends on the applicant's circumstances, so there is not one identical document set for every woman.",
      "The official service sheet distinguishes cases involving a deceased husband, divorce, a missing spouse and a spouse with disability. Applicants should select the correct situation and submit the corresponding legal or official certificate; a general affidavit may not replace the specified evidence.",
    ],
    benefitDetails: ["Recurring pension after departmental approval", "Bank-based payment using the account supplied by the applicant", "Multiple application channels including Punjab Connect and Sewa Kendras"],
    eligibilityChecklist: ["Applicant falls within a category recognized by the scheme", "Punjab residence and identity can be verified", "Current departmental income and property rules are satisfied", "Situation-specific evidence is available"],
    practicalTips: ["Identify the correct applicant category before collecting documents.", "Ensure a death certificate, court order, FIR or disability certificate is readable and issued by the competent authority.", "Match the bank-account name with the identity record.", "Retain the receipt and copies of every submitted certificate."],
    faqs: [
      { question: "Do all applicants need a husband's death certificate?", answer: "No. That applies to a widow's case. Divorce, missing-spouse and disabled-spouse cases require different supporting evidence." },
      { question: "Can a divorced woman apply?", answer: "The official service sheet includes divorced women, subject to the accepted divorce evidence and all other current rules." },
      { question: "Is there a government application fee?", answer: "The service sheet reviewed by us lists no government or facilitation fee." },
      { question: "Where can requirements be confirmed?", answer: "Use the linked Punjab service sheet, a Sewa Kendra, Punjab Connect, or the 1076 doorstep-service guidance line." },
    ],
  },
  "dependent-children-pension-punjab": {
    overview: [
      "The Dependent Children Pension Scheme is a Punjab social-assistance service for children affected by specified parental death or disability circumstances. An eligible mother, father or guardian completes the application on the child's behalf, and the supporting evidence changes according to who is applying.",
      "The service is not simply a general child allowance. The department checks the relationship to the child, the child's age evidence, the relevant parent's circumstances and the household's eligibility under current rules before approving assistance.",
    ],
    benefitDetails: ["Social-assistance pension for an approved dependent-child case", "Application handled by a parent or guardian", "Payment through the bank details accepted in the application"],
    eligibilityChecklist: ["The child fits a parental death or disability situation recognized by the scheme", "An eligible mother, father or guardian can represent the child", "Birth evidence is available for every child included", "Required death or disability evidence can be verified"],
    practicalTips: ["Prepare a separate birth record for each child included.", "Use the certificate relevant to the applying guardian's exact situation.", "Check that relationships and names are consistent across all records.", "Keep copies and the acknowledgement number after submission."],
    faqs: [
      { question: "Can a guardian apply instead of a parent?", answer: "Yes, the official sheet recognizes guardian applications, but requires evidence appropriate to that case." },
      { question: "Is one birth certificate enough for several children?", answer: "No. The application should include proof of date of birth for each dependent child." },
      { question: "Is disability evidence always required?", answer: "It is required where the claim depends on parental disability; a parental-death case instead requires the relevant death evidence." },
      { question: "How can the application be submitted?", answer: "Punjab lists Punjab Connect, Sewa Kendras and 1076 doorstep-service guidance as application or assistance channels." },
    ],
  },
  "construction-worker-shagun-scheme-punjab": {
    overview: ["The BOCW Shagun Scheme provides marriage assistance to eligible construction-worker families registered with the Punjab Building and Other Construction Workers Welfare Board. It covers the first marriage of up to two daughters; an eligible woman registered as a Board beneficiary may also claim for her own first marriage.", "This is a time-sensitive claim. The Board's Form 35 requires the application within three months after marriage and asks for both civil-registration evidence and supporting photographs. Active Board membership and contribution status should be checked before submission."],
    benefitDetails: ["₹31,000 for each approved eligible marriage", "Coverage for the marriages of up to two daughters", "Own-marriage eligibility for a registered female beneficiary", "Direct payment using the accepted bank details"],
    eligibilityChecklist: ["Construction worker is registered with Punjab BOCW", "Membership and contributions are current", "Claim concerns an eligible first marriage", "Application is made within three months after marriage", "Required marriage and age evidence is available"],
    practicalTips: ["Obtain the registered marriage certificate promptly.", "Do not wait until the end of the three-month window.", "Keep clear copies of the bride and marriage photographs.", "Verify the beneficiary's bank details and BOCW registration before filing."],
    faqs: [{ question: "Is a second marriage covered?", answer: "No. The official conditions exclude a second marriage." }, { question: "How many daughters can be covered?", answer: "The scheme permits assistance for the marriages of up to two daughters." }, { question: "Can a registered woman claim for her own marriage?", answer: "Yes, if she meets the Board's conditions for her own first marriage." }, { question: "What is the deadline?", answer: "Form 35 states that the application may be submitted within three months after the fixed marriage date." }],
  },
  "construction-worker-scholarship-punjab": {
    overview: ["The Punjab BOCW Stipend Scheme helps meet education costs for children of registered construction workers from Class 1 through degree and professional study. The Board material also recognizes a beneficiary's own study in evening classes at an approved institution.", "Assistance varies by education level, gender and hostel status. Because the detailed rate table is marked effective from 1 April 2016, applicants should use it as a guide and ask the Board to confirm the current sanctioned rate for the course year."],
    benefitDetails: ["Officially listed annual assistance ranging from ₹3,000 to ₹70,000", "Different rates by class, course and student gender", "Higher listed assistance for certain hostel students", "Coverage extending to technical, professional, medical and engineering study"],
    eligibilityChecklist: ["Parent or worker is a registered Punjab BOCW beneficiary", "Student is admitted to an eligible class or course", "Previous class was passed", "Institution can certify current admission", "Hostel status can be certified if claimed"],
    practicalTips: ["Ask the institution for both current-admission and previous-class certificates.", "Have the student photograph attested by the institution.", "Obtain the hostel certificate before applying if applicable.", "Confirm the current rate and academic-year deadline with the Board."],
    faqs: [{ question: "Are only school students covered?", answer: "No. Board material extends the scheme through graduation, postgraduate, technical and professional courses." }, { question: "Can a failed student claim?", answer: "The detailed Board conditions state that stipend is not granted where the previous class was failed." }, { question: "Is hostel support available?", answer: "Higher amounts are listed for some hostel students, subject to an institution-issued hostel certificate." }, { question: "Are the published rates current?", answer: "The available official table is marked effective from 1 April 2016, so the current rate should be confirmed before applying." }],
  },
  "construction-worker-maternity-benefit-punjab": {
    overview: ["The Punjab BOCW Maternity Benefit Scheme provides birth-related assistance to eligible registered construction workers. The official Board material recognizes both a female construction worker and a male beneficiary applying in connection with his spouse, with the benefit limited to the first two eligible children.", "The Board conditions require membership for at least six months before the child's birth, regular contributions and submission within three months after birth. Form 46 captures the child's birth details, the worker's contribution record and bank information."],
    benefitDetails: ["Officially listed ₹21,000 per eligible child for a female worker", "Officially listed ₹5,000 per eligible child for a male worker", "Benefit limited to up to two children", "Bank payment using the details recorded in Form 46"],
    eligibilityChecklist: ["Applicant is a registered Punjab BOCW beneficiary", "At least six months of membership existed before the birth", "Contributions were deposited regularly", "Claim concerns the first or second child", "Application is made within three months after birth"],
    practicalTips: ["Obtain the Registrar-issued birth certificate first.", "Ask the village Sarpanch for the required certificate.", "Check contribution status before submission.", "Confirm the current amount because Form 46 was last revised in 2017."],
    faqs: [{ question: "Can a male construction worker apply?", answer: "The official scheme material says an eligible male beneficiary may receive the listed assistance for the birth of up to two children of his spouse." }, { question: "What membership period is required?", answer: "The published conditions require at least six months of Board membership before the child's birth." }, { question: "What is the filing deadline?", answer: "The Board conditions state that the application should be made within three months of birth." }, { question: "Which birth record is required?", answer: "Form 46 lists a birth certificate issued by the Registrar of Births and Deaths as mandatory." }],
  },
  "construction-worker-tools-kit-punjab": {
    overview: ["The Punjab BOCW Tool Kit Scheme reimburses eligible registered construction workers for professional tools after they complete Skill Upgradation or Recognition of Prior Learning training under the Board. It is reimbursement, not an advance for a future purchase.", "Applicants therefore need to preserve purchase bills and show that the tools relate to their occupation. The Board material says the claim is verified at subdivisional level before an approved amount is transferred to the beneficiary's bank account."],
    benefitDetails: ["Reimbursement officially described as up to ₹5,000", "Tools must relate to the worker's profession", "A further claim is described after a three-year interval", "Approved payment is transferred to the beneficiary's bank account"],
    eligibilityChecklist: ["Worker is registered with Punjab BOCW", "Board contributions are regular", "Worker completed qualifying Skill Upgradation or RPL training", "Eligible tools have already been purchased", "Bills and training proof can be uploaded"],
    practicalTips: ["Confirm eligibility before buying tools solely for a claim.", "Request itemized bills carrying the seller and purchase details.", "Keep the training certificate and contribution record ready.", "Ask the Board to confirm the current ceiling and three-year rule."],
    faqs: [{ question: "Is money provided before buying tools?", answer: "No. The official conditions describe reimbursement after purchase." }, { question: "Is training required?", answer: "Yes. The published scheme is for beneficiaries trained under Skill Upgradation or Recognition of Prior Learning." }, { question: "Can any household item be claimed?", answer: "No. Bills must relate to tools connected with the beneficiary's profession." }, { question: "Can the benefit be claimed again?", answer: "The official summary describes another benefit after three years, but applicants should confirm the current interval with the Board." }],
  },
};

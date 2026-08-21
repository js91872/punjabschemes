export type SchemeGuide = {
  overview: string[];
  benefitDetails: string[];
  eligibilityChecklist: string[];
  practicalTips: string[];
  faqs: { question: string; answer: string }[];
};

export const schemeGuides: Record<string, SchemeGuide> = {
  "mukh-mantri-sehat-yojana-punjab": {
    overview: [
      "Mukhya Mantri Sehat Yojana (MMSY), widely searched as Mukh Mantri Sehat Yojna, is Punjab's universal cashless-hospitalization programme. Punjab announced universal family coverage of up to ₹10 lakh per year and rolled out the present scheme in January 2026. The State Health Agency under the Department of Health and Family Welfare administers registration, hospital empanelment and claim processes.",
      "The programme is intended to extend protection beyond the narrower beneficiary groups covered under earlier arrangements. Government descriptions say Punjab residents may enrol without an income ceiling, so salaried people, farmers, workers, pensioners, business owners and other resident families are not excluded merely because they belong to a particular occupation or income band. Residence, identity, family composition and health-card records still have to be verified.",
      "The benefit is cashless treatment for eligible hospitalization packages at hospitals participating in the scheme. It is not ₹10 lakh deposited into a bank account and it does not reimburse every medical expense automatically. The empanelled hospital normally checks the beneficiary record, diagnoses the case, selects an eligible package and seeks any required authorization through the scheme system.",
    ],
    benefitDetails: [
      "Cashless hospitalization cover up to ₹10 lakh per eligible family per year",
      "Access through empanelled government hospitals and participating private hospitals",
      "Coverage intended for Punjab resident families without a general income ceiling",
      "A health card used to identify the enrolled family and initiate a package claim",
      "Treatment subject to the package, hospital and authorization rules operating on the admission date",
    ],
    eligibilityChecklist: [
      "The applicant and family can establish bona fide residence in Punjab through records accepted by the current portal",
      "Identity details can be authenticated using Aadhaar, voter ID or another method currently permitted by the State Health Agency",
      "Family members are entered correctly and are not duplicated or incorrectly attached to another family record",
      "A valid health card or beneficiary record is available before planned cashless treatment",
      "The selected hospital is empanelled and the proposed care falls within an eligible scheme package",
    ],
    practicalTips: [
      "Register before a planned hospitalization so identity or family-record corrections do not delay treatment.",
      "Check the hospital on the current official empanelled-hospital list rather than relying on an old poster or verbal claim.",
      "Ask the hospital help desk to identify the exact package and whether pre-authorization has been received before agreeing to non-emergency admission.",
      "Carry the health card and original identity documents, but never leave an original Aadhaar card permanently with an agent or hospital desk.",
      "Request a written explanation if a covered-looking service is denied or if the hospital asks for payment outside the approved package.",
    ],
    faqs: [
      { question: "How much cover does Mukh Mantri Sehat Yojana provide?", answer: "Punjab describes cover of up to ₹10 lakh per family per year. This is a maximum cashless-treatment ceiling for eligible packages, not ₹10 lakh paid directly to every family." },
      { question: "Is there an income limit for the scheme?", answer: "Government announcements describe the current scheme as universal for Punjab resident families and do not publish a general income ceiling. Identity, Punjab residence and family records must still be verified." },
      { question: "Can treatment be taken at any private hospital?", answer: "No. Cashless benefits are available only through hospitals empanelled for the scheme, and the particular treatment must fit an eligible package and authorization process." },
      { question: "Where can a family register?", answer: "Punjab has identified online registration and assisted registration through Sewa Kendras or Common Service Centres. Use the State Health Agency website to confirm the currently active route before sharing documents." },
      { question: "Does an old Ayushman card remain useful?", answer: "Existing card and beneficiary records may help the system identify a family, but the State Health Agency or hospital desk must confirm current MMSY activation, family details and the applicable cover. Do not assume an old card settles every current eligibility question." },
      { question: "What should I do before planned admission?", answer: "Confirm the hospital's empanelment, show the health card, ask which package applies and obtain confirmation that any required pre-authorization has been requested or approved." },
    ],
  },
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
  "disabled-person-pension-punjab": {
    overview: [
      "Punjab's Disabled Person Pension service provides financial assistance after the Department of Social Security and Women and Child Development verifies the beneficiary's disability evidence and the other conditions recorded in the application. The form covers a broad range of physical, visual, hearing, speech, intellectual, neurological, blood-disorder and multiple-disability categories.",
      "The person with disability may apply personally. Where another person applies, the form recognizes the mother, father or guardian and requests that person's identity and residence evidence. For a minor beneficiary, the official note says that either the father, mother or guardian must make the declaration.",
      "The application captures disability type and percentage, Punjab residence history, annual income, Aadhaar and the beneficiary's own bank details. Approval is not based on a diagnosis name alone: the disability proof must come from a competent authority and the department also examines the declaration concerning income, work, property and tax status.",
    ],
    benefitDetails: [
      "Recurring financial assistance after departmental approval",
      "Coverage across disability categories listed in the official Punjab form",
      "A parent or guardian application route where applicable",
      "₹0 government fee and ₹0 facilitation charge on the official form",
      "Payment using the beneficiary bank account accepted during processing",
    ],
    eligibilityChecklist: [
      "The beneficiary is a person with disability residing in Punjab",
      "Disability type and percentage are certified by a competent authority",
      "Current departmental income, employment, land, property and tax conditions are satisfied",
      "Accepted age and residence evidence is available",
      "A parent or guardian can provide the additional evidence where the beneficiary does not apply personally",
      "The beneficiary's bank details can be verified",
    ],
    practicalTips: [
      "Check that the disability certificate clearly records the beneficiary, disability and percentage.",
      "Use the beneficiary's bank details, as requested in the official form, and confirm the account is active.",
      "If a parent or guardian applies, prepare both the representative's and beneficiary's details.",
      "Read the entire self-declaration before signing and reconfirm its older financial thresholds.",
      "Keep the supporting file even after submission because the declaration says it may be requested later.",
    ],
    faqs: [
      { question: "Can a parent apply for a child with disability?", answer: "Yes. The official form permits a mother, father or guardian to apply, and specifically requires one of them to declare where the person with disability is a minor." },
      { question: "Is a disability certificate mandatory?", answer: "Yes. Proof of disability issued by the competent authority is listed as mandatory." },
      { question: "Does the form charge a fee?", answer: "No. The form lists a government fee of ₹0 and facilitation charges of ₹0." },
      { question: "Which disability categories appear on the form?", answer: "The form includes physical, visual, hearing, speech and language, intellectual, neurological, blood-disorder and multiple disabilities, with several listed subtypes." },
      { question: "Is the ₹60,000 income figure definitely current?", answer: "It appears in the self-declaration of the official form, but that form is marked last revised in February 2019. Confirm the operative threshold before applying." },
    ],
  },
  "national-family-benefit-scheme-punjab": {
    overview: [
      "The National Family Benefit Scheme is designed to provide one-time support when a below-poverty-line family loses its primary earning member. In Punjab, the Department of Social Security and Women and Child Development processes the service and asks for information about the beneficiary, the deceased person and the family's BPL record.",
      "The official form explains that the primary earning member can be a woman or a man and is the person whose income was greater than the family's other earning members. It records that the person must have been between 18 and 64 years of age at death. The applicant therefore needs evidence of death as well as enough family information for the department to verify the deceased person's role and the family's BPL status.",
      "This is not a continuing pension. It is a family-benefit claim linked to a specific death and household circumstances. The available Punjab form is older and does not print the grant amount, so the amount should be confirmed through the department rather than inferred from national summaries or another state's portal.",
    ],
    benefitDetails: [
      "One-time financial assistance after approval of an eligible family claim",
      "Coverage following the death of a woman or man who was the family's primary earner",
      "Service for a family meeting the current BPL verification rules",
      "Free application form through the District Social Security Officer office",
      "No assistance amount stated in the Punjab form reviewed for this guide",
    ],
    eligibilityChecklist: [
      "The family meets Punjab's currently accepted below-poverty-line verification requirement",
      "The deceased person was the family's primary earning member",
      "The deceased person's age at death falls within the currently operative scheme rule",
      "A registered death certificate is available",
      "The applicant can establish the relationship to the beneficiary and deceased person",
      "Family, BPL, identity and bank records are consistent and verifiable",
    ],
    practicalTips: [
      "Obtain the registered death certificate before beginning the benefit application.",
      "Check the deceased person's name, parent or spouse name, age and death date across records.",
      "Locate the BPL card, family ID and member ID information requested by the form.",
      "Ask the District Social Security Officer to confirm the current grant and filing deadline.",
      "Keep the complete application copy and acknowledgement for follow-up.",
    ],
    faqs: [
      { question: "Who is treated as the primary earning member?", answer: "The Punjab form describes the primary earning woman or man as the person whose income was greater than the family's other earning members." },
      { question: "What age condition appears in the form?", answer: "The available form says the primary earner's age at death is considered between 18 and 64 years, but this should be reconfirmed because the form was last revised in 2017." },
      { question: "Is a death certificate mandatory?", answer: "Yes. A scanned copy of the death certificate is listed as mandatory, along with the self-declaration." },
      { question: "Does the scheme provide a monthly pension?", answer: "No. It is a one-time family-benefit claim associated with the death of the primary earner." },
      { question: "How much assistance is paid in Punjab?", answer: "The official Punjab form reviewed for this article does not state an amount. Confirm the currently sanctioned grant with the department before relying on a third-party figure." },
    ],
  },
  "aashirwad-scheme-punjab": {
    overview: [
      "The Aashirwad Scheme is Punjab's marriage-assistance programme for eligible women from specified low-income and socially disadvantaged groups. Current government material describes financial assistance of ₹51,000 and an end-to-end online system designed to send approved funds directly to the beneficiary's bank account.",
      "The scheme covers eligible Scheduled Caste and Christian brides, Backward Class or Caste brides, brides from economically weaker sections, daughters of widows of any caste, and eligible Scheduled Caste widows or divorced women at remarriage. The bride must be at least 18, and the parents or guardian must satisfy Punjab domicile and family-income conditions.",
      "Aashirwad was previously known as Shagun, so older forms and articles may use both names. Applicants should distinguish this department-administered programme from the separate Punjab BOCW Shagun Scheme for registered construction workers. The eligibility authority, source, documents and application channel are not the same.",
    ],
    benefitDetails: [
      "₹51,000 financial assistance for an approved eligible marriage or covered remarriage",
      "Direct Benefit Transfer to the beneficiary bank account",
      "Online application and workflow through the official Ashirwad portal",
      "Assistance limited to up to two eligible daughters in one family",
      "Nil facilitation charge in Punjab's approved service-charge notification",
    ],
    eligibilityChecklist: [
      "The bride is aged 18 years or above",
      "The parents or guardian meet Punjab's current domicile requirement",
      "The bride falls within a category covered by the scheme",
      "Annual family income does not exceed the currently stated ₹32,790 ceiling",
      "The claim remains within the two-daughter family limit",
      "The application is submitted within the portal's currently permitted marriage-related period",
      "Identity, category, income, marriage and bank records can be verified",
    ],
    practicalTips: [
      "Use only the official `ashirwad.punjab.gov.in` portal for the online application.",
      "Confirm that the bride's name and date of birth match across Aadhaar, age and bank records.",
      "Prepare category and income evidence before entering the application.",
      "Apply before the marriage where possible instead of relying on the post-marriage window.",
      "Save the application number, uploaded documents and every portal message.",
    ],
    faqs: [
      { question: "How much assistance is provided?", answer: "Current Punjab government material describes financial assistance of ₹51,000 for an approved eligible case." },
      { question: "Is Aashirwad the same as the BOCW Shagun Scheme?", answer: "No. Aashirwad is administered through the Social Justice department for covered low-income categories. BOCW Shagun is a separate welfare-board benefit for registered construction workers." },
      { question: "What is the minimum age for the bride?", answer: "The bride must be 18 years old or above." },
      { question: "How many daughters can receive assistance?", answer: "The scheme limits assistance to up to two eligible daughters of the concerned family." },
      { question: "Why does an old Punjab form say ₹15,000?", answer: "That downloadable form was last revised in August 2017 and contains superseded benefit wording. Current government material describes ₹51,000." },
      { question: "Where should the application be made?", answer: "Use the official Punjab Ashirwad portal and follow its current registration, upload and submission instructions." },
    ],
  },
  "bebe-nanki-laadli-beti-kalyan-scheme": {
    overview: [
      "Bebe Nanki Laadli Beti Kalyan Scheme is a Punjab girl-child welfare programme associated with measures to improve the state's adverse child sex ratio. The Government of Punjab's departmental page continues to name it among the services of the Department of Social Security and Women and Child Development. An official Comptroller and Auditor General report also identifies it, together with Kanya Jyoti Jagriti, as a state-funded scheme and records expenditure during 2009–14.",
      "Those official references establish that the scheme is genuine, but they do not answer the questions a family needs answered before applying in 2026. The department listing supplies no current form, enrolment window, income limit, birth-date condition, instalment table or submission channel. The audit describes historical implementation rather than present availability. For that reason, this guide does not label fresh enrolment as open and does not present an amount copied from an undated third-party article as a current entitlement.",
      "Families may encounter online claims that the government deposits an initial amount through an insurance or investment arrangement and pays a total of ₹61,000 at educational or age milestones. Such descriptions may reflect an earlier version of the programme, but we did not locate a current Punjab notification or form that confirms those figures for new applicants. A responsible application begins with the District Social Security Officer or an authorized Sewa Kendra confirming whether the scheme accepts fresh cases and supplying the instructions currently in force.",
    ],
    benefitDetails: [
      "Officially documented purpose connected with improving the adverse sex ratio and supporting the girl child",
      "Continued inclusion of the scheme name on Punjab's departmental service listing",
      "Historical confirmation as a state-funded Punjab scheme in a CAG compliance audit",
      "No current benefit amount or instalment schedule verified in the official public material reviewed",
      "No confirmation from the reviewed sources that fresh enrolment is open in 2026",
    ],
    eligibilityChecklist: [
      "The girl and her parent or guardian can establish Punjab residence under the current rule",
      "The girl's registered birth details meet any operative birth-date or age condition",
      "The household meets the current income or economic-category condition, if one applies",
      "The family satisfies any limit on the number of eligible girls under the current instructions",
      "The required birth, family, income and identity records are available and consistent",
      "An authorized Punjab office confirms that enrolment is open and the case fits the current rules",
    ],
    practicalTips: [
      "Ask the office specifically about fresh enrolment, not only whether the scheme name exists.",
      "Request a copy or reference number for the latest notification, form or departmental instruction.",
      "Do not treat the widely repeated ₹61,000 figure as guaranteed until an official confirms the current schedule in writing.",
      "Check that the girl's name, birth date and parents' names match across the birth certificate and family records.",
      "Never share Aadhaar OTPs, bank PINs or original documents with an unverified agent or website.",
      "If an application is accepted, retain a dated acknowledgement and a copy of every submitted page.",
    ],
    faqs: [
      { question: "Is Bebe Nanki Laadli Beti Kalyan Scheme a genuine Punjab scheme?", answer: "Yes. It appears in the Government of Punjab department's service listing, and a CAG audit records its historical operation as a state-funded scheme." },
      { question: "Are new applications open in 2026?", answer: "The official sources reviewed do not confirm a current enrolment window. Ask the District Social Security Officer or an authorized Sewa Kendra before relying on an online application claim." },
      { question: "Does the scheme currently provide ₹61,000?", answer: "That amount is widely repeated online, but we did not find a current official Punjab notification or application form confirming it for new cases. It should not be treated as a guaranteed current benefit." },
      { question: "Can I apply through a private website?", answer: "Do not submit identity or bank information through a private page. First obtain the authorized route from the Punjab department or Sewa Kendra." },
      { question: "Which office should a family contact?", answer: "Start with the District Social Security Officer for the family's district or an authorized Punjab Sewa Kendra and ask for the current scheme instructions." },
      { question: "What should I ask the official?", answer: "Ask whether fresh enrolment is open, who qualifies, what benefit schedule applies, which form is current, where it must be submitted and whether any deadline applies." },
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

  "punjab-5-marla-plot-scheme": {
    overview: [
      "The Punjab 5 Marla Plot Scheme is the commonly used name for a rural housing-welfare framework under which eligible landless and houseless residents may be considered for residential plots from available village common or Shamlat Deh land. The legal foundation is Rule 13-A of the Punjab Village Common Lands (Regulation) Rules, 1964. It permits a Panchayat, with previous approval of the Government, to give Shamlat Deh land free of cost to a landless worker residing in the Sabha area for construction of a residential house.",

      "Punjab later framed a policy dated 17 April 2001 for allotment of free 5 Marla plots to eligible Scheduled Caste families and other poor families for construction of houses. Punjab and Haryana High Court decisions have described how the policy operates: the concerned Gram Panchayat convenes a Gram Sabha meeting, eligible beneficiaries are identified, a resolution is passed and the claims are then verified by the prescribed authorities before allotment can be completed.",

      "The Punjab 5 Marla Plot Scheme should therefore not be understood as an ordinary housing lottery in which every resident can submit an online form and automatically receive free land. Availability depends on the applicable government policy, beneficiary eligibility, village-level identification, availability and legal status of Panchayat or Shamlat Deh land, verification and approval by competent authorities.",

      "Search interest for terms such as Punjab 5 Marla Plot Scheme 2026, Punjab free plot scheme, 5 Marla Plot Scheme Punjab apply online and Punjab 5 Marla Plot Scheme registration can rise rapidly whenever a new housing or land-allotment announcement is expected. Applicants should distinguish a genuine new government notification from the older legal and policy framework described on this page.",

      "As of the last review of this guide on 21 August 2026, PunjabSchemes.com has not verified a fresh statewide Government of Punjab notification opening a general 2026 online application portal for free 5 Marla plots. This page will be updated if Punjab announces a new application window, beneficiary survey, district-wise programme, Gram Sabha identification exercise or official registration portal.",

      "Until a fresh official announcement is available, residents should verify implementation with the concerned Gram Panchayat, Block Development and Panchayat Office, District Development and Panchayat Office or district administration. Avoid paying private agents who claim that they can guarantee a plot or add a name to a government beneficiary list.",
    ],

    benefitDetails: [
      "Residential land of approximately 5 Marla under the applicable Punjab policy and local allotment process",
      "Eligible Shamlat Deh or Panchayat land may be provided free of cost where the legal and administrative conditions are satisfied",
      "The land is intended for construction of the beneficiary's own residential house",
      "The framework targets eligible landless and houseless rural households rather than general property buyers or investors",
      "Beneficiary identification involves Gram Sabha or Gram Panchayat processes followed by administrative verification",
      "Final allotment depends on suitable land being legally available and government approval being obtained",
      "Rule 13-A restricts sale, exchange or mortgage of land allotted under the provision, except mortgage for raising a loan to construct the house",
    ],

    eligibilityChecklist: [
      "The applicant should be a resident of the concerned Gram Sabha area",
      "The applicant should satisfy the landless or houseless condition under the policy currently being applied",
      "Under the historical policy, the beneficiary should not already have a house or suitable residential land for construction of a house",
      "The historical scheme included specified Scheduled Caste and other poor or houseless categories",
      "Any category, income, family or marital-status conditions in a fresh notification must be checked from the current official rules",
      "The applicant must pass the local and departmental verification process",
      "The applicant's identity, residence, family and land records should be consistent",
      "Actual allotment also depends on suitable Panchayat or Shamlat Deh land being legally available for residential use",
    ],

    practicalTips: [
      "Ask the Gram Panchayat whether a beneficiary list, Gram Sabha meeting, survey or resolution relating to residential plots currently exists in your village.",
      "If someone says a Punjab 5 Marla Plot Scheme 2026 application has opened, ask for the official Government notification number or a punjab.gov.in link before submitting documents.",
      "Do not pay an agent for guaranteed inclusion in a beneficiary list. Selection and verification are administrative processes and cannot legitimately be guaranteed by a private intermediary.",
      "Keep residence, caste, family and identity records consistent. Differences in names, father's or spouse's name, address or household records can delay verification.",
      "If the family owns inherited, jointly held or disputed residential land, disclose it and ask the competent authority how it affects the landless or houseless eligibility test.",
      "Keep copies or photographs of any Gram Sabha resolution, beneficiary-list entry, application acknowledgement or verification notice relating to the claim.",
      "Do not occupy Panchayat land merely because a scheme is being discussed. Legal allotment and possession should follow the official approval process.",
      "Do not purchase or privately transfer a plot represented as a government-allotted 5 Marla plot without checking the allotment conditions and land records.",
      "Do not confuse Punjab, India with Punjab, Pakistan. Search results for 5 Marla schemes frequently surface Pakistan housing programmes that have completely different eligibility rules and application portals.",
    ],

    faqs: [
      {
        question: "What is the Punjab 5 Marla Plot Scheme?",
        answer:
          "It is the commonly used name for Punjab's rural welfare framework under which eligible landless and houseless persons may be considered for residential plots from available Shamlat Deh or Panchayat land. Rule 13-A provides the legal basis for giving qualifying land free of cost for construction of a residence.",
      },
      {
        question: "Has the Punjab 5 Marla Plot Scheme 2026 been launched?",
        answer:
          "As of 21 August 2026, PunjabSchemes.com has not verified a fresh statewide Government of Punjab notification opening a new general 2026 online application process for free 5 Marla plots. The underlying legal provision and the older 17 April 2001 policy are genuine, but any fresh launch should be confirmed through an official Punjab Government notification.",
      },
      {
        question: "Is Punjab 5 Marla Plot Scheme online registration open?",
        answer:
          "No current statewide 2026 online registration portal has been verified for this guide. Do not submit Aadhaar, bank, caste or family information to an unofficial website claiming that registration has opened unless the Punjab Government confirms the portal.",
      },
      {
        question: "How can I apply for the Punjab 5 Marla Plot Scheme?",
        answer:
          "Historically, beneficiary identification has involved the Gram Sabha, Gram Panchayat and subsequent administrative verification. Residents should first ask the concerned Gram Panchayat whether beneficiary identification or allotment is currently underway and what documents or application procedure are being used.",
      },
      {
        question: "Who may be eligible for a free 5 Marla plot in Punjab?",
        answer:
          "The historical policy concerned eligible landless and houseless rural residents and included specified Scheduled Caste and other poor families. Residence in the concerned Gram Sabha area and lack of a suitable house or house site have been important conditions. Any new notification may modify eligibility.",
      },
      {
        question: "Is the Punjab 5 Marla plot completely free?",
        answer:
          "Rule 13-A permits qualifying Shamlat Deh land to be given free of cost for construction of a residential house. This does not mean every applicant is entitled to a plot. Land availability, beneficiary eligibility, verification and government approval still apply.",
      },
      {
        question: "Where can I get the Punjab 5 Marla Plot Scheme application form?",
        answer:
          "No current statewide 2026 application form or official online registration portal has been verified. Check with the Gram Panchayat, Block Development and Panchayat Office, district administration or an official Punjab Government source before using any form found online.",
      },
      {
        question: "What documents may be required for the Punjab 5 Marla Plot Scheme?",
        answer:
          "Typical verification can involve identity, Punjab residence, family record, landlessness or housing-status evidence and applicable caste or category documents. The exact document list must come from the authority handling the current allotment process.",
      },
      {
        question: "How is the beneficiary list prepared?",
        answer:
          "Court records describing the historical policy show a process involving Gram Sabha identification, a Gram Panchayat resolution and subsequent verification by prescribed authorities. Inclusion in an initial list should not be treated as final approval until verification and allotment are completed.",
      },
      {
        question: "Can I check Punjab 5 Marla Plot Scheme beneficiary status online?",
        answer:
          "No statewide 2026 online status-check portal has been verified. Where a local identification process exists, status may need to be checked through the Gram Panchayat or the competent block or district authority.",
      },
      {
        question: "Can a beneficiary sell a government-allotted 5 Marla plot?",
        answer:
          "Rule 13-A restricts sale, exchange or mortgage of land allotted under the provision, except mortgage for raising a loan to construct the house. The beneficiary must also follow any additional conditions stated in the allotment letter.",
      },
      {
        question: "Is the scheme only for Scheduled Caste families?",
        answer:
          "The historical 2001 policy included eligible Scheduled Caste families as well as other poor families. The exact categories covered by any fresh implementation or new 2026 scheme should be checked from its official notification.",
      },
      {
        question: "Does every Punjab village have 5 Marla plots available?",
        answer:
          "No. Personal eligibility does not itself create land. Actual allotment depends on suitable Panchayat or Shamlat Deh land being legally available in the concerned area and approved for the purpose.",
      },
      {
        question: "Is Punjab's 5 Marla scheme the same as Pakistan's housing schemes?",
        answer:
          "No. This guide concerns Punjab state in India. Programmes operating in Punjab province, Pakistan use different laws, identity systems, authorities and application portals.",
      },
      {
        question: "What should I do if a new Punjab 5 Marla Plot Scheme is announced?",
        answer:
          "Check the official notification first. Confirm the launch date, eligible districts or villages, beneficiary categories, application dates, documents, selection process and official application or status channel before sharing personal information.",
      },
    ],
  },

};

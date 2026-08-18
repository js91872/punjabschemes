import type { Scheme } from "@/lib/schemes";

export type ArticleSection = { heading: string; paragraphs: string[] };

export function getApplicationGuide(scheme: Scheme): ArticleSection[] {
  const name = scheme.name;
  const authority = scheme.department;

  return [
    {
      heading: "How to read the eligibility rules",
      paragraphs: [
        `Start with the eligibility conditions for ${name}, but do not treat any single condition as the whole test. Government schemes normally require every applicable condition to be satisfied together. A person may appear to fit the broad beneficiary description and still need to prove age, residence, family circumstances, registration status, income, contribution history or another scheme-specific fact. Read the checklist from beginning to end and mark each item as confirmed, uncertain or not applicable before spending time on the form.`,
        `Where this guide says that a requirement must be confirmed, that is deliberate. ${authority} remains the deciding authority, and an official may need to examine records that are not visible to an information website. If your circumstances sit near a threshold, or the official document does not publish the latest threshold, ask the department or authorized service centre to confirm the rule in force on the date you apply. Keep a note of the office, date and guidance received.`,
      ],
    },
    {
      heading: "Preparing a reliable document file",
      paragraphs: [
        `A strong application file is consistent as well as complete. Compare the applicant's name, parent's or spouse's name, date of birth and address across identity documents, certificates and the bank passbook. Small differences such as initials, translated spellings, an old village address or a changed surname can cause a record to be held for clarification. If a correction is necessary, begin it before submitting ${name}; attaching several conflicting documents usually does not resolve the underlying mismatch.`,
        `Carry original documents for verification and keep clear copies for submission. Scan or photograph the complete page in good light, without cropped corners, glare or unreadable seals. For certificates, check the issuing authority, certificate number and date. For bank evidence, make sure the beneficiary's name, account number and IFSC are visible. Never hand over an original permanently unless an official written process specifically requires it, and never share an Aadhaar OTP, bank OTP, PIN, password or card security code with an agent.`,
      ],
    },
    {
      heading: "Completing the application correctly",
      paragraphs: [
        `Use only the application route currently recognized by ${authority}. If assisted registration is available, the operator should enter information from your documents rather than guessing. Review every field before final submission, especially category, date of birth, relationship details, registration number, bank account and mobile number. A wrong category or transposed bank digit can affect both eligibility checking and payment. Ask for corrections while the application is still open instead of assuming they can easily be made later.`,
        `When a declaration appears on the form, read it before signing or authenticating. The declaration makes the applicant responsible for the information supplied and may permit verification against government databases. Do not omit an inconvenient fact or select an inaccurate answer merely to move past a required field. If the form does not provide a suitable option, ask the authorized centre how the case should be recorded. Submit every mandatory attachment and obtain an acknowledgement, receipt or application number before leaving.`,
      ],
    },
    {
      heading: "What happens after submission",
      paragraphs: [
        `Submission is not the same as approval. The application may pass through document scrutiny, database matching, local verification and sanction by the competent authority. Some schemes also require confirmation from an educational institution, medical authority, labour office, local body or bank. Processing time therefore varies by case and workload. Use the acknowledgement number when asking for an update and allow the official channel a reasonable period before escalating a newly submitted application.`,
        `If the status shows a query, deficiency or objection, first obtain the exact reason. Correct that issue with the appropriate evidence rather than filing repeated duplicate applications. If an application is rejected, ask whether the system provides reconsideration, appeal or a fresh-application route and note any deadline. Keep the rejection message or order. It is far more useful for resolving the case than an informal statement that the application “did not work.”`,
      ],
    },
    {
      heading: "Bank account and payment checks",
      paragraphs: [
        `For a scheme paid through a bank account, approval and successful credit are separate steps. Confirm that the account is active, belongs to the intended beneficiary and can receive the payment method used by the scheme. Where Aadhaar-based Direct Benefit Transfer applies, ask the bank specifically whether Aadhaar is seeded and whether that account is mapped to receive DBT. An Aadhaar number printed in a passbook or stored for identity verification does not by itself prove that the DBT mapping is active.`,
        `Keep the registered mobile number working so that application and payment messages can reach you. If an expected payment does not arrive, update the passbook or obtain an account statement before assuming that the department did not release it. Then check application approval, bank-account status, name matching and DBT mapping through authorized channels. Do not pay anyone who promises to “release” a sanctioned payment, and do not approve an unknown UPI request in order to receive government money.`,
      ],
    },
    {
      heading: "Common mistakes that can delay a claim",
      paragraphs: [
        `Frequent problems include applying under the wrong category, using an outdated form, missing a deadline, submitting an expired registration, providing an unverified certificate, or entering bank details belonging to another person. Applications can also stall where contribution records, family relationships or residence details are incomplete. Review the scheme-specific important note on this page because it identifies the issue most likely to matter for ${name}.`,
        `Avoid relying on social-media graphics, forwarded messages or websites that imitate a government portal. A page can repeat a real scheme name while inventing an online application link, fee, beneficiary list or payment date. Check the domain and compare the claim with the official source linked below. PunjabSchemes.com explains the process but does not accept applications, collect identity documents, check private beneficiary records or guarantee approval.`,
      ],
    },
    {
      heading: "If you need help with the application",
      paragraphs: [
        `Take your documents and acknowledgement to the authorized office or service centre associated with the scheme. Explain the exact task you need help with: new registration, document correction, status enquiry, bank correction, objection response or appeal. A precise question usually produces a more useful answer than asking only whether money will come. For a technical problem, record the date, approximate time and error message, but hide Aadhaar and bank numbers before sharing a screenshot.`,
        `Applicants who cannot travel or use an online service should ask whether assisted or doorstep options are currently available. If another person helps complete the form, the applicant should still review the final information and retain the receipt personally. Assistance does not transfer responsibility for inaccurate information. When rules or service availability change, the latest written direction from ${authority} takes priority over this guide and over older application videos.`,
      ],
    },
    {
      heading: "How this guide is maintained",
      paragraphs: [
        `PunjabSchemes.com separates confirmed facts from practical guidance. Scheme amounts, eligibility conditions, deadlines and document requirements are taken from the official material identified on the page. Practical preparation advice is included to help readers avoid preventable errors, but it does not create an additional government rule. Where an available official document is old or incomplete, the page says so instead of presenting an unsupported number as current.`,
        `The review date records when our source check was completed; it is not a promise that the government has made no later change. Before applying, open the official link and look for a newer notification, revised form or departmental instruction. If the official source conflicts with this article, follow the official source. This verification habit is especially important for benefit amounts, income limits, contribution requirements, application windows and the office authorized to receive a claim.`,
      ],
    },
  ];
}

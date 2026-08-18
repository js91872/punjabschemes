import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important limitations, independent-site disclosure and user responsibilities when using PunjabSchemes.com.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return <article className="container section narrow info-page">
    <p className="eyebrow green">Important information</p><h1>Disclaimer</h1>
    <p className="lead">PunjabSchemes.com provides independent educational information about government schemes. It is not a government website and does not provide official decisions or individualized professional advice.</p>
    <p className="policy-date">Last updated: 18 August 2026</p>

    <h2>No government affiliation</h2>
    <p>PunjabSchemes.com is not affiliated with, endorsed by, authorized by or operated on behalf of the Government of Punjab, Government of India, any government department, Sewa Kendra, welfare board or public authority. Government names, programme names and source links are used only to identify and explain public schemes.</p>

    <h2>Information can change</h2>
    <p>Eligibility rules, benefit amounts, documents, application windows, service channels and department procedures can change. We make reasonable efforts to use authoritative sources and identify the review date, but we cannot guarantee that every page reflects a change made after that review. The latest official notification, form and decision of the responsible authority always take priority.</p>

    <h2>No eligibility or payment guarantee</h2>
    <p>Reading a guide or appearing to satisfy a checklist does not create a right to a benefit. Only the competent government authority can verify records, determine eligibility, approve an application or release payment. PunjabSchemes.com cannot check a private application status, intervene in processing, overturn a rejection or promise when money will arrive.</p>

    <h2>No application or fee collection</h2>
    <p>We do not accept scheme applications, identity documents, application fees, facilitation charges or payments on behalf of any authority. Do not send us Aadhaar details, bank information, OTPs, PINs, passwords, medical records or document scans. Apply only through the official channel confirmed by the responsible department.</p>

    <h2>External links</h2>
    <p>Our pages link to government and other external websites for verification and application guidance. Those websites are controlled by their respective operators. We are not responsible for their availability, security, content, privacy practices or later changes. Check the destination domain before entering personal information.</p>

    <h2>No professional advice</h2>
    <p>Content is general information and is not legal, financial, tax, medical or other professional advice. If a decision may affect important rights, deadlines or finances, seek guidance from the responsible department or a qualified professional familiar with the individual facts.</p>

    <h2>Accuracy concerns</h2>
    <p>Please report a possible error to <a href="mailto:info@punjabschemes.com">info@punjabschemes.com</a> with the page URL and supporting official source. Our review process is described in the <Link href="/editorial-policy">editorial policy</Link>.</p>
  </article>;
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact PunjabSchemes.com",
  description: "Contact PunjabSchemes.com to report a correction, suggest an official source or ask about the independent information portal.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <article className="container section narrow info-page">
    <p className="eyebrow green">Get in touch</p><h1>Contact Punjab Schemes</h1>
    <p className="lead">Contact us about website corrections, official source updates, accessibility problems or general questions about PunjabSchemes.com.</p>

    <div className="contact-card"><span>Email</span><a href="mailto:info@punjabschemes.com">info@punjabschemes.com</a><p>We aim to review genuine website enquiries within a reasonable period, but we cannot guarantee an individual response.</p></div>

    <h2>For the fastest review</h2>
    <p>Use a clear subject line and include the URL of the PunjabSchemes.com page concerned. For a correction, explain the statement that may be wrong and include a link to the newer government notification, form or department page whenever possible.</p>
    <ul>
      <li><strong>Correction:</strong> page URL, disputed text and supporting official source</li>
      <li><strong>Broken link:</strong> page URL and the link that does not open</li>
      <li><strong>Accessibility issue:</strong> device, browser and a description of the barrier</li>
      <li><strong>General enquiry:</strong> a concise explanation of what you need from this website</li>
    </ul>

    <div className="scheme-alert"><strong>Protect your information:</strong> Do not email Aadhaar numbers, voter IDs, bank details, OTPs, passwords, identity-document scans, medical records or completed application forms.</div>

    <h2>Questions we cannot answer</h2>
    <p>PunjabSchemes.com cannot check whether your government application is approved, find your beneficiary record, explain a private rejection, change bank information or release a benefit payment. For those matters, use the official department or service channel linked in the relevant scheme guide.</p>

    <h2>Government departments and official notices</h2>
    <p>If you represent a government department or have an authoritative correction, please identify your department and provide a publicly accessible official source. We will verify the material under our <Link href="/editorial-policy">editorial policy</Link>.</p>

    <h2>Advertising and partnerships</h2>
    <p>Commercial enquiries may use the same email address. Advertising or a partnership cannot purchase a favourable eligibility statement, alter an official-source conclusion or influence whether a scheme is described as current.</p>
  </article>;
}

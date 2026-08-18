import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PunjabSchemes.com handles website visits, emails, technical logs, cookies and third-party services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return <article className="container section narrow info-page">
    <p className="eyebrow green">Your privacy</p><h1>Privacy policy</h1>
    <p className="lead">This policy explains the information PunjabSchemes.com may receive when you browse the website or contact us, why it may be processed and the choices available to you.</p>
    <p className="policy-date">Effective and last updated: 18 August 2026</p>

    <h2>Information you provide</h2>
    <p>If you email us, we receive the email address, name and content you choose to provide. We use it to review and respond to the enquiry, investigate a correction or protect the website. Please do not send Aadhaar numbers, voter IDs, bank details, OTPs, passwords, medical records, identity-document scans or completed government applications.</p>

    <h2>Technical information</h2>
    <p>Our hosting and security providers may automatically process standard technical information such as IP address, browser and device type, requested page, referring page, date and time, and error or security events. This information is used to deliver the site, diagnose failures, prevent abuse and maintain security. Technical logs may be retained by the provider according to its operational and legal requirements.</p>

    <h2>Cookies, analytics and advertising</h2>
    <p>The current portal does not require a visitor account or a scheme-application form. If analytics, advertising or other cookie-based services are introduced, this policy and any required consent controls will be updated before or when those services are enabled. Third-party advertising providers may use cookies or similar technologies to measure ads and prevent fraud, subject to their policies and applicable choices.</p>

    <h2>How information is used</h2>
    <ul>
      <li>To operate, secure and improve PunjabSchemes.com</li>
      <li>To answer messages and investigate correction reports</li>
      <li>To understand and fix technical errors or abuse</li>
      <li>To comply with lawful obligations and enforce website protections</li>
    </ul>

    <h2>Sharing and disclosure</h2>
    <p>We do not sell personal information. Information may be processed by service providers that host, secure or support the website and email service. It may also be disclosed when reasonably necessary to comply with law, respond to valid legal process, protect users or investigate fraud and security threats.</p>

    <h2>External websites</h2>
    <p>Scheme guides link to government and other external websites. Their privacy practices are controlled by their operators and are not covered by this policy. Review the destination website&apos;s privacy notice before submitting personal information.</p>

    <h2>Retention and security</h2>
    <p>We retain correspondence only as long as reasonably needed for the enquiry, corrections record, security or legal obligations. Reasonable safeguards are used, but no internet transmission or storage system can be guaranteed completely secure.</p>

    <h2>Your choices and questions</h2>
    <p>You may ask about personal information you have directly provided to us or request deletion where retention is not required for security, legal or legitimate operational reasons. Email <a href="mailto:info@punjabschemes.com">info@punjabschemes.com</a>. We may need enough information to verify and locate the relevant correspondence.</p>

    <h2>Children&apos;s privacy</h2>
    <p>This website provides general information and is not designed to collect personal information from children. A parent or guardian should contact us if they believe a child has sent personal information to the website.</p>

    <h2>Policy changes</h2>
    <p>We may update this policy when the website, service providers or legal requirements change. The revised date will appear at the top of this page. Material changes should be reviewed before continuing to use newly introduced features.</p>
  </article>;
}

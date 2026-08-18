import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About PunjabSchemes.com",
  description: "Learn why PunjabSchemes.com exists, how its independent scheme guides are researched and what the website does not provide.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <article className="container section narrow info-page">
    <p className="eyebrow green">About the portal</p><h1>Making Punjab scheme information easier to use</h1>
    <p className="lead">PunjabSchemes.com is an independent information website that helps Punjab residents discover and understand government schemes, pensions, scholarships and welfare benefits.</p>
    <div className="scheme-alert"><strong>Important:</strong> PunjabSchemes.com is not affiliated with, authorized by or operated by the Government of Punjab or the Government of India.</div>

    <h2>Why we created Punjab Schemes</h2>
    <p>Government information is often spread across department pages, application forms, notifications and service portals. A person may find the scheme name but still struggle to understand who can apply, what documents are required, whether an old benefit amount remains current or which link is genuinely official.</p>
    <p>Our purpose is to organize that information into practical, plain-language guides. Each published scheme page brings together the benefit, eligibility evidence, documents, application preparation, important limitations, frequently asked questions and a link to the relevant government source.</p>

    <h2>What we publish</h2>
    <ul>
      <li>Guides to verified Punjab government and welfare-board schemes</li>
      <li>Plain-language explanations of official forms and notifications</li>
      <li>Document and application-preparation checklists</li>
      <li>Warnings where an available official source is old, incomplete or needs reconfirmation</li>
      <li>Direct links to the government source used during our review</li>
    </ul>

    <h2>What we do not do</h2>
    <p>We do not accept applications, approve benefits, access beneficiary records, collect application fees or guarantee eligibility. We cannot speed up a government decision or release a payment. Visitors should never send us Aadhaar numbers, bank details, OTPs, passwords, identity-document scans or complete application files.</p>

    <h2>How our information is checked</h2>
    <p>We prioritize Punjab Government pages, official application forms, Gazette notifications, department portals and welfare-board material. Each scheme page records when it was reviewed and points readers to the official source for the final check. Our complete standards are available in the <Link href="/editorial-policy">editorial policy</Link>.</p>

    <h2>Corrections and contact</h2>
    <p>Scheme rules can change, and even careful summaries may need correction. If you find a possible error or a newer official notification, email <a href="mailto:info@punjabschemes.com">info@punjabschemes.com</a> or use the instructions on our <Link href="/contact">contact page</Link>.</p>

    <div className="info-actions"><Link className="button" href="/schemes">Browse verified schemes</Link><Link className="text-link" href="/editorial-policy">Read our editorial standards →</Link></div>
  </article>;
}

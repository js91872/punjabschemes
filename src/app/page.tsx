import type { Metadata } from "next";
import Link from "next/link";
import { SchemeCard } from "@/components/scheme-card";
import { schemes } from "@/lib/schemes";
import { categoryConfig, categorySlugFor } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

const categories = Object.entries(categoryConfig)
  .map(([slug, category]) => ({ ...category, slug, count: schemes.filter((scheme) => categorySlugFor(scheme.category) === slug).length }))
  .filter((category) => category.count > 0);

const homepageFaqs = [
  {
    question: "Is PunjabSchemes.com an official government website?",
    answer: "No. PunjabSchemes.com is an independent information portal. We explain schemes in plain language and link to the responsible government department for applications and final decisions.",
  },
  {
    question: "How is scheme information checked?",
    answer: "Each published guide is checked against an official department page, board website, notification or government document. The guide also shows when its information was last verified.",
  },
  {
    question: "Can I apply for a scheme on this website?",
    answer: "No. We do not accept applications, documents or payments. Use the official application route linked inside the relevant scheme guide.",
  },
  {
    question: "What should I do if scheme rules have changed?",
    answer: "Treat the responsible department as the final authority. Check the official source linked in the guide and contact the department before submitting an application.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Punjab Government Schemes 2026 – Punjab, India" },
  description: "Explore Punjab Government schemes in Punjab, India: pensions, scholarships, health, housing, financial assistance and welfare benefits with official links.",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "pa-IN": "/pa", "x-default": "/" },
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/punjab-schemes-logo.png`,
        email: "info@punjabschemes.com",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Punjab, India",
          containedInPlace: { "@type": "Country", name: "India" },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: ["en-IN", "pa-IN"],
        about: {
          "@type": "AdministrativeArea",
          name: "Punjab, India",
          containedInPlace: { "@type": "Country", name: "India" },
        },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: homepageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Punjab, India welfare schemes explained clearly</p>
            <h1>Punjab Government Schemes 2026 – Punjab, India</h1>
            <p className="lead">Explore pensions, scholarships, women and children schemes, health and housing schemes, construction worker support, financial assistance and other welfare benefits from the Government of Punjab, India. Check eligibility, documents and official application links—without the jargon.</p>
            <div className="hero-actions"><Link className="button button-light" href="/schemes">Find a scheme</Link><Link className="button button-ghost" href="/about">How we verify information</Link></div>
          </div>
          <aside className="hero-panel" aria-label="Portal highlights">
            <p className="hero-panel-label">Built for clarity</p>
            <div><strong>{schemes.length}</strong><span>verified guides</span></div>
            <div><strong>100%</strong><span>linked to official sources</span></div>
            <div><strong>Free</strong><span>plain-language information</span></div>
          </aside>
        </div>
      </section>
      <section className="container section section-head-wrap">
        <div className="section-heading"><div><p className="eyebrow green">Browse by need</p><h2>Explore scheme categories</h2></div><Link className="text-link" href="/schemes">See all verified guides →</Link></div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className="category-card" href={`/categories/${category.slug}`} key={category.slug}>
              <span className="category-number">{String(index + 1).padStart(2, "0")} · {category.count} guides</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p><span className="category-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="featured-section"><div className="container section"><div className="section-heading"><div><p className="eyebrow green">Recently verified</p><h2>Start with these guides</h2></div></div><div className="scheme-grid">{schemes.slice(0, 3).map((scheme) => <SchemeCard key={scheme.slug} scheme={scheme} />)}</div></div></section>
      <section className="container section trust-section">
        <div><p className="eyebrow green">A safer way to research</p><h2>Government information, made easier—not replaced.</h2></div>
        <div className="trust-steps"><div><span>1</span><h3>We check the source</h3><p>Every published guide links to a Government of Punjab, India department or official board document.</p></div><div><span>2</span><h3>We explain the process</h3><p>Documents and application routes are organised into a practical checklist.</p></div><div><span>3</span><h3>You confirm officially</h3><p>Rules can change, so the final decision always belongs to the responsible department.</p></div></div>
      </section>
      <section className="container section home-faq">
        <p className="eyebrow green">Before you use a guide</p>
        <h2>Frequently asked questions</h2>
        <div className="home-faq-list">
          {homepageFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>
      <section className="notice">
        <div className="container notice-inner">
          <div><p className="eyebrow">Important</p><h2>Always apply through official channels</h2></div>
          <p>PunjabSchemes.com never accepts applications or payments. Use the government link provided inside each verified guide.</p>
        </div>
      </section>
    </>
  );
}

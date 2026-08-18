import type { Metadata } from "next";
import Link from "next/link";
import { SchemeCard } from "@/components/scheme-card";
import { schemes } from "@/lib/schemes";

const categories = [
  { name: "Pensions", slug: "pensions", description: "Old age, widow and other social-security pension guidance.", accent: "01" },
  { name: "Scholarships", slug: "scholarships", description: "Education support for eligible students across Punjab.", accent: "02" },
  { name: "Women & Children", slug: "women-and-children", description: "Family assistance and programmes focused on women and children.", accent: "03" },
  { name: "Construction Workers", slug: "construction-workers", description: "Welfare Board benefits for registered building workers and families.", accent: "04" },
];

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Punjab welfare, explained clearly</p>
            <h1>Find the support you may be eligible for.</h1>
            <p className="lead">Understand benefits, prepare documents and reach the right official application service—without the jargon.</p>
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
          {categories.map((category) => (
            <Link className="category-card" href={`/categories/${category.slug}`} key={category.slug}>
              <span className="category-number">{category.accent}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p><span className="category-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="featured-section"><div className="container section"><div className="section-heading"><div><p className="eyebrow green">Recently verified</p><h2>Start with these guides</h2></div></div><div className="scheme-grid">{schemes.slice(0, 3).map((scheme) => <SchemeCard key={scheme.slug} scheme={scheme} />)}</div></div></section>
      <section className="container section trust-section">
        <div><p className="eyebrow green">A safer way to research</p><h2>Government information, made easier—not replaced.</h2></div>
        <div className="trust-steps"><div><span>1</span><h3>We check the source</h3><p>Every published guide links to a Punjab government department or official board document.</p></div><div><span>2</span><h3>We explain the process</h3><p>Documents and application routes are organised into a practical checklist.</p></div><div><span>3</span><h3>You confirm officially</h3><p>Rules can change, so the final decision always belongs to the responsible department.</p></div></div>
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

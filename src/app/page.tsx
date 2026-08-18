import type { Metadata } from "next";
import Link from "next/link";

const categories = ["Pensions", "Scholarships", "Women & Children", "Agriculture"];

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container narrow">
          <p className="eyebrow">Independent Punjab welfare information</p>
          <h1>Find Punjab government schemes and benefits</h1>
          <p className="lead">Clear guidance on eligibility, benefits, documents and official application routes.</p>
          <Link className="button" href="/schemes">Browse all schemes</Link>
        </div>
      </section>
      <section className="container section">
        <h2>Explore by category</h2>
        <div className="card-grid">
          {categories.map((category) => (
            <article className="card" key={category}>
              <h3>{category}</h3>
              <p>Verified, plain-language guidance will be added during the content research phase.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="notice">
        <div className="container narrow">
          <h2>Use official sources for final decisions</h2>
          <p>We explain schemes independently and link to official departments for applications and authoritative rules.</p>
        </div>
      </section>
    </>
  );
}

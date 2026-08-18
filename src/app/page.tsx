import type { Metadata } from "next";
import Link from "next/link";

const categories = [
  { name: "Pensions", slug: "pensions" },
  { name: "Scholarships", slug: "scholarships" },
  { name: "Women & Children", slug: "women-and-children" },
  { name: "Construction Workers", slug: "construction-workers" },
];

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
            <Link className="card" href={`/categories/${category.slug}`} key={category.slug}>
              <h3>{category.name}</h3>
              <p>Verified, plain-language guidance will be added during the content research phase.</p>
            </Link>
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

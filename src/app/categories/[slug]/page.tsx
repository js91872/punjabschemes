import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SchemeCard } from "@/components/scheme-card";
import { categoryConfig, type CategorySlug, categorySlugFor } from "@/lib/categories";
import { schemes } from "@/lib/schemes";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(categoryConfig).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryConfig[slug as CategorySlug];
  return category ? { title: category.title, description: category.description, alternates: { canonical: `/categories/${slug}` } } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryConfig[slug as CategorySlug];
  if (!category) notFound();
  const matchingSchemes = schemes.filter((scheme) => categorySlugFor(scheme.category) === slug);
  const structuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: category.name, item: `${siteConfig.url}/categories/${slug}` },
  ] };
  return (
    <div className="container section category-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><span>{category.name}</span></nav>
      <p className="eyebrow green">Scheme category</p><h1>{category.title}</h1><p className="lead">{category.intro}</p>
      {matchingSchemes.length === 0 ? <div className="empty-state">Verified guides are coming soon. We do not publish a scheme until its official source and current status have been checked.</div> : <>
        <section><h2>Compare verified guides</h2><div className="comparison-wrap"><table className="comparison-table"><thead><tr><th>Scheme</th><th>Who it may help</th><th>Guide</th></tr></thead><tbody>{matchingSchemes.map((scheme) => <tr key={scheme.slug}><td>{scheme.name}</td><td>{scheme.beneficiaries}</td><td><Link className="text-link" href={`/schemes/${scheme.slug}`}>View guide →</Link></td></tr>)}</tbody></table></div></section>
        <section><h2>Detailed {category.name.toLowerCase()} guides</h2><div className="scheme-grid">{matchingSchemes.map((scheme) => <SchemeCard scheme={scheme} key={scheme.slug} />)}</div></section>
        <section className="category-explainer"><h2>How to use these guides</h2><p>Open the guide that best matches your circumstances, read every eligibility condition and prepare the listed documents before starting an application. Benefit amounts and thresholds can change, so each article identifies its official source and review date. PunjabSchemes.com provides independent guidance; the responsible department makes the final decision.</p></section>
      </>}
    </div>
  );
}

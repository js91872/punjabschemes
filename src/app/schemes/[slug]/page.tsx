import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScheme, schemes } from "@/lib/schemes";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() { return schemes.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const scheme = getScheme(slug);
  if (!scheme) return {};
  return { title: scheme.name, description: scheme.summary, alternates: { canonical: `/schemes/${slug}` } };
}

export default async function SchemePage({ params }: { params: Promise<{ slug: string }> }) {
  const scheme = getScheme((await params).slug);
  if (!scheme) notFound();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: scheme.name,
    description: scheme.summary,
    dateModified: scheme.lastReviewed,
    mainEntityOfPage: `${siteConfig.url}/schemes/${scheme.slug}`,
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
  return (
    <article className="container section narrow">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <p className="eyebrow">{scheme.category}</p>
      <h1>{scheme.name}</h1>
      <p className="lead">{scheme.summary}</p>
      <div className="scheme-alert"><strong>Independent guidance:</strong> PunjabSchemes.com is not a government website. Always use the official source for final requirements.</div>
      <h2>Who may apply</h2>
      <p>{scheme.beneficiaries}</p>
      <h2>Department</h2>
      <p>{scheme.department}</p>
      <h2>Application fee</h2>
      <p>{scheme.fee}</p>
      <h2>Documents to prepare</h2>
      <ul>{scheme.documents.map((document) => <li key={document}>{document}</li>)}</ul>
      <h2>How to apply</h2>
      <ol>{scheme.applicationMethods.map((method) => <li key={method}>{method}</li>)}</ol>
      <div className="scheme-note"><strong>Important:</strong> {scheme.importantNote}</div>
      <p><a className="button" href={scheme.officialUrl} rel="noopener noreferrer">Visit the official government source</a></p>
      <small>Information last reviewed: {scheme.lastReviewed}</small>
    </article>
  );
}

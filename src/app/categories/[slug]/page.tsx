import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SchemeCard } from "@/components/scheme-card";
import { schemes } from "@/lib/schemes";

const categories = {
  pensions: "Pensions",
  scholarships: "Scholarships",
  "women-and-children": "Women & Children",
  agriculture: "Agriculture",
  "construction-workers": "Construction Workers",
} as const;

type CategorySlug = keyof typeof categories;

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = categories[slug as CategorySlug];
  return name ? { title: `${name} Schemes in Punjab`, alternates: { canonical: `/categories/${slug}` } } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as CategorySlug];
  if (!category) notFound();
  const matchingSchemes = schemes.filter((scheme) => scheme.category === category);
  return (
    <div className="container section narrow">
      <p className="eyebrow">Scheme category</p>
      <h1>{category} schemes in Punjab</h1>
      {matchingSchemes.length === 0 ? <div className="empty-state">Verified guides are coming soon.</div> : <div className="scheme-grid">{matchingSchemes.map((scheme) => <SchemeCard scheme={scheme} key={scheme.slug} />)}</div>}
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScheme, schemes } from "@/lib/schemes";

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
  return <article className="container section narrow"><p className="eyebrow">{scheme.category}</p><h1>{scheme.name}</h1><p className="lead">{scheme.summary}</p><h2>Who can benefit</h2><p>{scheme.beneficiaries}</p><p><a className="button" href={scheme.officialUrl} rel="noopener noreferrer">Visit official source</a></p><small>Information last reviewed: {scheme.lastReviewed}</small></article>;
}

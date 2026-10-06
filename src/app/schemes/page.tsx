import type { Metadata } from "next";
import Link from "next/link";
import { SchemeDirectory } from "@/components/scheme-directory";
import { schemes } from "@/lib/schemes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Punjab Government Schemes 2026: Latest Schemes, Eligibility & Apply Online", description: "Browse Punjab Government Schemes 2026 for pensions, women, health, labour card, BOCW, family benefits and housing. Check eligibility, documents, forms, status and apply-online guidance.", alternates: { canonical: "/schemes" } };

export default function SchemesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Schemes", item: `${siteConfig.url}/schemes` },
    ],
  };
  return (
    <div className="container section directory-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><span>Schemes</span></nav>
      <p className="eyebrow">Scheme directory</p>
      <h1>Punjab Government Schemes 2026 – Latest Schemes & Apply Online Guidance</h1>
      <p className="lead">Find Punjab government schemes for old age pension, widow pension, women, health cards, construction workers, dependent children and housing. Compare eligibility, benefit amounts, documents, forms, application routes and status guidance in simple language.</p>
      <SchemeDirectory schemes={schemes} />
    </div>
  );
}

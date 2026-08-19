import type { Metadata } from "next";
import Link from "next/link";
import { SchemeDirectory } from "@/components/scheme-directory";
import { schemes } from "@/lib/schemes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Punjab Government Schemes", alternates: { canonical: "/schemes" } };

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
      <h1>Punjab government schemes</h1>
      <p className="lead">Search verified, plain-language guides. We publish a scheme only after checking an official source.</p>
      <SchemeDirectory schemes={schemes} />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { schemes } from "@/lib/schemes";

export const metadata: Metadata = { title: "Punjab Government Schemes", alternates: { canonical: "/schemes" } };

export default function SchemesPage() {
  return (
    <div className="container section narrow">
      <p className="eyebrow">Scheme directory</p>
      <h1>Punjab government schemes</h1>
      <p className="lead">The verified scheme inventory is being researched. No unverified programme details will be published.</p>
      {schemes.length === 0 ? <div className="empty-state">Scheme guides are coming soon.</div> : (
        <div className="card-grid">{schemes.map((scheme) => <Link className="card" href={`/schemes/${scheme.slug}`} key={scheme.slug}><h2>{scheme.name}</h2><p>{scheme.summary}</p></Link>)}</div>
      )}
    </div>
  );
}

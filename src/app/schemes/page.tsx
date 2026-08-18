import type { Metadata } from "next";
import { SchemeDirectory } from "@/components/scheme-directory";
import { schemes } from "@/lib/schemes";

export const metadata: Metadata = { title: "Punjab Government Schemes", alternates: { canonical: "/schemes" } };

export default function SchemesPage() {
  return (
    <div className="container section directory-page">
      <p className="eyebrow">Scheme directory</p>
      <h1>Punjab government schemes</h1>
      <p className="lead">Search verified, plain-language guides. We publish a scheme only after checking an official source.</p>
      <SchemeDirectory schemes={schemes} />
    </div>
  );
}

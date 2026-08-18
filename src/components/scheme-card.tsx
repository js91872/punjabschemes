import Link from "next/link";
import type { Scheme } from "@/lib/schemes";

export function SchemeCard({ scheme }: { scheme: Scheme }) {
  return (
    <article className="scheme-card">
      <div className="scheme-card-top"><span className="pill">{scheme.category}</span><span className="verified-mark">Official source</span></div>
      <h2><Link href={`/schemes/${scheme.slug}`}>{scheme.name}</Link></h2>
      <p>{scheme.summary}</p>
      <Link className="text-link" href={`/schemes/${scheme.slug}`}>View scheme guide <span aria-hidden="true">→</span></Link>
    </article>
  );
}

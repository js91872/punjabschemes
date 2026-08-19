import Image from "next/image";
import Link from "next/link";
import { getSchemeImage } from "@/lib/scheme-images";
import type { Scheme } from "@/lib/schemes";

export function SchemeCard({ scheme }: { scheme: Scheme }) {
  const image = getSchemeImage(scheme.slug);

  return (
    <article className="scheme-card">
      {image && <Link className="scheme-card-image" href={`/schemes/${scheme.slug}`} aria-label={`Read ${scheme.name}`}>
        <Image src={image.src} alt={image.alt} width={1200} height={800} sizes="(max-width: 680px) calc(100vw - 2rem), (max-width: 900px) calc(50vw - 1.6rem), 370px" />
      </Link>}
      <div className="scheme-card-content">
        <div className="scheme-card-top"><span className="pill">{scheme.category}</span><span className="verified-mark">Official source</span></div>
        <h2><Link href={`/schemes/${scheme.slug}`}>{scheme.name}</Link></h2>
        <p>{scheme.summary}</p>
        <Link className="text-link" href={`/schemes/${scheme.slug}`}>View scheme guide <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

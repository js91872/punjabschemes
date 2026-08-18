import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>PunjabSchemes.com is an independent information website, not a government website.</p>
        <nav aria-label="Footer navigation">
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy-policy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}

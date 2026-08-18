import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><Link className="footer-brand" href="/">Punjab Schemes</Link><p>Making Punjab welfare information easier to understand.</p></div>
        <div><strong>Explore</strong><nav aria-label="Explore"><Link href="/schemes">All schemes</Link><Link href="/categories/pensions">Pensions</Link><Link href="/categories/construction-workers">Construction workers</Link></nav></div>
        <div><strong>Information</strong><nav aria-label="Information"><Link href="/about">About</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/contact">Contact</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy-policy">Privacy</Link></nav></div>
      </div>
      <div className="container footer-bottom">PunjabSchemes.com is independent and is not affiliated with the Government of Punjab or Government of India.</div>
    </footer>
  );
}

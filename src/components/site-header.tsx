import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <div className="trust-bar"><div className="container">Independent information portal · Not an official government website</div></div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Punjab Schemes home">
            <Image className="brand-mark" src="/brand/punjab-schemes-mark.svg" alt="" width={48} height={48} priority />
            <span><strong>Punjab Schemes</strong><small>Clear guidance. Official sources.</small></span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/schemes">Find schemes</Link>
            <Link href="/categories/pensions">Pensions</Link>
            <Link href="/categories/construction-workers">Workers</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

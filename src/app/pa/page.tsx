import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { punjabiSchemes } from "@/lib/punjabi-schemes";

export const metadata: Metadata = {
  title: "ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਸਕੀਮਾਂ 2026: Apply Online, Eligibility, Status ਅਤੇ Latest Schemes",
  description:
    "ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਸਕੀਮਾਂ 2026 ਪੰਜਾਬੀ ਵਿੱਚ: Old Age Pension, Widow Pension, SHA Punjab, ਮਹਿਲਾ ਸਕੀਮਾਂ, BOCW/Labour Card, Apply Online, Eligibility, Form ਅਤੇ Status Check ਜਾਣਕਾਰੀ।",

  alternates: {
    canonical: "/pa",
    languages: {
      "pa-IN": "/pa",
      "en-IN": "/",
      "x-default": "/",
    },
  },
};

export default function PunjabiHomePage() {
  const schemes = Object.values(punjabiSchemes);

  return (
    <div lang="pa">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">
            ਪੰਜਾਬ, ਭਾਰਤ ਦੀਆਂ ਸਰਕਾਰੀ ਅਤੇ ਭਲਾਈ ਸਕੀਮਾਂ — ਆਸਾਨ ਪੰਜਾਬੀ ਵਿੱਚ
          </p>

          <h1>ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਸਕੀਮਾਂ 2026 – Apply Online, Eligibility, Form ਅਤੇ Status Check</h1>

          <p className="lead">
            ਪੰਜਾਬ, ਭਾਰਤ ਦੀਆਂ latest government schemes ਬਾਰੇ ਪੰਜਾਬੀ ਵਿੱਚ ਜਾਣੋ। Old Age Pension Punjab, Widow Pension, SHA Punjab Health Card, ਮਹਿਲਾਵਾਂ ਲਈ ₹1,000–₹1,500 ਸਕੀਮ, Ashirwad Scheme, Labour Card ਅਤੇ BOCW benefits ਲਈ eligibility, documents, form, apply online ਅਤੇ status check guidance ਇੱਕ ਥਾਂ ਵੇਖੋ।
          </p>

          <div className="hero-actions">
            <a className="button button-light" href="#punjabi-schemes">
              ਸਾਰੀਆਂ ਪੰਜਾਬੀ ਸਕੀਮਾਂ ਵੇਖੋ
            </a>

            <Link className="button button-ghost" href="/">
              English
            </Link>
          </div>
        </div>
      </section>

      <section
        className="container section"
        id="punjabi-schemes"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow green">ਪੰਜਾਬੀ ਗਾਈਡ</p>
            <h2>Punjab Government Schemes 2026 ਪੰਜਾਬੀ ਵਿੱਚ ਖੋਜੋ</h2>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2>ਪੰਜਾਬ ਵਿੱਚ ਲੋਕ ਸਭ ਤੋਂ ਵੱਧ ਕੀ ਖੋਜ ਰਹੇ ਹਨ?</h2>
          <p>ਸਿੱਧਾ ਆਪਣੀ ਲੋੜ ਵਾਲੀ ਗਾਈਡ ਖੋਲ੍ਹੋ: <Link className="text-link" href="/pa/schemes/mukh-mantri-sehat-yojana-punjab">SHA Punjab eligibility check ਅਤੇ beneficiary search</Link>, {" "}
          <Link className="text-link" href="/pa/schemes/old-age-pension-punjab">Old Age Pension Punjab status ਅਤੇ apply online</Link>, {" "}
          <Link className="text-link" href="/pa/schemes/widow-destitute-pension-punjab">Widow Pension Punjab form ਅਤੇ status</Link>, {" "}
          <Link className="text-link" href="/pa/schemes/aashirwad-scheme-punjab">Ashirwad Scheme Punjab ₹51,000 form/status</Link>, ਅਤੇ {" "}
          <Link className="text-link" href="/pa/schemes/construction-worker-scholarship-punjab">Punjab BOCW scholarship / labour card benefits</Link>।</p>
        </div>

        <div className="scheme-grid">
          {schemes.map((scheme) => (
            <article className="scheme-card" key={scheme.slug}>
              <Link href={`/pa/schemes/${scheme.slug}`}>
                <Image
                  src={scheme.image}
                  alt={scheme.imageAlt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 680px) calc(100vw - 2rem), (max-width: 900px) calc(50vw - 1.6rem), 370px"
                />

                <div className="scheme-card-body">
                  <p className="eyebrow">{scheme.category}</p>
                  <h3>{scheme.name}</h3>
                  <p>{scheme.summary}</p>
                  <span className="text-link">ਪੂਰੀ ਜਾਣਕਾਰੀ ਵੇਖੋ →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="notice">
        <div className="container notice-inner">
          <div>
            <p className="eyebrow">ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ</p>
            <h2>PunjabSchemes.com ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟ ਨਹੀਂ ਹੈ</h2>
          </div>

          <p>
            ਅਸੀਂ ਸਰਕਾਰੀ ਜਾਣਕਾਰੀ ਨੂੰ ਆਸਾਨ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝਾਉਂਦੇ ਹਾਂ। ਅਰਜ਼ੀ,
            ਰਕਮ, ਯੋਗਤਾ ਅਤੇ ਆਖਰੀ ਮਿਤੀ ਦੀ ਅੰਤਿਮ ਪੁਸ਼ਟੀ ਹਮੇਸ਼ਾ ਅਧਿਕਾਰਤ ਸਰੋਤ ਤੋਂ ਕਰੋ।
          </p>
        </div>
      </section>
    </div>
  );
}

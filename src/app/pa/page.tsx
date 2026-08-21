import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { punjabiSchemes } from "@/lib/punjabi-schemes";

export const metadata: Metadata = {
  title: "ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਸਕੀਮਾਂ 2026",
  description:
    "ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਸਕੀਮਾਂ, ਪੈਨਸ਼ਨ, ਸਿਹਤ, ਮਹਿਲਾ ਭਲਾਈ, construction worker benefits ਅਤੇ ਹੋਰ ਸਰਕਾਰੀ ਸਹਾਇਤਾ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪੰਜਾਬੀ ਵਿੱਚ।",

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
            ਪੰਜਾਬ ਦੀਆਂ ਸਰਕਾਰੀ ਅਤੇ ਭਲਾਈ ਸਕੀਮਾਂ — ਆਸਾਨ ਪੰਜਾਬੀ ਵਿੱਚ
          </p>

          <h1>ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਸਕੀਮਾਂ 2026</h1>

          <p className="lead">
            ਯੋਗਤਾ, ਲਾਭ, ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼, ਅਰਜ਼ੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਅਤੇ ਅਧਿਕਾਰਤ
            ਸਰੋਤ ਇੱਕ ਹੀ ਥਾਂ ਸਮਝੋ।
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
            <h2>ਸਕੀਮ ਚੁਣੋ</h2>
          </div>
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
            ਰਕਮ, ਯੋਗਤਾ ਅਤੇ deadline ਦੀ ਅੰਤਿਮ ਪੁਸ਼ਟੀ ਹਮੇਸ਼ਾ ਅਧਿਕਾਰਤ ਸਰੋਤ ਤੋਂ ਕਰੋ।
          </p>
        </div>
      </section>
    </div>
  );
}

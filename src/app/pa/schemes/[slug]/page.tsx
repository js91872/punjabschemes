import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPunjabiScheme,
  punjabiSchemeSlugs,
} from "@/lib/punjabi-schemes";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return punjabiSchemeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scheme = getPunjabiScheme(slug);

  if (!scheme) return {};

  return {
    title: scheme.seoTitle,
    description: scheme.description,

    alternates: {
      canonical: `/pa/schemes/${slug}`,
      languages: {
        "pa-IN": `/pa/schemes/${slug}`,
        "en-IN": `/schemes/${slug}`,
        "x-default": `/schemes/${slug}`,
      },
    },

    openGraph: {
      type: "article",
      locale: "pa_IN",
      title: scheme.seoTitle,
      description: scheme.description,
      url: `/pa/schemes/${slug}`,
      images: [
        {
          url: `${siteConfig.url}${scheme.image}`,
          width: 1200,
          height: 800,
          alt: scheme.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: scheme.seoTitle,
      description: scheme.description,
      images: [`${siteConfig.url}${scheme.image}`],
    },
  };
}

export default async function PunjabiSchemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scheme = getPunjabiScheme(slug);

  if (!scheme) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        inLanguage: "pa-IN",
        headline: scheme.name,
        description: scheme.description,
        dateModified: scheme.lastReviewed,
        mainEntityOfPage: `${siteConfig.url}/pa/schemes/${slug}`,
        image: `${siteConfig.url}${scheme.image}`,
        author: {
          "@type": "Organization",
          name: "PunjabSchemes Editorial Team",
          url: `${siteConfig.url}/editorial-policy`,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "FAQPage",
        inLanguage: "pa-IN",
        mainEntity: scheme.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ਮੁੱਖ ਪੰਨਾ",
            item: `${siteConfig.url}/pa`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: scheme.name,
            item: `${siteConfig.url}/pa/schemes/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article className="container section narrow" lang="pa">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/pa">ਮੁੱਖ ਪੰਨਾ</Link>
        <span>›</span>
        <span>{scheme.name}</span>
      </nav>

      <div style={{ marginBottom: "1rem" }}>
        <Link className="text-link" href={`/schemes/${slug}`}>
          Read in English →
        </Link>
      </div>

      <p className="eyebrow">{scheme.category}</p>

      <h1>{scheme.name}</h1>

      <p className="lead">{scheme.summary}</p>

      <figure className="scheme-featured-image">
        <Image
          src={scheme.image}
          alt={scheme.imageAlt}
          width={1200}
          height={800}
          priority
          sizes="(max-width: 812px) calc(100vw - 2rem), 780px"
        />

        <figcaption>
          ਇਹ ਤਸਵੀਰ PunjabSchemes.com ਲਈ ਬਣਾਈ ਗਈ ਹੈ; ਇਹ ਪੰਜਾਬ ਸਰਕਾਰ ਦੀ
          ਅਧਿਕਾਰਤ ਤਸਵੀਰ ਨਹੀਂ ਹੈ।
        </figcaption>
      </figure>

      <div className="scheme-alert">
        <strong>ਸੁਤੰਤਰ ਜਾਣਕਾਰੀ:</strong> PunjabSchemes.com ਪੰਜਾਬ ਸਰਕਾਰ ਦੀ
        ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ ਨਹੀਂ ਹੈ। ਅੰਤਿਮ ਨਿਯਮ ਸਰਕਾਰੀ ਸਰੋਤ ਤੋਂ verify ਕਰੋ।
      </div>

      <div className="scheme-note">
        <strong>ਮੌਜੂਦਾ ਸਥਿਤੀ:</strong> {scheme.currentStatus}
      </div>

      <h2>ਸਕੀਮ ਬਾਰੇ</h2>
      <p>{scheme.summary}</p>

      <h2>ਮੁੱਖ ਲਾਭ</h2>
      <ul>
        {scheme.benefitDetails.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>ਕੌਣ ਯੋਗ ਹੋ ਸਕਦਾ ਹੈ?</h2>
      <p>{scheme.beneficiaries}</p>

      <ul>
        {scheme.eligibilityChecklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼</h2>
      <ul>
        {scheme.documents.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>ਅਰਜ਼ੀ ਜਾਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਿਵੇਂ ਕਰੀਏ?</h2>
      <ol>
        {scheme.applicationMethods.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2>ਅਰਜ਼ੀ ਤੋਂ ਪਹਿਲਾਂ ਧਿਆਨ ਰੱਖੋ</h2>
      <ul>
        {scheme.practicalTips.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <section>
        <h2>{scheme.deepDiveHeading}</h2>

        {scheme.deepDive.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="faq-section">
        <h2>ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ</h2>

        {scheme.faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <h2>ਸੰਬੰਧਤ ਵਿਭਾਗ</h2>
      <p>{scheme.department}</p>

      <h2>ਅਧਿਕਾਰਤ ਸਰੋਤ</h2>

      <p>
        Scheme rules, benefit amount, eligibility, deadlines ਅਤੇ application
        channels ਸਮੇਂ ਨਾਲ ਬਦਲ ਸਕਦੇ ਹਨ। ਅਰਜ਼ੀ ਤੋਂ ਪਹਿਲਾਂ official source ਤੋਂ
        current information ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।
      </p>

      <p>
        <a
          className="button"
          href={scheme.officialUrl}
          rel="noopener noreferrer"
        >
          ਅਧਿਕਾਰਤ ਸਰੋਤ ਵੇਖੋ
        </a>
      </p>

      <div className="review-provenance">
        <span>
          ਸਮੀਖਿਆ:{" "}
          <Link href="/editorial-policy">
            PunjabSchemes Editorial Team
          </Link>
        </span>

        <span>
          ਆਖਰੀ ਜਾਂਚ:{" "}
          <time dateTime={scheme.lastReviewed}>
            {scheme.lastReviewed}
          </time>
        </span>
      </div>
    </article>
  );
}

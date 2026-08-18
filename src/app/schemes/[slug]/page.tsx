import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SchemeCard } from "@/components/scheme-card";
import { categoryConfig, categorySlugFor } from "@/lib/categories";
import { getScheme, schemes } from "@/lib/schemes";
import { schemeGuides } from "@/lib/scheme-guides";
import { getApplicationGuide } from "@/lib/application-guide";
import { schemeDeepDives } from "@/lib/scheme-deep-dives";
import { siteConfig } from "@/lib/site";
import { schemeSeo } from "@/lib/scheme-seo";
import { getSchemeImage } from "@/lib/scheme-images";

export function generateStaticParams() { return schemes.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const scheme = getScheme(slug);
  if (!scheme) return {};
  const seo = schemeSeo[slug];
  const image = getSchemeImage(slug);
  return { title: seo?.title ?? scheme.name, description: seo?.description ?? scheme.summary, alternates: { canonical: `/schemes/${slug}` }, openGraph: { type: "article", title: seo?.title ?? scheme.name, description: seo?.description ?? scheme.summary, url: `/schemes/${slug}`, images: image ? [{ url: image.src, width: 1200, height: 800, alt: image.alt }] : undefined } };
}

export default async function SchemePage({ params }: { params: Promise<{ slug: string }> }) {
  const scheme = getScheme((await params).slug);
  if (!scheme) notFound();
  const guide = schemeGuides[scheme.slug];
  const featuredImage = getSchemeImage(scheme.slug);
  const applicationGuide = getApplicationGuide(scheme).slice(0, 4);
  const deepDive = schemeDeepDives[scheme.slug];
  const categorySlug = categorySlugFor(scheme.category);
  const category = categoryConfig[categorySlug];
  const sameCategory = schemes.filter((item) => item.slug !== scheme.slug && item.category === scheme.category);
  const relatedSchemes = [...sameCategory, ...schemes.filter((item) => item.slug !== scheme.slug && item.category !== scheme.category)].slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: scheme.name,
        description: scheme.summary,
        dateModified: scheme.lastReviewed,
        mainEntityOfPage: `${siteConfig.url}/schemes/${scheme.slug}`,
        image: featuredImage ? `${siteConfig.url}${featuredImage.src}` : undefined,
        publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      },
      ...(guide ? [{
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: category.name, item: `${siteConfig.url}/categories/${categorySlug}` },
          { "@type": "ListItem", position: 3, name: scheme.name, item: `${siteConfig.url}/schemes/${scheme.slug}` },
        ],
      },
    ],
  };
  return (
    <article className="container section narrow">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href={`/categories/${categorySlug}`}>{category.name}</Link><span>›</span><span>{scheme.name}</span></nav>
      <p className="eyebrow">{scheme.category}</p>
      <h1>{scheme.name}</h1>
      <p className="lead">{scheme.summary}</p>
      {featuredImage && <figure className="scheme-featured-image">
        <Image src={featuredImage.src} alt={featuredImage.alt} width={1200} height={800} priority sizes="(max-width: 812px) 100vw, 780px" />
        <figcaption>Illustrative image created for PunjabSchemes.com; it is not official government artwork.</figcaption>
      </figure>}
      <div className="scheme-alert"><strong>Independent guidance:</strong> PunjabSchemes.com is not a government website. Always use the official source for final requirements.</div>
      {guide && <>
        <h2>Scheme overview</h2>
        {guide.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <h2>Benefits at a glance</h2>
        <ul>{guide.benefitDetails.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
      </>}
      <h2>Who may apply</h2>
      <p>{scheme.beneficiaries}</p>
      {guide && <ul>{guide.eligibilityChecklist.map((item) => <li key={item}>{item}</li>)}</ul>}
      <h2>Department</h2>
      <p>{scheme.department}</p>
      <h2>Application fee</h2>
      <p>{scheme.fee}</p>
      <h2>Documents to prepare</h2>
      <ul>{scheme.documents.map((document) => <li key={document}>{document}</li>)}</ul>
      <h2>How to apply</h2>
      <ol>{scheme.applicationMethods.map((method) => <li key={method}>{method}</li>)}</ol>
      {guide && <>
        <h2>Before you submit the application</h2>
        <ul>{guide.practicalTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
      </>}
      <div className="scheme-note"><strong>Important:</strong> {scheme.importantNote}</div>
      {deepDive && <section>
        <h2>{deepDive.heading}</h2>
        {deepDive.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>}
      {applicationGuide.map((section) => <section key={section.heading}>
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>)}
      {guide && <section className="faq-section">
        <h2>Frequently asked questions</h2>
        {guide.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </section>}
      <h2>Official source and verification</h2>
      <p>We reviewed the government material linked below and summarized it in plain language. Scheme rules, amounts, deadlines and service channels can change; use the official source for the final check before applying.</p>
      <p><a className="button" href={scheme.officialUrl} rel="noopener noreferrer">Visit the official government source</a></p>
      <p className="verification-link"><Link href="/editorial-policy">How we verify and update scheme information →</Link></p>
      <small>Information last reviewed: {scheme.lastReviewed}</small>
      <section className="related-section"><h2>Related Punjab schemes</h2><p>Continue comparing verified guidance before deciding which programme matches your circumstances.</p><div className="scheme-grid">{relatedSchemes.map((related) => <SchemeCard key={related.slug} scheme={related} />)}</div><p><Link className="text-link" href={`/categories/${categorySlug}`}>View all {category.name.toLowerCase()} guides →</Link></p></section>
    </article>
  );
}

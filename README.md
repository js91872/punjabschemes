# PunjabSchemes.com

Independent, SEO-focused information about Punjab government schemes, pensions, scholarships and welfare benefits.

> PunjabSchemes.com is not an official government website. Every published guide should cite and link to the responsible government department.

## Stack

- Next.js App Router and TypeScript
- Static-first pages with route metadata, sitemap and robots support
- Structured scheme records in `src/lib/schemes.ts`
- GitHub Actions quality checks

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Before committing:

```bash
npm run check
```

## Content principles

1. Verify every factual claim against current official sources.
2. Record the official URL and last-reviewed date.
3. Explain eligibility, benefits, documents and application steps in plain language.
4. Avoid publishing placeholder or inferred scheme details.
5. Keep the independent-site disclaimer prominent.

## Planned phases

1. Verify the candidate records in `research/scheme-inventory.json` against scheme-specific official documents.
2. Map search intent and finalize category/URL architecture.
3. Select the first 20–30 launch guides.
4. Add reviewed scheme content and structured data.
5. Complete legal, contact, analytics and advertising disclosures before launch.

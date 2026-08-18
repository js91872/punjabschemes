import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Editorial Policy and Source Verification", description: "How PunjabSchemes.com researches, verifies, reviews and corrects Punjab government scheme information.", alternates: { canonical: "/editorial-policy" } };

export default function EditorialPolicyPage() {
  return <article className="container section narrow">
    <p className="eyebrow">Our standards</p><h1>Editorial policy</h1>
    <p className="lead">PunjabSchemes.com publishes independent explanations of government programmes. We do not accept applications, decide eligibility or replace the responsible department.</p>
    <h2>Sources we prioritize</h2><p>We begin with Punjab Government department pages, Gazette notifications, official application forms, welfare-board documents and government service portals. Government of India sources such as myScheme may provide secondary confirmation. News or third-party pages may help locate an update, but they are not treated as final authority for eligibility, benefit amounts or application links.</p>
    <h2>How a guide is prepared</h2><p>We identify the administering authority, read the available official material and separate confirmed facts from practical application guidance. A guide records the source link and review date. Where an official form is old, incomplete or conflicts with a newer announcement, we disclose that limitation and ask readers to confirm the current rule.</p>
    <h2>Updates and corrections</h2><p>Scheme rules can change without an information portal receiving advance notice. We review priority pages when new official material appears and correct substantive errors as soon as they are verified. Readers can report a possible error through the <Link href="/contact">contact page</Link>; including the official notification or source URL helps us investigate.</p>
    <h2>What we will not do</h2><p>We do not invent benefit figures, publish unofficial application portals as government links, promise approval, request Aadhaar or bank credentials, or charge for access to scheme information. Sponsored influence must not determine whether a person is described as eligible.</p>
    <h2>Reader responsibility</h2><p>Use every article as a preparation guide, then check the linked official source or authorized office before applying. The government authority&apos;s current written rules and decision take priority over our summary.</p>
  </article>;
}

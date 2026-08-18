import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Editorial Policy and Source Verification", description: "How PunjabSchemes.com researches, verifies, reviews and corrects Punjab government scheme information.", alternates: { canonical: "/editorial-policy" } };

export default function EditorialPolicyPage() {
  return <article className="container section narrow info-page">
    <p className="eyebrow">Our standards</p><h1>Editorial policy</h1>
    <p className="lead">PunjabSchemes.com publishes independent explanations of government programmes. We do not accept applications, decide eligibility or replace the responsible department.</p>
    <p className="policy-date">Last updated: 18 August 2026</p>
    <h2>Editorial purpose</h2><p>Our goal is to help a reader understand what an official source says, prepare the right questions and reach the authorized application service. We optimize for accuracy, clarity and practical usefulness. Search visibility, advertising or publishing speed must not justify an unsupported benefit figure or eligibility claim.</p>
    <h2>Sources we prioritize</h2><p>We begin with Punjab Government department pages, Gazette notifications, official application forms, welfare-board documents and government service portals. Government of India sources such as myScheme may provide secondary confirmation. News or third-party pages may help locate an update, but they are not treated as final authority for eligibility, benefit amounts or application links.</p>
    <h2>How a guide is prepared</h2><p>We identify the administering authority, read the available official material and separate confirmed facts from practical application guidance. A guide records the source link and review date. Where an official form is old, incomplete or conflicts with a newer announcement, we disclose that limitation and ask readers to confirm the current rule.</p>
    <h2>Dates, amounts and uncertainty</h2><p>We distinguish the date a document was issued from the date our article was reviewed. An old official form can prove that a scheme or requirement existed without proving that every amount remains current. Where current evidence is insufficient, we say what is unknown and direct the reader to reconfirm it instead of filling the gap with a third-party claim.</p>
    <h2>Updates and corrections</h2><p>Scheme rules can change without an information portal receiving advance notice. We review priority pages when new official material appears and correct substantive errors as soon as they are verified. Readers can report a possible error through the <Link href="/contact">contact page</Link> or email <a href="mailto:info@punjabschemes.com">info@punjabschemes.com</a>; including the page URL and official notification helps us investigate.</p>
    <p>When a material correction is verified, we update the affected article and its review date. Minor spelling or presentation fixes may be made without a separate public correction note. We do not remove accurate public-interest information merely because it is inconvenient to a commercial party.</p>
    <h2>Independence and advertising</h2><p>Editorial conclusions are not sold. A future advertiser, affiliate or partner cannot pay to be described as an official application service, change an eligibility conclusion or suppress a legitimate warning. Any sponsored content will be identified and kept separate from scheme verification.</p>
    <h2>What we will not do</h2><p>We do not invent benefit figures, publish unofficial application portals as government links, promise approval, request Aadhaar or bank credentials, or charge for access to scheme information. Sponsored influence must not determine whether a person is described as eligible.</p>
    <h2>Reader responsibility</h2><p>Use every article as a preparation guide, then check the linked official source or authorized office before applying. The government authority&apos;s current written rules and decision take priority over our summary.</p>
  </article>;
}

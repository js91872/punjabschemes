export type SchemeImage = {
  src: string;
  alt: string;
};

const imageBase = "/images/schemes";

export const schemeImages: Record<string, SchemeImage> = {
  "mukh-mantri-sehat-yojana-punjab": {
    src: `${imageBase}/mukh-mantri-sehat-yojana-punjab.webp`,
    alt: "A Punjabi family discussing a health card with an assistance worker at a hospital help desk",
  },
  "mukh-mantri-mawan-dheeyan-satkar-yojana": {
    src: `${imageBase}/mukh-mantri-mawan-dheeyan-satkar-yojana.webp`,
    alt: "Punjabi women from different generations standing together in a village courtyard",
  },
  "old-age-pension-punjab": {
    src: `${imageBase}/old-age-pension-punjab.webp`,
    alt: "An older Punjabi couple reviewing documents with a family member outside their home",
  },
  "widow-destitute-pension-punjab": {
    src: `${imageBase}/widow-destitute-pension-punjab.webp`,
    alt: "A Punjabi woman receiving document assistance at a community service desk",
  },
  "dependent-children-pension-punjab": {
    src: `${imageBase}/dependent-children-pension-punjab.webp`,
    alt: "A Punjabi guardian walking two children toward school",
  },
  "disabled-person-pension-punjab": {
    src: `${imageBase}/disabled-person-pension-punjab.webp`,
    alt: "A wheelchair user speaking with a staff member at an accessible service centre",
  },
  "national-family-benefit-scheme-punjab": {
    src: `${imageBase}/national-family-benefit-scheme-punjab.webp`,
    alt: "A Punjabi mother and children reviewing a document folder with a community adviser",
  },
  "aashirwad-scheme-punjab": {
    src: `${imageBase}/aashirwad-scheme-punjab.webp`,
    alt: "A Punjabi bride and her mother preparing documents before a family wedding",
  },
  "bebe-nanki-laadli-beti-kalyan-scheme": {
    src: `${imageBase}/bebe-nanki-laadli-beti-kalyan-scheme.webp`,
    alt: "Punjabi parents encouraging their young daughter as she studies at home",
  },
  "construction-worker-shagun-scheme-punjab": {
    src: `${imageBase}/construction-worker-shagun-scheme-punjab.webp`,
    alt: "A Punjabi construction worker and adult daughter preparing marriage documents",
  },
  "construction-worker-scholarship-punjab": {
    src: `${imageBase}/construction-worker-scholarship-punjab.webp`,
    alt: "A construction worker watching his daughter study engineering materials",
  },
  "construction-worker-maternity-benefit-punjab": {
    src: `${imageBase}/construction-worker-maternity-benefit-punjab.webp`,
    alt: "A Punjabi construction-worker couple caring for their newborn at home",
  },
  "construction-worker-tools-kit-punjab": {
    src: `${imageBase}/construction-worker-tools-kit-punjab.webp`,
    alt: "A trained construction worker arranging tools on a clean workbench",
  },
};

export function getSchemeImage(slug: string) {
  return schemeImages[slug];
}

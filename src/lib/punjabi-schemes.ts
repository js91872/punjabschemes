export type PunjabiScheme = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  summary: string;
  category: string;
  beneficiaries: string;
  benefitDetails: string[];
  eligibilityChecklist: string[];
  documents: string[];
  applicationMethods: string[];
  practicalTips: string[];
  currentStatus: string;
  deepDiveHeading: string;
  deepDive: string[];
  faqs: { question: string; answer: string }[];
  officialUrl: string;
  department: string;
  lastReviewed: string;
  image: string;
  imageAlt: string;
};

export const punjabiSchemes: Record<string, PunjabiScheme> = {
  "punjab-5-marla-plot-scheme": {
    slug: "punjab-5-marla-plot-scheme",

    name: "ਪੰਜਾਬ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ",

    seoTitle:
      "ਪੰਜਾਬ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ 2026: ਯੋਗਤਾ, ਅਰਜ਼ੀ, ਨਿਯਮ ਅਤੇ ਤਾਜ਼ਾ ਜਾਣਕਾਰੀ",

    description:
      "ਪੰਜਾਬ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ ਬਾਰੇ ਯੋਗਤਾ, ਮੁਫ਼ਤ ਰਿਹਾਇਸ਼ੀ ਪਲਾਟ, ਗ੍ਰਾਮ ਸਭਾ ਪ੍ਰਕਿਰਿਆ, ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼, ਅਰਜ਼ੀ ਅਤੇ 2026 ਦੀ ਤਾਜ਼ਾ ਸਥਿਤੀ ਜਾਣੋ।",

    summary:
      "ਪੰਜਾਬ ਵਿੱਚ ਯੋਗ ਬੇਜ਼ਮੀਨ ਅਤੇ ਬੇਘਰ ਪਿੰਡ ਵਾਸੀਆਂ ਨੂੰ ਉਪਲਬਧ ਸ਼ਾਮਲਾਤ ਦੇਹ ਜਾਂ ਪੰਚਾਇਤੀ ਜ਼ਮੀਨ ਵਿੱਚੋਂ ਰਹਿਣ ਲਈ 5 ਮਰਲਾ ਪਲਾਟ ਦੇਣ ਨਾਲ ਸੰਬੰਧਤ ਕਾਨੂੰਨੀ ਅਤੇ ਨੀਤੀਗਤ ਪ੍ਰਬੰਧ ਮੌਜੂਦ ਹਨ। ਪਲਾਟ ਦੀ ਅਲਾਟਮੈਂਟ ਗ੍ਰਾਮ ਸਭਾ ਵੱਲੋਂ ਪਛਾਣ, ਪੰਚਾਇਤ ਰੈਜ਼ੋਲੂਸ਼ਨ, ਜਾਂਚ ਅਤੇ ਸਰਕਾਰੀ ਮਨਜ਼ੂਰੀ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ।",

    category: "ਰਿਹਾਇਸ਼ ਅਤੇ ਪਰਿਵਾਰਕ ਭਲਾਈ",

    beneficiaries:
      "ਇਤਿਹਾਸਕ ਪੰਜਾਬ ਨੀਤੀ ਅਨੁਸਾਰ ਯੋਗ ਬੇਜ਼ਮੀਨ ਅਤੇ ਬੇਘਰ ਪਿੰਡ ਪਰਿਵਾਰਾਂ, ਜਿਸ ਵਿੱਚ ਕੁਝ ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਅਤੇ ਹੋਰ ਗਰੀਬ ਪਰਿਵਾਰ ਸ਼ਾਮਲ ਹਨ, ਨੂੰ ਵਿਚਾਰਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਅੰਤਿਮ ਯੋਗਤਾ ਉਸ ਵੇਲੇ ਲਾਗੂ ਸਰਕਾਰੀ ਨਿਯਮਾਂ, ਰਹਾਇਸ਼, ਜ਼ਮੀਨ ਜਾਂ ਮਕਾਨ ਦੀ ਮਾਲਕੀ ਅਤੇ ਸਥਾਨਕ ਜਾਂਚ ਦੇ ਆਧਾਰ ਉੱਤੇ ਤੈਅ ਹੁੰਦੀ ਹੈ।",

    benefitDetails: [
      "ਯੋਗ ਲਾਭਪਾਤਰੀ ਨੂੰ ਲਗਭਗ 5 ਮਰਲਾ ਰਿਹਾਇਸ਼ੀ ਪਲਾਟ ਮਿਲ ਸਕਦਾ ਹੈ",
      "ਯੋਗ ਸ਼ਾਮਲਾਤ ਦੇਹ ਜਾਂ ਪੰਚਾਇਤੀ ਜ਼ਮੀਨ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਮੁਫ਼ਤ ਦਿੱਤੀ ਜਾ ਸਕਦੀ ਹੈ",
      "ਪਲਾਟ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਆਪਣੇ ਰਹਿਣ ਲਈ ਮਕਾਨ ਬਣਾਉਣਾ ਹੈ",
      "ਸਕੀਮ ਆਮ ਜਾਇਦਾਦ ਖਰੀਦਦਾਰਾਂ ਲਈ ਨਹੀਂ, ਸਗੋਂ ਯੋਗ ਬੇਜ਼ਮੀਨ ਅਤੇ ਬੇਘਰ ਪਰਿਵਾਰਾਂ ਲਈ ਹੈ",
      "ਲਾਭਪਾਤਰੀ ਦੀ ਪਛਾਣ ਅਤੇ ਅੰਤਿਮ ਅਲਾਟਮੈਂਟ ਤੋਂ ਪਹਿਲਾਂ ਸਰਕਾਰੀ ਜਾਂਚ ਹੁੰਦੀ ਹੈ",
      "ਪਲਾਟ ਦੀ ਉਪਲਬਧਤਾ ਪਿੰਡ ਵਿੱਚ ਕਾਨੂੰਨੀ ਤੌਰ ਉੱਤੇ ਉਪਲਬਧ ਪੰਚਾਇਤੀ ਜਾਂ ਸ਼ਾਮਲਾਤ ਜ਼ਮੀਨ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ",
    ],

    eligibilityChecklist: [
      "ਅਰਜ਼ੀਕਾਰ ਸੰਬੰਧਤ ਗ੍ਰਾਮ ਸਭਾ ਖੇਤਰ ਦਾ ਵਸਨੀਕ ਹੋਵੇ",
      "ਅਰਜ਼ੀਕਾਰ ਉਸ ਸਮੇਂ ਲਾਗੂ ਨੀਤੀ ਅਨੁਸਾਰ ਬੇਜ਼ਮੀਨ ਜਾਂ ਬੇਘਰ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਆਵੇ",
      "ਇਤਿਹਾਸਕ ਨੀਤੀ ਅਨੁਸਾਰ ਅਰਜ਼ੀਕਾਰ ਕੋਲ ਆਪਣਾ ਮਕਾਨ ਜਾਂ ਮਕਾਨ ਬਣਾਉਣ ਲਈ ਯੋਗ ਰਿਹਾਇਸ਼ੀ ਜ਼ਮੀਨ ਨਾ ਹੋਵੇ",
      "ਜੇ ਯੋਗਤਾ ਜਾਤੀ ਜਾਂ ਕਿਸੇ ਵਿਸ਼ੇਸ਼ ਸ਼੍ਰੇਣੀ ਉੱਤੇ ਆਧਾਰਿਤ ਹੋਵੇ ਤਾਂ ਸਹੀ ਸਰਟੀਫਿਕੇਟ ਹੋਵੇ",
      "ਪਰਿਵਾਰ ਅਤੇ ਜ਼ਮੀਨ ਦੇ ਰਿਕਾਰਡ ਸਰਕਾਰੀ ਜਾਂਚ ਦੌਰਾਨ ਸਹੀ ਪਾਏ ਜਾਣ",
      "ਗ੍ਰਾਮ ਸਭਾ, ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਅਤੇ ਸੰਬੰਧਤ ਅਧਿਕਾਰੀਆਂ ਦੀ ਜਾਂਚ ਪੂਰੀ ਹੋਵੇ",
      "ਪਿੰਡ ਵਿੱਚ ਅਲਾਟਮੈਂਟ ਲਈ ਯੋਗ ਪੰਚਾਇਤੀ ਜਾਂ ਸ਼ਾਮਲਾਤ ਜ਼ਮੀਨ ਉਪਲਬਧ ਹੋਵੇ",
    ],

    documents: [
      "ਆਧਾਰ ਕਾਰਡ ਜਾਂ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਪਛਾਣ ਪੱਤਰ",
      "ਸੰਬੰਧਤ ਪਿੰਡ ਜਾਂ ਗ੍ਰਾਮ ਸਭਾ ਖੇਤਰ ਦਾ ਰਹਾਇਸ਼ ਸਬੂਤ",
      "ਪਰਿਵਾਰ ਜਾਂ ਘਰੇਲੂ ਰਿਕਾਰਡ",
      "ਮਕਾਨ ਜਾਂ ਰਿਹਾਇਸ਼ੀ ਜ਼ਮੀਨ ਨਾ ਹੋਣ ਬਾਰੇ ਮੰਗਿਆ ਗਿਆ ਸਬੂਤ ਜਾਂ ਘੋਸ਼ਣਾ",
      "ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਜਾਂ ਹੋਰ ਲਾਗੂ ਸ਼੍ਰੇਣੀ ਦਾ ਸਰਟੀਫਿਕੇਟ, ਜੇ ਲੋੜੀਂਦਾ ਹੋਵੇ",
      "ਆਮਦਨ, BPL ਜਾਂ ਹੋਰ ਸਥਾਨਕ ਜਾਂਚ ਨਾਲ ਸੰਬੰਧਤ ਦਸਤਾਵੇਜ਼, ਜੇ ਮੰਗੇ ਜਾਣ",
      "ਗ੍ਰਾਮ ਪੰਚਾਇਤ, BDPO, DDPO ਜਾਂ ਜ਼ਿਲ੍ਹਾ ਪ੍ਰਸ਼ਾਸਨ ਵੱਲੋਂ ਮੰਗੇ ਹੋਰ ਦਸਤਾਵੇਜ਼",
    ],

    applicationMethods: [
      "ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੀ ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਤੋਂ ਪੁੱਛੋ ਕਿ ਪਿੰਡ ਵਿੱਚ 5 ਮਰਲਾ ਰਿਹਾਇਸ਼ੀ ਪਲਾਟਾਂ ਲਈ ਕੋਈ ਸਰਵੇ, ਗ੍ਰਾਮ ਸਭਾ ਮੀਟਿੰਗ ਜਾਂ ਲਾਭਪਾਤਰੀ ਪਛਾਣ ਪ੍ਰਕਿਰਿਆ ਚੱਲ ਰਹੀ ਹੈ ਜਾਂ ਨਹੀਂ",
      "ਜੇ ਪ੍ਰਕਿਰਿਆ ਚੱਲ ਰਹੀ ਹੋਵੇ ਤਾਂ ਅਧਿਕਾਰਤ ਯੋਗਤਾ ਅਤੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਸੂਚੀ ਲਵੋ",
      "ਪਛਾਣ, ਰਹਾਇਸ਼, ਬੇਜ਼ਮੀਨੀ, ਮਕਾਨ ਦੀ ਸਥਿਤੀ ਅਤੇ ਸ਼੍ਰੇਣੀ ਨਾਲ ਸੰਬੰਧਤ ਦਸਤਾਵੇਜ਼ ਜਮ੍ਹਾਂ ਕਰੋ",
      "ਗ੍ਰਾਮ ਸਭਾ ਜਾਂ ਪੰਚਾਇਤ ਲਾਭਪਾਤਰੀ ਸੂਚੀ ਵਿੱਚ ਆਪਣਾ ਨਾਮ ਅਤੇ ਪਰਿਵਾਰਕ ਵੇਰਵਾ ਸਹੀ ਦਰਜ ਹੋਣ ਦੀ ਜਾਂਚ ਕਰੋ",
      "ਬਲਾਕ, ਜ਼ਿਲ੍ਹਾ ਜਾਂ ਹੋਰ ਸਮਰੱਥ ਅਧਿਕਾਰੀਆਂ ਵੱਲੋਂ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਜਾਂਚ ਪੂਰੀ ਹੋਣ ਦਿਓ",
      "ਅਲਾਟਮੈਂਟ, ਰੈਜ਼ੋਲੂਸ਼ਨ, ਅਰਜ਼ੀ ਜਾਂ ਜਾਂਚ ਨਾਲ ਸੰਬੰਧਤ ਹਰ ਰਸੀਦ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਦੀ ਕਾਪੀ ਸੰਭਾਲ ਕੇ ਰੱਖੋ",
    ],

    practicalTips: [
      "ਕਿਸੇ ਵੀ ਵੈੱਬਸਾਈਟ ਉੱਤੇ ਆਧਾਰ, ਬੈਂਕ ਜਾਂ ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ ਅਪਲੋਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂਚੋ ਕਿ ਲਿੰਕ ਪੰਜਾਬ ਸਰਕਾਰ ਦਾ ਅਧਿਕਾਰਤ ਲਿੰਕ ਹੈ।",
      "ਜੇ ਕੋਈ ਵਿਅਕਤੀ 2026 ਦੀ ਨਵੀਂ 5 ਮਰਲਾ ਸਕੀਮ ਦੇ ਨਾਮ ਉੱਤੇ ਪੈਸੇ ਮੰਗਦਾ ਹੈ ਤਾਂ ਪਹਿਲਾਂ ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਨੰਬਰ ਮੰਗੋ।",
      "ਕਿਸੇ ਏਜੰਟ ਵੱਲੋਂ ਲਾਭਪਾਤਰੀ ਸੂਚੀ ਵਿੱਚ ਨਾਮ ਪੱਕਾ ਕਰਵਾਉਣ ਦੀ ਗਾਰੰਟੀ ਉੱਤੇ ਭਰੋਸਾ ਨਾ ਕਰੋ।",
      "ਆਧਾਰ, ਪਰਿਵਾਰਕ ਰਿਕਾਰਡ, ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ ਅਤੇ ਜ਼ਮੀਨ ਰਿਕਾਰਡ ਵਿੱਚ ਨਾਮ ਅਤੇ ਪਤਾ ਇੱਕੋ ਜਿਹਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
      "ਜੇ ਪਰਿਵਾਰ ਕੋਲ ਸਾਂਝੀ, ਵਿਰਾਸਤੀ ਜਾਂ ਵਿਵਾਦਿਤ ਜ਼ਮੀਨ ਹੈ ਤਾਂ ਇਹ ਜਾਣਕਾਰੀ ਛੁਪਾਉਣ ਦੀ ਬਜਾਏ ਅਧਿਕਾਰੀਆਂ ਤੋਂ ਲਿਖਤੀ ਜਾਂ ਸਪਸ਼ਟ ਸਲਾਹ ਲਵੋ।",
      "ਸਿਰਫ਼ ਸਕੀਮ ਦੀ ਚਰਚਾ ਹੋਣ ਕਰਕੇ ਪੰਚਾਇਤੀ ਜ਼ਮੀਨ ਉੱਤੇ ਕਬਜ਼ਾ ਨਾ ਕਰੋ। ਕਾਨੂੰਨੀ ਅਲਾਟਮੈਂਟ ਤੋਂ ਬਾਅਦ ਹੀ ਕਬਜ਼ਾ ਜਾਂ ਮਕਾਨ ਬਣਾਉਣ ਦੀ ਕਾਰਵਾਈ ਕਰੋ।",
    ],

    currentStatus:
      "21 ਅਗਸਤ 2026 ਤੱਕ PunjabSchemes.com ਨੂੰ ਪੰਜਾਬ ਸਰਕਾਰ ਵੱਲੋਂ ਕੋਈ ਨਵਾਂ ਰਾਜ-ਪੱਧਰੀ 2026 ਆਨਲਾਈਨ ਅਰਜ਼ੀ ਪੋਰਟਲ ਅਧਿਕਾਰਤ ਤੌਰ ਉੱਤੇ ਪੁਸ਼ਟੀਤ ਨਹੀਂ ਮਿਲਿਆ। ਮੌਜੂਦਾ ਕਾਨੂੰਨੀ ਪ੍ਰਬੰਧ ਅਤੇ 17 ਅਪ੍ਰੈਲ 2001 ਦੀ ਇਤਿਹਾਸਕ ਨੀਤੀ ਅਸਲੀ ਹਨ, ਪਰ ਨਵੀਂ 2026 ਲਾਂਚ ਜਾਂ ਆਨਲਾਈਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੂੰ ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਤੋਂ ਬਿਨਾਂ ਪੁਸ਼ਟੀਤ ਨਾ ਮੰਨੋ।",

    deepDiveHeading:
      "ਪੰਜਾਬ ਵਿੱਚ 5 ਮਰਲਾ ਪਲਾਟ ਦੀ ਪਛਾਣ ਅਤੇ ਅਲਾਟਮੈਂਟ ਕਿਵੇਂ ਹੁੰਦੀ ਹੈ?",

    deepDive: [
      "ਇਹ ਪ੍ਰਕਿਰਿਆ ਆਮ ਹਾਊਸਿੰਗ ਬੋਰਡ ਜਾਂ ਪਲਾਟ ਡਰਾਅ ਵਰਗੀ ਨਹੀਂ ਹੈ। Rule 13-A ਦੇ ਤਹਿਤ ਸ਼ਾਮਲਾਤ ਦੇਹ ਜ਼ਮੀਨ ਨੂੰ ਯੋਗ ਬੇਜ਼ਮੀਨ ਵਿਅਕਤੀ ਨੂੰ ਰਿਹਾਇਸ਼ੀ ਮਕਾਨ ਬਣਾਉਣ ਲਈ ਦੇਣ ਦੀ ਵਿਵਸਥਾ ਹੈ ਅਤੇ ਇਸ ਲਈ ਸਰਕਾਰ ਦੀ ਪਿਛਲੀ ਮਨਜ਼ੂਰੀ ਲੋੜੀਂਦੀ ਹੈ।",

      "17 ਅਪ੍ਰੈਲ 2001 ਦੀ ਨੀਤੀ ਬਾਰੇ ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ ਦੇ ਫੈਸਲਿਆਂ ਵਿੱਚ ਗ੍ਰਾਮ ਸਭਾ ਮੀਟਿੰਗ, ਯੋਗ ਲਾਭਪਾਤਰੀਆਂ ਦੀ ਪਛਾਣ, ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਰੈਜ਼ੋਲੂਸ਼ਨ ਅਤੇ ਬਾਅਦ ਦੀ ਸਰਕਾਰੀ ਜਾਂਚ ਦਾ ਜ਼ਿਕਰ ਮਿਲਦਾ ਹੈ। ਇਸ ਲਈ ਸਿਰਫ਼ ਕਿਸੇ ਸ਼ੁਰੂਆਤੀ ਸੂਚੀ ਵਿੱਚ ਨਾਮ ਆ ਜਾਣਾ ਅੰਤਿਮ ਅਲਾਟਮੈਂਟ ਨਹੀਂ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ।",

      "ਨਿੱਜੀ ਯੋਗਤਾ ਅਤੇ ਜ਼ਮੀਨ ਦੀ ਉਪਲਬਧਤਾ ਦੋ ਵੱਖ ਗੱਲਾਂ ਹਨ। ਕੋਈ ਪਰਿਵਾਰ ਬੇਜ਼ਮੀਨ ਅਤੇ ਬੇਘਰ ਹੋ ਸਕਦਾ ਹੈ, ਪਰ ਜੇ ਪਿੰਡ ਵਿੱਚ ਕਾਨੂੰਨੀ ਤੌਰ ਉੱਤੇ ਅਲਾਟਮੈਂਟ ਲਈ ਉਚਿਤ ਪੰਚਾਇਤੀ ਜ਼ਮੀਨ ਉਪਲਬਧ ਨਹੀਂ ਹੈ ਤਾਂ ਤੁਰੰਤ ਪਲਾਟ ਮਿਲਣਾ ਸੰਭਵ ਨਹੀਂ ਹੁੰਦਾ।",

      "ਸਰਕਾਰੀ ਅਲਾਟਮੈਂਟ ਨਾਲ ਮਿਲੀ ਜ਼ਮੀਨ ਨੂੰ ਆਮ ਨਿੱਜੀ ਪਲਾਟ ਵਾਂਗ ਵੇਚਣ ਜਾਂ ਤਬਦੀਲ ਕਰਨ ਦੀ ਆਜ਼ਾਦੀ ਨਹੀਂ ਹੁੰਦੀ। Rule 13-A ਵਿੱਚ ਵਿਕਰੀ, ਬਦਲੇ ਅਤੇ ਮੋਰਟਗੇਜ ਉੱਤੇ ਪਾਬੰਦੀਆਂ ਹਨ, ਹਾਲਾਂਕਿ ਮਕਾਨ ਬਣਾਉਣ ਲਈ ਕਰਜ਼ਾ ਲੈਣ ਵਾਸਤੇ ਨਿਯਮ ਅਨੁਸਾਰ ਮੋਰਟਗੇਜ ਦੀ ਇਜਾਜ਼ਤ ਹੋ ਸਕਦੀ ਹੈ।",

      "ਜੇ 2026 ਵਿੱਚ ਪੰਜਾਬ ਸਰਕਾਰ ਨਵੀਂ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ ਜਾਂ ਨਵਾਂ ਸਰਵੇ ਸ਼ੁਰੂ ਕਰਦੀ ਹੈ ਤਾਂ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਅਧਿਕਾਰਤ ਨੋਟੀਫਿਕੇਸ਼ਨ ਤੋਂ ਆਏਗੀ: ਕੌਣ ਯੋਗ ਹੈ, ਕਿਹੜੇ ਜ਼ਿਲ੍ਹੇ ਜਾਂ ਪਿੰਡ ਸ਼ਾਮਲ ਹਨ, ਅਰਜ਼ੀ ਦੀ ਮਿਤੀ, ਆਖਰੀ ਤਾਰੀਖ, ਦਸਤਾਵੇਜ਼, ਚੋਣ ਪ੍ਰਕਿਰਿਆ ਅਤੇ ਸਟੇਟਸ ਕਿਵੇਂ ਚੈੱਕ ਕਰਨਾ ਹੈ।",
    ],

    faqs: [
      {
        question: "ਪੰਜਾਬ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ ਕੀ ਹੈ?",
        answer:
          "ਇਹ ਪੰਜਾਬ ਦੇ ਪਿੰਡ ਖੇਤਰਾਂ ਵਿੱਚ ਯੋਗ ਬੇਜ਼ਮੀਨ ਅਤੇ ਬੇਘਰ ਪਰਿਵਾਰਾਂ ਨੂੰ ਉਪਲਬਧ ਸ਼ਾਮਲਾਤ ਦੇਹ ਜਾਂ ਪੰਚਾਇਤੀ ਜ਼ਮੀਨ ਵਿੱਚੋਂ ਰਿਹਾਇਸ਼ੀ ਪਲਾਟ ਦੇਣ ਨਾਲ ਸੰਬੰਧਤ ਕਾਨੂੰਨੀ ਅਤੇ ਨੀਤੀਗਤ ਪ੍ਰਬੰਧਾਂ ਲਈ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਆਮ ਨਾਮ ਹੈ।",
      },
      {
        question: "ਕੀ ਪੰਜਾਬ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ 2026 ਲਾਂਚ ਹੋ ਗਈ ਹੈ?",
        answer:
          "21 ਅਗਸਤ 2026 ਤੱਕ ਅਸੀਂ ਕੋਈ ਨਵਾਂ ਰਾਜ-ਪੱਧਰੀ ਪੰਜਾਬ ਸਰਕਾਰ ਦਾ ਨੋਟੀਫਿਕੇਸ਼ਨ ਨਹੀਂ ਲੱਭਿਆ ਜਿਸ ਨਾਲ ਆਮ 2026 ਆਨਲਾਈਨ ਅਰਜ਼ੀਆਂ ਖੁੱਲ੍ਹੀਆਂ ਹੋਣ। ਨਵੀਂ ਲਾਂਚ ਦੀ ਪੁਸ਼ਟੀ ਸਿਰਫ਼ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਸਰੋਤ ਤੋਂ ਕਰੋ।",
      },
      {
        question: "ਕੀ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ ਲਈ ਆਨਲਾਈਨ ਅਪਲਾਈ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ?",
        answer:
          "ਇਸ ਵੇਲੇ ਕੋਈ ਨਵਾਂ ਰਾਜ-ਪੱਧਰੀ 2026 ਆਨਲਾਈਨ ਪੋਰਟਲ ਪੁਸ਼ਟੀਤ ਨਹੀਂ ਹੈ। ਇਤਿਹਾਸਕ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਗ੍ਰਾਮ ਸਭਾ, ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਅਤੇ ਸਰਕਾਰੀ ਜਾਂਚ ਮਹੱਤਵਪੂਰਨ ਰਹੀ ਹੈ।",
      },
      {
        question: "5 ਮਰਲਾ ਪਲਾਟ ਲਈ ਕੌਣ ਯੋਗ ਹੋ ਸਕਦਾ ਹੈ?",
        answer:
          "ਇਤਿਹਾਸਕ ਨੀਤੀ ਅਨੁਸਾਰ ਯੋਗ ਬੇਜ਼ਮੀਨ ਅਤੇ ਬੇਘਰ ਪਿੰਡ ਪਰਿਵਾਰਾਂ ਨੂੰ ਵਿਚਾਰਿਆ ਗਿਆ, ਜਿਸ ਵਿੱਚ ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਅਤੇ ਹੋਰ ਗਰੀਬ ਪਰਿਵਾਰ ਵੀ ਸ਼ਾਮਲ ਰਹੇ ਹਨ। ਨਵੀਂ ਨੀਤੀ ਆਉਣ ਉੱਤੇ ਉਸਦੀ ਯੋਗਤਾ ਵੱਖ ਹੋ ਸਕਦੀ ਹੈ।",
      },
      {
        question: "ਕੀ 5 ਮਰਲਾ ਪਲਾਟ ਮੁਫ਼ਤ ਮਿਲਦਾ ਹੈ?",
        answer:
          "Rule 13-A ਯੋਗ ਹਾਲਤਾਂ ਵਿੱਚ ਸ਼ਾਮਲਾਤ ਦੇਹ ਜ਼ਮੀਨ ਨੂੰ ਰਿਹਾਇਸ਼ੀ ਮਕਾਨ ਲਈ ਮੁਫ਼ਤ ਦੇਣ ਦੀ ਵਿਵਸਥਾ ਕਰਦਾ ਹੈ। ਹਰ ਅਰਜ਼ੀਕਾਰ ਨੂੰ ਆਪਣੇ ਆਪ ਪਲਾਟ ਮਿਲਣ ਦਾ ਹੱਕ ਨਹੀਂ ਬਣਦਾ।",
      },
      {
        question: "ਅਰਜ਼ੀ ਲਈ ਕਿਹੜੇ ਦਸਤਾਵੇਜ਼ ਚਾਹੀਦੇ ਹਨ?",
        answer:
          "ਆਮ ਤੌਰ ਉੱਤੇ ਪਛਾਣ, ਪਿੰਡ ਦੀ ਰਹਾਇਸ਼, ਪਰਿਵਾਰਕ ਰਿਕਾਰਡ, ਬੇਜ਼ਮੀਨੀ ਜਾਂ ਮਕਾਨ ਨਾ ਹੋਣ ਦਾ ਸਬੂਤ ਅਤੇ ਲਾਗੂ ਜਾਤੀ ਜਾਂ ਸ਼੍ਰੇਣੀ ਸਰਟੀਫਿਕੇਟ ਮੰਗੇ ਜਾ ਸਕਦੇ ਹਨ। ਅੰਤਿਮ ਸੂਚੀ ਅਧਿਕਾਰਤ ਨਿਰਦੇਸ਼ਾਂ ਤੋਂ ਲਵੋ।",
      },
      {
        question: "ਲਾਭਪਾਤਰੀ ਸੂਚੀ ਕਿੱਥੇ ਚੈੱਕ ਕਰੀਏ?",
        answer:
          "ਜੇ ਪਿੰਡ ਵਿੱਚ ਪ੍ਰਕਿਰਿਆ ਚੱਲ ਰਹੀ ਹੈ ਤਾਂ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਤੋਂ ਪੁੱਛੋ। ਲੋੜ ਪੈਣ ਉੱਤੇ BDPO, DDPO ਜਾਂ ਜ਼ਿਲ੍ਹਾ ਪ੍ਰਸ਼ਾਸਨ ਤੋਂ ਵੀ ਜਾਣਕਾਰੀ ਲਈ ਜਾ ਸਕਦੀ ਹੈ।",
      },
      {
        question: "ਕੀ ਅਲਾਟ ਕੀਤਾ ਪਲਾਟ ਵੇਚਿਆ ਜਾ ਸਕਦਾ ਹੈ?",
        answer:
          "Rule 13-A ਅਧੀਨ ਦਿੱਤੀ ਜ਼ਮੀਨ ਦੀ ਵਿਕਰੀ, ਬਦਲਾ ਜਾਂ ਮੋਰਟਗੇਜ ਉੱਤੇ ਪਾਬੰਦੀਆਂ ਹਨ। ਮਕਾਨ ਬਣਾਉਣ ਲਈ ਕਰਜ਼ੇ ਨਾਲ ਸੰਬੰਧਤ ਮੋਰਟਗੇਜ ਲਈ ਵੱਖ ਪ੍ਰਬੰਧ ਹੋ ਸਕਦਾ ਹੈ। ਅਲਾਟਮੈਂਟ ਪੱਤਰ ਦੀਆਂ ਸ਼ਰਤਾਂ ਵੀ ਪੜ੍ਹੋ।",
      },
      {
        question: "ਕੀ ਇਹ ਪਾਕਿਸਤਾਨ ਪੰਜਾਬ ਦੀ 5 ਮਰਲਾ ਸਕੀਮ ਹੈ?",
        answer:
          "ਨਹੀਂ। ਇਹ ਪੰਨਾ ਪੰਜਾਬ, ਭਾਰਤ ਬਾਰੇ ਹੈ। ਪਾਕਿਸਤਾਨ ਦੇ ਪੰਜਾਬ ਸੂਬੇ ਦੀਆਂ ਹਾਊਸਿੰਗ ਸਕੀਮਾਂ ਵੱਖ ਸਰਕਾਰ, ਕਾਨੂੰਨ, ਪਛਾਣ ਪ੍ਰਣਾਲੀ ਅਤੇ ਅਰਜ਼ੀ ਪੋਰਟਲ ਵਰਤਦੀਆਂ ਹਨ।",
      },
    ],

    officialUrl:
      "https://www.indiacode.nic.in/bitstream/123456789/6925/1/the_punjab_village_common_lands_regulation_act%2C_1961.pdf",

    department:
      "ਪੇਂਡੂ ਵਿਕਾਸ ਅਤੇ ਪੰਚਾਇਤ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",

    lastReviewed: "2026-08-21",

    image: "/images/schemes/punjab-5-marla-plot-scheme.webp",

    imageAlt:
      "ਪੰਜਾਬ 5 ਮਰਲਾ ਪਲਾਟ ਸਕੀਮ ਅਧੀਨ ਬੇਜ਼ਮੀਨ ਅਤੇ ਬੇਘਰ ਪਰਿਵਾਰਾਂ ਲਈ ਰਿਹਾਇਸ਼ੀ ਪਲਾਟ",
  },
  "mukh-mantri-mawan-dheeyan-satkar-yojana": {
    slug: "mukh-mantri-mawan-dheeyan-satkar-yojana",

    name: "ਮੁੱਖ ਮੰਤਰੀ ਮਾਵਾਂ ਧੀਆਂ ਸਤਿਕਾਰ ਯੋਜਨਾ",

    seoTitle:
      "ਮਾਵਾਂ ਧੀਆਂ ਸਤਿਕਾਰ ਯੋਜਨਾ 2026: ₹1,000/₹1,500, ਯੋਗਤਾ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਭੁਗਤਾਨ",

    description:
      "ਮੁੱਖ ਮੰਤਰੀ ਮਾਵਾਂ ਧੀਆਂ ਸਤਿਕਾਰ ਯੋਜਨਾ ਪੰਜਾਬ 2026 ਬਾਰੇ ₹1,000/₹1,500 ਮਹੀਨਾਵਾਰ ਸਹਾਇਤਾ, ਯੋਗਤਾ, ਦਸਤਾਵੇਜ਼, ਰਜਿਸਟ੍ਰੇਸ਼ਨ, DBT ਅਤੇ ਭੁਗਤਾਨ ਜਾਣਕਾਰੀ ਪੰਜਾਬੀ ਵਿੱਚ।",

    summary:
      "ਮੁੱਖ ਮੰਤਰੀ ਮਾਵਾਂ ਧੀਆਂ ਸਤਿਕਾਰ ਯੋਜਨਾ ਪੰਜਾਬ ਸਰਕਾਰ ਦੀ ਮਹੀਨਾਵਾਰ ਵਿੱਤੀ ਸਹਾਇਤਾ ਸਕੀਮ ਹੈ। ਯੋਗ 18 ਸਾਲ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਉਮਰ ਦੀਆਂ ਮਹਿਲਾਵਾਂ ਨੂੰ ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ₹1,000 ਜਾਂ ₹1,500 ਪ੍ਰਤੀ ਮਹੀਨਾ Direct Benefit Transfer ਰਾਹੀਂ ਆਧਾਰ ਨਾਲ ਜੁੜੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।",

    category: "ਮਹਿਲਾਵਾਂ ਅਤੇ ਪਰਿਵਾਰ",

    beneficiaries:
      "ਪੰਜਾਬ ਦੀਆਂ 18 ਸਾਲ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਉਮਰ ਦੀਆਂ ਯੋਗ ਮਹਿਲਾਵਾਂ ਜੋ ਪੰਜਾਬ ਦੀ ਰਜਿਸਟਰਡ ਵੋਟਰ ਹਨ, ਵੈਧ ਆਧਾਰ ਅਤੇ ਪੰਜਾਬ ਵੋਟਰ ਆਈਡੀ ਰੱਖਦੀਆਂ ਹਨ ਅਤੇ ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਵਿੱਚ ਦਿੱਤੀਆਂ ਅਯੋਗਤਾ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਨਹੀਂ ਆਉਂਦੀਆਂ। ਇੱਕੋ ਪਰਿਵਾਰ ਦੀ ਇੱਕ ਤੋਂ ਵੱਧ ਯੋਗ ਮਹਿਲਾ ਲਾਭ ਲੈ ਸਕਦੀ ਹੈ।",

    benefitDetails: [
      "ਯੋਗ ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਦੀ ਮਹਿਲਾ ਲਈ ₹1,500 ਪ੍ਰਤੀ ਮਹੀਨਾ",
      "ਹੋਰ ਯੋਗ ਸ਼੍ਰੇਣੀਆਂ ਦੀ ਮਹਿਲਾ ਲਈ ₹1,000 ਪ੍ਰਤੀ ਮਹੀਨਾ",
      "ਰਕਮ Direct Benefit Transfer ਰਾਹੀਂ ਆਧਾਰ ਨਾਲ ਜੁੜੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ",
      "ਇੱਕੋ ਪਰਿਵਾਰ ਦੀ ਇੱਕ ਤੋਂ ਵੱਧ ਯੋਗ ਮਹਿਲਾ ਲਾਭ ਲੈ ਸਕਦੀ ਹੈ",
      "ਪੰਜਾਬ ਦੀ ਮੌਜੂਦਾ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਪੈਨਸ਼ਨ ਲੈ ਰਹੀ ਯੋਗ ਮਹਿਲਾ ਵੀ ਇਸ ਸਕੀਮ ਦਾ ਪੂਰਾ ਲਾਭ ਲੈ ਸਕਦੀ ਹੈ",
      "ਨਿਰਧਾਰਤ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕੇਂਦਰ ਉੱਤੇ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮੁਫ਼ਤ ਹੈ",
    ],

    eligibilityChecklist: [
      "ਅਰਜ਼ੀਕਾਰ ਮਹਿਲਾ ਦੀ ਉਮਰ ਘੱਟੋ-ਘੱਟ 18 ਸਾਲ ਹੋਵੇ",
      "ਉਹ ਪੰਜਾਬ ਦੀ ਰਜਿਸਟਰਡ ਵੋਟਰ ਹੋਵੇ",
      "ਉਸ ਕੋਲ ਵੈਧ ਆਧਾਰ ਕਾਰਡ ਹੋਵੇ",
      "ਉਸ ਕੋਲ ਪੰਜਾਬ ਦਾ ਵੋਟਰ ਆਈਡੀ ਹੋਵੇ",
      "DBT ਲੈਣ ਲਈ ਬੈਂਕ ਖਾਤਾ ਆਧਾਰ ਨਾਲ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਜੁੜਿਆ ਹੋਵੇ",
      "ਜੇ ₹1,500 ਵਾਲੀ SC ਸ਼੍ਰੇਣੀ ਦਾ ਲਾਭ ਲੈਣਾ ਹੈ ਤਾਂ ਵੈਧ Scheduled Caste ਸਰਟੀਫਿਕੇਟ ਹੋਵੇ",
      "ਅਰਜ਼ੀਕਾਰ ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਵਿੱਚ ਦਿੱਤੀਆਂ ਕਰਮਚਾਰੀ, ਪੈਨਸ਼ਨਰ, ਆਮਦਨ ਕਰ ਜਾਂ ਚੁਣੇ ਹੋਏ ਪ੍ਰਤੀਨਿਧੀ ਨਾਲ ਸੰਬੰਧਤ ਅਯੋਗਤਾ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਨਾ ਆਵੇ",
    ],

    documents: [
      "ਆਧਾਰ ਕਾਰਡ",
      "ਪੰਜਾਬ ਵੋਟਰ ਆਈਡੀ",
      "ਆਧਾਰ ਨਾਲ ਜੁੜੇ ਬੈਂਕ ਖਾਤੇ ਦੀ ਪਾਸਬੁੱਕ ਜਾਂ ਖਾਤਾ ਵੇਰਵਾ",
      "Scheduled Caste ਸਰਟੀਫਿਕੇਟ, ਜੇ ₹1,500 ਵਾਲਾ SC ਲਾਭ ਲੈਣਾ ਹੋਵੇ",
      "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕੇਂਦਰ ਵੱਲੋਂ ਮੰਗਿਆ ਹੋਰ ਅਧਿਕਾਰਤ ਦਸਤਾਵੇਜ਼",
    ],

    applicationMethods: [
      "ਨਿਰਧਾਰਤ ਆਂਗਣਵਾੜੀ ਕੇਂਦਰ ਜਾਂ ਪੰਜਾਬ ਸੇਵਾ ਕੇਂਦਰ ਉੱਤੇ ਜਾਓ",
      "ਆਧਾਰ, ਵੋਟਰ ਆਈਡੀ, ਬੈਂਕ ਅਤੇ ਲਾਗੂ SC ਦਸਤਾਵੇਜ਼ ਨਾਲ ਲੈ ਕੇ ਜਾਓ",
      "ਆਧਾਰ Authentication ਅਤੇ assisted registration ਪ੍ਰਕਿਰਿਆ ਪੂਰੀ ਕਰੋ",
      "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੌਰਾਨ ਨਾਮ, ਜਨਮ ਮਿਤੀ ਅਤੇ ਬੈਂਕ ਵੇਰਵਾ ਧਿਆਨ ਨਾਲ ਜਾਂਚੋ",
      "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੀ ਰਸੀਦ ਜਾਂ acknowledgement ਸੰਭਾਲ ਕੇ ਰੱਖੋ",
      "SMS, ਬੈਂਕ DBT ਜਾਂ ਸਰਕਾਰੀ ਅਪਡੇਟ ਰਾਹੀਂ ਅਗਲੀ ਸਥਿਤੀ ਚੈੱਕ ਕਰੋ",
    ],

    practicalTips: [
      "ਆਧਾਰ, ਵੋਟਰ ਆਈਡੀ ਅਤੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਨਾਮ ਅਤੇ ਜਨਮ ਮਿਤੀ ਇੱਕੋ ਜਿਹੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
      "ਬੈਂਕ ਤੋਂ ਇਹ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਆਧਾਰ seeding ਅਤੇ DBT mapping ਸਰਗਰਮ ਹੈ।",
      "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਲਈ ਕਿਸੇ ਏਜੰਟ ਨੂੰ ਪੈਸੇ ਨਾ ਦਿਓ; ਅਧਿਕਾਰਤ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮੁਫ਼ਤ ਹੈ।",
      "OTP, ATM PIN, UPI PIN ਜਾਂ ਬੈਂਕ ਪਾਸਵਰਡ ਕਿਸੇ ਨੂੰ ਨਾ ਦਿਓ।",
      "SC ਸ਼੍ਰੇਣੀ ਵਾਲੀਆਂ ਮਹਿਲਾਵਾਂ ਆਪਣਾ ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ ਸਪਸ਼ਟ ਅਤੇ ਵੈਧ ਰੱਖਣ।",
      "ਜੇ ਭੁਗਤਾਨ ਨਹੀਂ ਆ ਰਿਹਾ ਤਾਂ ਪਹਿਲਾਂ ਬੈਂਕ DBT mapping, Aadhaar linkage ਅਤੇ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਰਿਕਾਰਡ ਜਾਂਚੋ।",
    ],

    currentStatus:
      "ਇਹ ਸਕੀਮ 2026 ਵਿੱਚ ਪੰਜਾਬ ਸਰਕਾਰ ਵੱਲੋਂ ਨੋਟੀਫਾਈ ਕੀਤੀ ਗਈ ਹੈ। ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਭੁਗਤਾਨ ਨਾਲ ਸੰਬੰਧਤ ਤਾਜ਼ਾ ਤਾਰੀਖਾਂ, ਕੇਂਦਰ ਅਤੇ ਪ੍ਰਕਿਰਿਆ ਬਦਲ ਸਕਦੀ ਹੈ। ਅਰਜ਼ੀਕਾਰ ਨੂੰ Punjab Government ਜਾਂ Department of Social Security, Women and Child Development ਦੇ ਤਾਜ਼ਾ ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।",

    deepDiveHeading:
      "₹1,000 ਅਤੇ ₹1,500 ਦੀ ਰਕਮ, DBT ਅਤੇ ਅਯੋਗਤਾ ਦੇ ਨਿਯਮ ਸਮਝੋ",

    deepDive: [
      "ਸਕੀਮ ਵਿੱਚ ਲਾਭ ਦੀ ਰਕਮ ਮਹਿਲਾ ਦੀ ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਵੱਖ ਹੈ। ਯੋਗ Scheduled Caste ਮਹਿਲਾ ਲਈ ₹1,500 ਪ੍ਰਤੀ ਮਹੀਨਾ ਅਤੇ ਹੋਰ ਯੋਗ ਸ਼੍ਰੇਣੀਆਂ ਲਈ ₹1,000 ਪ੍ਰਤੀ ਮਹੀਨਾ ਨਿਰਧਾਰਤ ਹੈ। ਇਹ ਰਕਮ ਨਕਦ ਹੱਥ ਵਿੱਚ ਨਹੀਂ ਦਿੱਤੀ ਜਾਂਦੀ; Direct Benefit Transfer ਰਾਹੀਂ ਆਧਾਰ ਨਾਲ ਜੁੜੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਭੇਜੀ ਜਾਂਦੀ ਹੈ।",

      "ਸਕੀਮ ਦੀ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਵਿਸ਼ੇਸ਼ਤਾ ਇਹ ਹੈ ਕਿ ਯੋਗਤਾ ਸਿਰਫ਼ ਇੱਕ ਮਹਿਲਾ ਪ੍ਰਤੀ ਪਰਿਵਾਰ ਤੱਕ ਸੀਮਿਤ ਨਹੀਂ ਹੈ। ਜੇ ਇੱਕੋ ਪਰਿਵਾਰ ਵਿੱਚ ਕਈ ਮਹਿਲਾਵਾਂ ਵੱਖ-ਵੱਖ ਤੌਰ ਉੱਤੇ ਸਾਰੀਆਂ ਸ਼ਰਤਾਂ ਪੂਰੀਆਂ ਕਰਦੀਆਂ ਹਨ ਤਾਂ ਉਹ ਲਾਭ ਲੈ ਸਕਦੀਆਂ ਹਨ।",

      "ਮੌਜੂਦਾ ਪੰਜਾਬ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਪੈਨਸ਼ਨ ਲੈ ਰਹੀ ਮਹਿਲਾ ਨੂੰ ਸਿਰਫ਼ ਇਸ ਕਾਰਨ Satkar Yojana ਤੋਂ ਬਾਹਰ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ। ਪਰ ਉਸ ਨੂੰ ਇਸ ਸਕੀਮ ਦੀਆਂ ਹੋਰ ਸਾਰੀਆਂ ਯੋਗਤਾ ਸ਼ਰਤਾਂ ਪੂਰੀਆਂ ਕਰਨੀ ਲੋੜੀਂਦੀਆਂ ਹਨ।",

      "ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਕੁਝ ਸ਼੍ਰੇਣੀਆਂ ਨੂੰ ਬਾਹਰ ਰੱਖਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਨਿਰਧਾਰਤ ਸਰਕਾਰੀ ਜਾਂ ਸਰਕਾਰੀ ਸੰਗਠਨਾਂ ਦੇ ਨਿਯਮਤ ਜਾਂ ਰਿਟਾਇਰਡ ਕਰਮਚਾਰੀ ਜਾਂ ਪੈਨਸ਼ਨਰ, ਪਿਛਲੇ ਵਿੱਤੀ ਸਾਲ ਵਿੱਚ ਆਮਦਨ ਕਰ ਭਰਨ ਵਾਲੀਆਂ ਮਹਿਲਾਵਾਂ ਅਤੇ ਕੁਝ ਮੌਜੂਦਾ ਜਾਂ ਸਾਬਕਾ ਮੰਤਰੀ, MP ਜਾਂ MLA ਸ਼ਾਮਲ ਹਨ। ਖਾਸ ਹਾਲਤ ਵਿੱਚ ਅਧਿਕਾਰਤ ਕੇਂਦਰ ਤੋਂ ਸਪਸ਼ਟੀਕਰਨ ਲੈਣਾ ਚਾਹੀਦਾ ਹੈ।",

      "DBT ਵਿੱਚ ਬੈਂਕ ਰਿਕਾਰਡ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਸਿਰਫ਼ ਬੈਂਕ ਨੂੰ ਆਧਾਰ ਦੀ ਕਾਪੀ ਦੇਣ ਨਾਲ ਇਹ ਯਕੀਨੀ ਨਹੀਂ ਹੁੰਦਾ ਕਿ ਖਾਤਾ ਸਰਕਾਰੀ DBT ਲਈ ਸਹੀ ਤਰੀਕੇ ਨਾਲ mapped ਹੈ। ਲੋੜ ਪੈਣ ਉੱਤੇ ਬੈਂਕ ਸ਼ਾਖਾ ਤੋਂ Aadhaar seeding ਅਤੇ DBT status ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।",
    ],

    faqs: [
      {
        question: "ਮਾਵਾਂ ਧੀਆਂ ਸਤਿਕਾਰ ਯੋਜਨਾ ਵਿੱਚ ਕਿੰਨੇ ਪੈਸੇ ਮਿਲਦੇ ਹਨ?",
        answer:
          "ਯੋਗ Scheduled Caste ਮਹਿਲਾ ਨੂੰ ₹1,500 ਪ੍ਰਤੀ ਮਹੀਨਾ ਅਤੇ ਹੋਰ ਯੋਗ ਸ਼੍ਰੇਣੀਆਂ ਦੀ ਮਹਿਲਾ ਨੂੰ ₹1,000 ਪ੍ਰਤੀ ਮਹੀਨਾ ਮਿਲਦਾ ਹੈ।",
      },
      {
        question: "ਮਾਵਾਂ ਧੀਆਂ ਸਤਿਕਾਰ ਯੋਜਨਾ ਲਈ ਉਮਰ ਕਿੰਨੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ?",
        answer:
          "ਮਹਿਲਾ ਦੀ ਉਮਰ ਘੱਟੋ-ਘੱਟ 18 ਸਾਲ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਅਤੇ ਉਹ ਪੰਜਾਬ ਦੀ ਯੋਗ ਰਜਿਸਟਰਡ ਵੋਟਰ ਹੋਵੇ।",
      },
      {
        question: "ਕੀ ਇੱਕ ਪਰਿਵਾਰ ਦੀਆਂ ਦੋ ਮਹਿਲਾਵਾਂ ਲਾਭ ਲੈ ਸਕਦੀਆਂ ਹਨ?",
        answer:
          "ਹਾਂ। ਨੋਟੀਫਾਈ ਕੀਤੇ ਨਿਯਮਾਂ ਵਿੱਚ ਇੱਕ ਪਰਿਵਾਰ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਮਹਿਲਾ ਦੀ ਪਾਬੰਦੀ ਨਹੀਂ ਹੈ। ਹਰ ਮਹਿਲਾ ਦੀ ਯੋਗਤਾ ਵੱਖਰੇ ਤੌਰ ਉੱਤੇ ਜਾਂਚੀ ਜਾਂਦੀ ਹੈ।",
      },
      {
        question: "ਜੇ ਪਹਿਲਾਂ ਹੀ ਬੁਢਾਪਾ ਜਾਂ ਹੋਰ ਪੈਨਸ਼ਨ ਮਿਲਦੀ ਹੈ ਤਾਂ ਕੀ ਇਹ ਸਕੀਮ ਮਿਲੇਗੀ?",
        answer:
          "ਹਾਂ, ਯੋਗ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਪੈਨਸ਼ਨ ਲਾਭਪਾਤਰੀ ਮਹਿਲਾ Satkar Yojana ਦਾ ਲਾਭ ਵੀ ਲੈ ਸਕਦੀ ਹੈ, ਬਸ਼ਰਤੇ ਉਹ ਹੋਰ ਯੋਗਤਾ ਨਿਯਮ ਪੂਰੇ ਕਰਦੀ ਹੋਵੇ।",
      },
      {
        question: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਿੱਥੇ ਹੁੰਦੀ ਹੈ?",
        answer:
          "ਨਿਰਧਾਰਤ ਆਂਗਣਵਾੜੀ ਕੇਂਦਰ ਅਤੇ ਪੰਜਾਬ ਸੇਵਾ ਕੇਂਦਰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਲਈ ਮੁੱਖ ਅਧਿਕਾਰਤ ਸਥਾਨ ਹਨ। ਤਾਜ਼ਾ ਕੇਂਦਰ ਦੀ ਪੁਸ਼ਟੀ ਸਰਕਾਰੀ ਜਾਣਕਾਰੀ ਤੋਂ ਕਰੋ।",
      },
      {
        question: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੀ ਫੀਸ ਕਿੰਨੀ ਹੈ?",
        answer:
          "ਅਧਿਕਾਰਤ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮੁਫ਼ਤ ਹੈ। ਕਿਸੇ ਏਜੰਟ ਨੂੰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਰਵਾਉਣ ਲਈ ਪੈਸੇ ਨਾ ਦਿਓ।",
      },
      {
        question: "ਕਿਹੜੇ ਦਸਤਾਵੇਜ਼ ਚਾਹੀਦੇ ਹਨ?",
        answer:
          "ਆਮ ਤੌਰ ਉੱਤੇ ਆਧਾਰ ਕਾਰਡ, ਪੰਜਾਬ ਵੋਟਰ ਆਈਡੀ, ਆਧਾਰ ਨਾਲ ਜੁੜੇ ਬੈਂਕ ਖਾਤੇ ਦੀ ਜਾਣਕਾਰੀ ਅਤੇ SC ਸ਼੍ਰੇਣੀ ਲਈ ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ ਲੋੜੀਂਦਾ ਹੈ।",
      },
      {
        question: "ਪੈਸੇ ਬੈਂਕ ਵਿੱਚ ਕਿਵੇਂ ਆਉਂਦੇ ਹਨ?",
        answer:
          "ਸਹਾਇਤਾ Direct Benefit Transfer ਰਾਹੀਂ ਆਧਾਰ ਨਾਲ ਜੁੜੇ ਯੋਗ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਭੇਜੀ ਜਾਂਦੀ ਹੈ।",
      },
      {
        question: "ਭੁਗਤਾਨ ਨਾ ਆਵੇ ਤਾਂ ਕੀ ਕਰੀਏ?",
        answer:
          "ਰਜਿਸਟ੍ਰੇਸ਼ਨ acknowledgement, Aadhaar-bank linkage, DBT mapping ਅਤੇ ਬੈਂਕ ਖਾਤੇ ਦੀ ਸਥਿਤੀ ਪਹਿਲਾਂ ਜਾਂਚੋ। ਲੋੜ ਪੈਣ ਉੱਤੇ ਅਧਿਕਾਰਤ ਸੇਵਾ ਕੇਂਦਰ ਤੋਂ ਸਟੇਟਸ ਪੁੱਛੋ।",
      },
      {
        question: "ਕੀ ਆਮਦਨ ਦੀ ਕੋਈ ਹੱਦ ਹੈ?",
        answer:
          "ਨੋਟੀਫਿਕੇਸ਼ਨ ਆਮ household income ceiling ਦੀ ਥਾਂ income-tax exclusion ਵਰਤਦਾ ਹੈ। ਪਿਛਲੇ ਵਿੱਤੀ ਸਾਲ ਵਿੱਚ ਆਮਦਨ ਕਰ ਭਰਨ ਵਾਲੀ ਮਹਿਲਾ ਅਯੋਗ ਹੋ ਸਕਦੀ ਹੈ।",
      },
    ],

    officialUrl:
      "https://punjab.gov.in/government/departments/social-security-and-women-child-development/",

    department:
      "ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਵਿਕਾਸ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",

    lastReviewed: "2026-08-21",

    image:
      "/images/schemes/mukh-mantri-mawan-dheeyan-satkar-yojana.webp",

    imageAlt:
      "ਮੁੱਖ ਮੰਤਰੀ ਮਾਵਾਂ ਧੀਆਂ ਸਤਿਕਾਰ ਯੋਜਨਾ ਅਧੀਨ ਪੰਜਾਬ ਦੀ ਮਾਂ ਅਤੇ ਬਾਲਗ ਧੀ",
  },


  "mukh-mantri-sehat-yojana-punjab": {
    slug: "mukh-mantri-sehat-yojana-punjab",
    name: "ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਯੋਜਨਾ ਪੰਜਾਬ",
    seoTitle:
      "ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਯੋਜਨਾ ਪੰਜਾਬ 2026: ₹10 ਲੱਖ ਕੈਸ਼ਲੈੱਸ ਇਲਾਜ, ਕਾਰਡ ਅਤੇ ਯੋਗਤਾ",
    description:
      "ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਯੋਜਨਾ ਪੰਜਾਬ 2026 ਹੇਠ ₹10 ਲੱਖ ਤੱਕ ਕੈਸ਼ਲੈੱਸ ਹਸਪਤਾਲ ਇਲਾਜ, ਸਿਹਤ ਕਾਰਡ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਯੋਗਤਾ ਅਤੇ ਹਸਪਤਾਲ ਜਾਣਕਾਰੀ ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਯੋਜਨਾ ਪੰਜਾਬ ਦੇ ਯੋਗ ਵਸਨੀਕ ਪਰਿਵਾਰਾਂ ਲਈ ਸਾਲਾਨਾ ਪ੍ਰਤੀ ਪਰਿਵਾਰ ₹10 ਲੱਖ ਤੱਕ ਕੈਸ਼ਲੈੱਸ ਹਸਪਤਾਲ ਇਲਾਜ ਕਵਰ ਪ੍ਰਦਾਨ ਕਰਨ ਵਾਲੀ ਸਿਹਤ ਯੋਜਨਾ ਹੈ। ਇਲਾਜ ਸਿਰਫ਼ ਯੋਗ ਪੈਕੇਜ ਅਤੇ empanelled ਸਰਕਾਰੀ ਜਾਂ ਨਿੱਜੀ ਹਸਪਤਾਲ ਰਾਹੀਂ ਸਕੀਮ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਹੁੰਦਾ ਹੈ।",
    category: "ਸਿਹਤ",
    beneficiaries:
      "ਪੰਜਾਬ ਦੇ bona fide ਵਸਨੀਕ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਪਰਿਵਾਰ, ਜਿਨ੍ਹਾਂ ਦੀ ਪਛਾਣ, ਰਹਾਇਸ਼ ਅਤੇ ਪਰਿਵਾਰਕ ਵੇਰਵੇ ਮੌਜੂਦਾ State Health Agency ਪ੍ਰਕਿਰਿਆ ਅਨੁਸਾਰ ਸਹੀ ਤਰੀਕੇ ਨਾਲ verify ਹੋ ਜਾਂਦੇ ਹਨ।",
    benefitDetails: [
      "ਯੋਗ ਪਰਿਵਾਰ ਲਈ ਪ੍ਰਤੀ ਸਾਲ ₹10 ਲੱਖ ਤੱਕ ਕੈਸ਼ਲੈੱਸ ਹਸਪਤਾਲ ਇਲਾਜ ਕਵਰ",
      "Empanelled ਸਰਕਾਰੀ ਅਤੇ ਭਾਗੀਦਾਰ ਨਿੱਜੀ ਹਸਪਤਾਲਾਂ ਵਿੱਚ ਯੋਗ ਪੈਕੇਜਾਂ ਲਈ ਇਲਾਜ",
      "ਸਰਕਾਰੀ ਵੇਰਵਿਆਂ ਅਨੁਸਾਰ ਪੰਜਾਬ ਵਸਨੀਕ ਪਰਿਵਾਰਾਂ ਲਈ ਆਮ household income ceiling ਪ੍ਰਕਾਸ਼ਿਤ ਨਹੀਂ ਕੀਤੀ ਗਈ",
      "Health card ਜਾਂ beneficiary record ਰਾਹੀਂ ਹਸਪਤਾਲ ਵਿੱਚ ਸਕੀਮ verification",
      "Planned treatment ਲਈ package ਅਤੇ pre-authorization ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ",
    ],
    eligibilityChecklist: [
      "ਪਰਿਵਾਰ ਪੰਜਾਬ ਦਾ ਵਸਨੀਕ ਹੋਣ ਦਾ ਮੌਜੂਦਾ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਸਬੂਤ ਦੇ ਸਕੇ",
      "ਆਧਾਰ, voter ID ਜਾਂ ਮੌਜੂਦਾ ਮਨਜ਼ੂਰ ਤਰੀਕੇ ਨਾਲ identity verification ਹੋ ਸਕੇ",
      "ਪਰਿਵਾਰਕ ਮੈਂਬਰਾਂ ਦੇ ਵੇਰਵੇ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਰਜਿਸਟਰ ਹੋਣ",
      "Cashless planned treatment ਤੋਂ ਪਹਿਲਾਂ beneficiary record ਜਾਂ health card active ਹੋਵੇ",
      "ਚੁਣਿਆ ਹਸਪਤਾਲ scheme ਲਈ empanelled ਹੋਵੇ",
      "ਇਲਾਜ scheme ਦੇ ਮੌਜੂਦਾ eligible package ਵਿੱਚ ਆਵੇ",
    ],
    documents: [
      "ਆਧਾਰ ਕਾਰਡ",
      "ਪੰਜਾਬ voter ID ਜਾਂ ਮੌਜੂਦਾ ਮਨਜ਼ੂਰਸ਼ੁਦਾ residence proof",
      "ਪਰਿਵਾਰਕ ਮੈਂਬਰਾਂ ਦੀ identity ਅਤੇ relationship information",
      "ਚਾਲੂ mobile number",
      "ਪੁਰਾਣਾ Ayushman ਜਾਂ Punjab health card, ਜੇ ਪਹਿਲਾਂ ਜਾਰੀ ਹੋਇਆ ਹੋਵੇ",
    ],
    applicationMethods: [
      "Punjab State Health Agency ਦੀ ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ ਉੱਤੇ ਮੌਜੂਦਾ registration instructions ਵੇਖੋ",
      "ਲੋੜ ਪੈਣ ਉੱਤੇ authorized Sewa Kendra ਜਾਂ Common Service Centre ਤੋਂ assisted registration ਕਰੋ",
      "Identity, residence ਅਤੇ family-member details ਸਹੀ ਦਰਜ ਕਰੋ",
      "Required authentication ਪੂਰੀ ਕਰਕੇ acknowledgement ਸੰਭਾਲੋ",
      "ਇਲਾਜ ਤੋਂ ਪਹਿਲਾਂ hospital empanelment ਅਤੇ package eligibility verify ਕਰੋ",
    ],
    practicalTips: [
      "Planned admission ਤੋਂ ਪਹਿਲਾਂ health card ਅਤੇ family record verify ਕਰਵਾ ਲਵੋ।",
      "ਹਸਪਤਾਲ ਦਾ ਨਾਮ ਪੁਰਾਣੀ list ਤੋਂ ਨਹੀਂ, ਮੌਜੂਦਾ official empanelled-hospital list ਤੋਂ ਚੈੱਕ ਕਰੋ।",
      "Non-emergency admission ਤੋਂ ਪਹਿਲਾਂ scheme desk ਤੋਂ package ਅਤੇ pre-authorization ਬਾਰੇ ਪੁੱਛੋ।",
      "₹10 ਲੱਖ ਨੂੰ cash payment ਨਾ ਸਮਝੋ; ਇਹ eligible hospitalization cover ਦੀ ceiling ਹੈ।",
      "Scheme card ਜਾਂ Aadhaar ਕਿਸੇ ਅਣਪਛਾਤੇ agent ਨੂੰ ਨਾ ਦਿਓ।",
    ],
    currentStatus:
      "ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਯੋਜਨਾ 2026 ਵਿੱਚ ਪੰਜਾਬ ਵਿੱਚ ਲਾਗੂ ਹੈ। Hospital empanelment, packages ਅਤੇ registration channels ਬਦਲ ਸਕਦੇ ਹਨ, ਇਸ ਲਈ treatment ਤੋਂ ਪਹਿਲਾਂ State Health Agency ਤੋਂ ਮੌਜੂਦਾ ਜਾਣਕਾਰੀ verify ਕਰੋ।",
    deepDiveHeading:
      "₹10 ਲੱਖ ਕੈਸ਼ਲੈੱਸ ਕਵਰ ਅਸਲ ਵਿੱਚ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ?",
    deepDive: [
      "₹10 ਲੱਖ ਹਰ ਪਰਿਵਾਰ ਨੂੰ cash ਵਿੱਚ ਨਹੀਂ ਮਿਲਦਾ। ਇਹ ਇੱਕ annual family treatment-cover ceiling ਹੈ ਜਿਸ ਦੇ ਅੰਦਰ scheme ਦੇ eligible hospitalization packages ਲਈ approved cashless treatment ਹੋ ਸਕਦਾ ਹੈ।",
      "Health card ਹੋਣਾ ਆਪਣੇ ਆਪ ਵਿੱਚ ਹਰ test, medicine ਜਾਂ operation ਦੀ payment guarantee ਨਹੀਂ ਹੈ। Hospital scheme desk diagnosis ਨੂੰ eligible package ਨਾਲ match ਕਰਦਾ ਹੈ ਅਤੇ ਜਿੱਥੇ ਲੋੜ ਹੋਵੇ pre-authorization ਲੈਂਦਾ ਹੈ।",
      "ਇਲਾਜ ਤੋਂ ਪਹਿਲਾਂ ਪੁੱਛੋ ਕਿ hospital empanelled ਹੈ ਜਾਂ ਨਹੀਂ, package ਦਾ ਨਾਮ ਕੀ ਹੈ, package ਵਿੱਚ ਕੀ ਸ਼ਾਮਲ ਹੈ ਅਤੇ authorization approved ਹੈ ਜਾਂ pending।",
      "ਜੇ hospital scheme ਦੇ ਨਾਮ ਉੱਤੇ ਵਾਧੂ payment ਮੰਗਦਾ ਹੈ ਤਾਂ itemized explanation ਅਤੇ receipts ਸੰਭਾਲੋ ਅਤੇ State Health Agency ਤੋਂ clarification ਲਵੋ।",
    ],
    faqs: [
      {
        question: "ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਯੋਜਨਾ ਵਿੱਚ ਕਿੰਨਾ ਕਵਰ ਮਿਲਦਾ ਹੈ?",
        answer:
          "Punjab scheme eligible family ਲਈ ਪ੍ਰਤੀ ਸਾਲ ₹10 ਲੱਖ ਤੱਕ cashless hospitalization cover ਦੱਸਦੀ ਹੈ। ਇਹ ਸਿੱਧਾ cash payment ਨਹੀਂ ਹੈ।",
      },
      {
        question: "ਕੀ ਕੋਈ income limit ਹੈ?",
        answer:
          "ਮੌਜੂਦਾ scheme ਨੂੰ Punjab residents ਲਈ universal ਦੱਸਿਆ ਗਿਆ ਹੈ ਅਤੇ ਆਮ household income ceiling ਪ੍ਰਕਾਸ਼ਿਤ ਨਹੀਂ ਕੀਤੀ ਗਈ। Residence ਅਤੇ identity verification ਫਿਰ ਵੀ ਲਾਜ਼ਮੀ ਹੈ।",
      },
      {
        question: "ਕੀ ਕਿਸੇ ਵੀ private hospital ਵਿੱਚ ਇਲਾਜ ਹੋ ਸਕਦਾ ਹੈ?",
        answer:
          "ਨਹੀਂ। Hospital scheme ਲਈ empanelled ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ treatment eligible package ਵਿੱਚ ਆਉਣਾ ਚਾਹੀਦਾ ਹੈ।",
      },
      {
        question: "Registration ਕਿੱਥੇ ਹੋ ਸਕਦੀ ਹੈ?",
        answer:
          "State Health Agency ਦੀ official website ਅਤੇ authorized Sewa Kendra ਜਾਂ Common Service Centre ਵਰਤੇ ਜਾ ਸਕਦੇ ਹਨ। ਮੌਜੂਦਾ channel official source ਤੋਂ verify ਕਰੋ।",
      },
      {
        question: "ਕੀ Ayushman card ਇਸ scheme ਲਈ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ?",
        answer:
          "ਪੁਰਾਣਾ beneficiary ਜਾਂ Ayushman record system ਨੂੰ ਪਰਿਵਾਰ ਪਛਾਣਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ, ਪਰ current MMSY activation ਅਤੇ cover hospital ਜਾਂ State Health Agency ਤੋਂ verify ਕਰੋ।",
      },
    ],
    officialUrl: "https://sha.punjab.gov.in/shapunjab/index.php",
    department:
      "State Health Agency, ਸਿਹਤ ਅਤੇ ਪਰਿਵਾਰ ਭਲਾਈ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image: "/images/schemes/mukh-mantri-sehat-yojana-punjab.webp",
    imageAlt:
      "ਪੰਜਾਬ ਦਾ ਪਰਿਵਾਰ ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਯੋਜਨਾ ਦੇ health card ਬਾਰੇ ਹਸਪਤਾਲ help desk ਉੱਤੇ ਜਾਣਕਾਰੀ ਲੈਂਦਾ ਹੋਇਆ",
  },

  "old-age-pension-punjab": {
    slug: "old-age-pension-punjab",
    name: "ਪੰਜਾਬ ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਸਕੀਮ",
    seoTitle:
      "ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਪੰਜਾਬ 2026: ਯੋਗਤਾ, ਦਸਤਾਵੇਜ਼, ਅਰਜ਼ੀ ਅਤੇ ਸਟੇਟਸ",
    description:
      "ਪੰਜਾਬ ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਸਕੀਮ 2026 ਬਾਰੇ ਯੋਗਤਾ, ਉਮਰ, ਦਸਤਾਵੇਜ਼, ਬੈਂਕ ਵੇਰਵਾ, ਅਰਜ਼ੀ, Sewa Kendra ਅਤੇ pension status ਜਾਣਕਾਰੀ ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਪੰਜਾਬ ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਇੱਕ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਸੇਵਾ ਹੈ ਜਿਸ ਅਧੀਨ ਯੋਗ ਵੱਡੀ ਉਮਰ ਦੇ ਪੰਜਾਬ ਵਸਨੀਕਾਂ ਦੀ ਉਮਰ, ਰਹਾਇਸ਼, ਆਮਦਨ, ਸੰਪਤੀ ਅਤੇ ਹੋਰ ਮੌਜੂਦਾ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਜਾਂਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
    category: "ਪੈਨਸ਼ਨ",
    beneficiaries:
      "ਪੰਜਾਬ ਦੇ ਵੱਡੀ ਉਮਰ ਦੇ ਉਹ ਵਸਨੀਕ ਜੋ ਵਿਭਾਗ ਦੇ ਮੌਜੂਦਾ ਉਮਰ, ਰਹਾਇਸ਼, ਆਮਦਨ ਅਤੇ property verification ਨਿਯਮ ਪੂਰੇ ਕਰਦੇ ਹਨ।",
    benefitDetails: [
      "ਯੋਗ ਸੀਨੀਅਰ ਨਾਗਰਿਕ ਲਈ ਪੰਜਾਬ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਪੈਨਸ਼ਨ",
      "ਬੈਂਕ ਖਾਤੇ ਰਾਹੀਂ ਸਰਕਾਰੀ ਭੁਗਤਾਨ ਦੀ ਵਿਵਸਥਾ",
      "Punjab Connect, Sewa Kendra ਅਤੇ 1076 ਰਾਹੀਂ service guidance",
      "ਮੌਜੂਦਾ official service sheet ਵਿੱਚ ਪੂਰੀ pension amount ਅਤੇ ਸਾਰੀਆਂ eligibility thresholds ਨਹੀਂ ਦਿੱਤੀਆਂ ਗਈਆਂ",
    ],
    eligibilityChecklist: [
      "ਅਰਜ਼ੀਕਾਰ ਮੌਜੂਦਾ prescribed age condition ਪੂਰੀ ਕਰਦਾ ਹੋਵੇ",
      "Punjab residence ਦਾ accepted proof ਹੋਵੇ",
      "ਮੌਜੂਦਾ income condition ਪੂਰੀ ਹੁੰਦੀ ਹੋਵੇ",
      "Property ਜਾਂ land ownership rules ਪੂਰੇ ਹੁੰਦੇ ਹੋਣ",
      "Bank account ਅਤੇ identity details verify ਹੋ ਸਕਣ",
    ],
    documents: [
      "ਮਨਜ਼ੂਰਸ਼ੁਦਾ identity proof",
      "ਮਨਜ਼ੂਰਸ਼ੁਦਾ address proof",
      "ਉਮਰ ਜਾਂ date of birth proof",
      "ਬੈਂਕ ਪਾਸਬੁੱਕ",
      "ਮੌਜੂਦਾ service process ਵੱਲੋਂ ਮੰਗਿਆ ਹੋਰ ਦਸਤਾਵੇਜ਼",
    ],
    applicationMethods: [
      "Punjab Connect Portal ਉੱਤੇ ਮੌਜੂਦਾ service ਵੇਖੋ",
      "Punjab Sewa Kendra ਰਾਹੀਂ assisted application ਕਰੋ",
      "1076 ਉੱਤੇ doorstep-service guidance ਬਾਰੇ ਪੁੱਛੋ",
      "Application acknowledgement ਸੰਭਾਲ ਕੇ ਰੱਖੋ",
    ],
    practicalTips: [
      "ਅਰਜ਼ੀ ਤੋਂ ਪਹਿਲਾਂ current age, income ਅਤੇ property criteria Sewa Kendra ਤੋਂ ਪੁੱਛੋ।",
      "ਪੁਰਾਣੀ news report ਤੋਂ pension amount assume ਨਾ ਕਰੋ।",
      "Joint ਜਾਂ inherited property ਹੋਵੇ ਤਾਂ ਸਹੀ ਵੇਰਵਾ disclose ਕਰੋ।",
      "Name ਅਤੇ date of birth identity, age proof ਅਤੇ bank record ਵਿੱਚ match ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।",
    ],
    currentStatus:
      "Punjab ਦੀ official service sheet pension service ਨੂੰ list ਕਰਦੀ ਹੈ, ਪਰ ਇਸ ਵਿੱਚ ਪੂਰੀ ਮੌਜੂਦਾ pension amount ਅਤੇ ਸਾਰੀਆਂ thresholds ਨਹੀਂ ਦਿੱਤੀਆਂ। Apply ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ department ਜਾਂ Sewa Kendra ਤੋਂ current rules verify ਕਰੋ।",
    deepDiveHeading:
      "ਉਮਰ, ਆਮਦਨ ਅਤੇ property verification ਕਿਵੇਂ ਸਮਝੀਏ?",
    deepDive: [
      "Age proof, Punjab residence, income ਅਤੇ property verification ਵੱਖ-ਵੱਖ eligibility checks ਹਨ। Aadhaar ਜਾਂ voter record identity ਅਤੇ address ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ ਪਰ ਹਰ ਹਾਲਤ ਵਿੱਚ age proof ਦਾ ਬਦਲ ਨਹੀਂ ਹੁੰਦਾ।",
      "ਜੇ birth record ਸਪਸ਼ਟ ਨਹੀਂ ਹੈ ਤਾਂ application ਤੋਂ ਪਹਿਲਾਂ ਪੁੱਛੋ ਕਿ department ਕਿਹੜੇ alternative age documents accept ਕਰਦਾ ਹੈ।",
      "Joint, inherited ਜਾਂ disputed property ਨੂੰ ਛੁਪਾਉਣ ਦੀ ਬਜਾਏ verification authority ਨੂੰ ਸਹੀ ਜਾਣਕਾਰੀ ਦਿਓ।",
    ],
    faqs: [
      {
        question: "ਪੰਜਾਬ ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਲਈ ਕੌਣ apply ਕਰ ਸਕਦਾ ਹੈ?",
        answer:
          "ਉਹ ਵੱਡੀ ਉਮਰ ਦੇ Punjab residents ਜੋ ਮੌਜੂਦਾ age, income, residence ਅਤੇ property conditions ਪੂਰੇ ਕਰਦੇ ਹਨ।",
      },
      {
        question: "ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਲਈ ਕਿਹੜੇ documents ਚਾਹੀਦੇ ਹਨ?",
        answer:
          "Identity proof, address proof, age proof ਅਤੇ bank passbook ਮੁੱਖ documents ਹਨ। Current service additional evidence ਮੰਗ ਸਕਦੀ ਹੈ।",
      },
      {
        question: "ਕੀ online apply ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ?",
        answer:
          "Official service sheet Punjab Connect Portal, Sewa Kendra ਅਤੇ 1076 guidance ਦਾ ਜ਼ਿਕਰ ਕਰਦੀ ਹੈ।",
      },
      {
        question: "ਪੈਨਸ਼ਨ ਦੀ ਮੌਜੂਦਾ amount ਕਿੰਨੀ ਹੈ?",
        answer:
          "ਅਸੀਂ ਵਰਤੀ current official service sheet ਵਿੱਚ amount ਨਹੀਂ ਦਿੱਤੀ ਹੋਈ, ਇਸ ਲਈ current figure department ਤੋਂ verify ਕਰੋ।",
      },
      {
        question: "Application status ਕਿੱਥੇ ਪੁੱਛੀਏ?",
        answer:
          "Punjab Connect ਜਾਂ Sewa Kendra ਤੋਂ acknowledgement/application details ਨਾਲ current status ਬਾਰੇ ਪੁੱਛਿਆ ਜਾ ਸਕਦਾ ਹੈ।",
      },
    ],
    officialUrl:
      "https://punjab.gov.in/wp-content/uploads/2025/09/Old-Age-Pension-Scheme.pdf",
    department:
      "ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਵਿਕਾਸ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image: "/images/schemes/old-age-pension-punjab.webp",
    imageAlt:
      "ਪੰਜਾਬ ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਲਈ ਦਸਤਾਵੇਜ਼ ਵੇਖਦਾ ਇੱਕ ਬਜ਼ੁਰਗ ਪੰਜਾਬੀ ਜੋੜਾ",
  },

  "widow-destitute-pension-punjab": {
    slug: "widow-destitute-pension-punjab",
    name: "ਪੰਜਾਬ ਵਿਧਵਾ ਅਤੇ ਬੇਸਹਾਰਾ ਮਹਿਲਾ ਪੈਨਸ਼ਨ",
    seoTitle:
      "ਵਿਧਵਾ ਪੈਨਸ਼ਨ ਪੰਜਾਬ 2026: ਯੋਗਤਾ, ਦਸਤਾਵੇਜ਼, ਅਰਜ਼ੀ ਅਤੇ ਸਟੇਟਸ",
    description:
      "ਪੰਜਾਬ ਵਿਧਵਾ ਅਤੇ ਬੇਸਹਾਰਾ ਮਹਿਲਾ ਪੈਨਸ਼ਨ 2026 ਲਈ ਯੋਗਤਾ, death certificate, divorce ਜਾਂ missing spouse evidence, documents ਅਤੇ application ਜਾਣਕਾਰੀ ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਪੰਜਾਬ ਦੀ ਇਹ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਪੈਨਸ਼ਨ eligible ਵਿਧਵਾ, ਤਲਾਕਸ਼ੁਦਾ ਜਾਂ ਹੋਰ ਮੰਨੀ ਗਈ ਬੇਸਹਾਰਾ ਮਹਿਲਾਵਾਂ ਲਈ ਹੈ। Applicant ਦੀ situation ਅਨੁਸਾਰ required evidence ਵੱਖ ਹੋ ਸਕਦਾ ਹੈ।",
    category: "ਪੈਨਸ਼ਨ",
    beneficiaries:
      "ਵਿਧਵਾ, ਤਲਾਕਸ਼ੁਦਾ ਜਾਂ official service ਵਿੱਚ ਮੰਨੀ ਗਈ ਹੋਰ destitute category ਦੀਆਂ ਮਹਿਲਾਵਾਂ, subject to current departmental verification.",
    benefitDetails: [
      "ਯੋਗ ਮਹਿਲਾਵਾਂ ਲਈ Punjab social-security pension",
      "ਵਿਧਵਾ, divorce, missing spouse ਅਤੇ ਕੁਝ disability-related circumstances ਲਈ ਵੱਖ evidence route",
      "Punjab Connect, Sewa Kendra ਅਤੇ 1076 guidance",
    ],
    eligibilityChecklist: [
      "Applicant Punjab ਦੀ resident ਹੋਵੇ",
      "ਉਸਦੀ actual situation service ਦੀ covered category ਨਾਲ match ਕਰਦੀ ਹੋਵੇ",
      "Widow case ਵਿੱਚ husband's registered death certificate available ਹੋਵੇ",
      "Divorce case ਵਿੱਚ accepted legal divorce evidence ਹੋਵੇ",
      "Missing spouse ਜਾਂ disability case ਵਿੱਚ prescribed competent-authority evidence ਹੋਵੇ",
    ],
    documents: [
      "Identity proof",
      "Address proof",
      "Date of birth proof",
      "Bank passbook",
      "Husband death certificate, divorce order, missing-person FIR ਜਾਂ applicable disability proof",
    ],
    applicationMethods: [
      "Punjab Connect Portal ਰਾਹੀਂ current service apply ਕਰੋ",
      "Punjab Sewa Kendra ਉੱਤੇ assisted application ਕਰੋ",
      "1076 ਰਾਹੀਂ doorstep guidance ਬਾਰੇ ਪੁੱਛੋ",
      "Acknowledgement ਅਤੇ submitted document copies ਸੰਭਾਲੋ",
    ],
    practicalTips: [
      "ਆਪਣੀ actual situation ਲਈ ਸਹੀ category select ਕਰੋ।",
      "Death certificate ਜਾਂ court order ਵਿੱਚ names applicant documents ਨਾਲ match ਕਰੋ।",
      "Missing spouse case ਵਿੱਚ required police record ਬਾਰੇ ਪਹਿਲਾਂ ਪੁੱਛੋ।",
      "Submitted application ਦੀ complete copy ਸੰਭਾਲ ਕੇ ਰੱਖੋ।",
    ],
    currentStatus:
      "Punjab ਦੀ current official service sheet ਇਸ pension service ਨੂੰ list ਕਰਦੀ ਹੈ। Exact benefit amount ਅਤੇ ਕੁਝ eligibility thresholds ਲਈ current department confirmation ਲੈਣਾ ਸੁਰੱਖਿਅਤ ਹੈ।",
    deepDiveHeading:
      "Widow, divorce ਅਤੇ missing-spouse cases ਵਿੱਚ ਸਹੀ evidence ਕਿਵੇਂ ਚੁਣੀਏ?",
    deepDive: [
      "Widowhood, divorce, missing spouse ਅਤੇ disabled spouse situations ਲਈ evidence interchangeable ਨਹੀਂ ਹੁੰਦਾ। Applicant ਨੂੰ ਆਪਣੀ actual situation ਅਨੁਸਾਰ prescribed record ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ।",
      "Spelling, old address ਜਾਂ relationship mismatch ਹੋਣ ਉੱਤੇ application ਤੋਂ ਪਹਿਲਾਂ competent authority ਤੋਂ correction ਜਾਂ acceptable supporting evidence ਬਾਰੇ ਪੁੱਛੋ।",
    ],
    faqs: [
      {
        question: "ਵਿਧਵਾ ਪੈਨਸ਼ਨ ਲਈ ਮੁੱਖ document ਕੀ ਹੈ?",
        answer:
          "Widow case ਵਿੱਚ husband's registered death certificate ਮੁੱਖ situation-specific evidence ਹੈ।",
      },
      {
        question: "ਤਲਾਕਸ਼ੁਦਾ ਮਹਿਲਾ apply ਕਰ ਸਕਦੀ ਹੈ?",
        answer:
          "Service covered category ਅਨੁਸਾਰ eligible divorced applicant accepted legal divorce evidence ਨਾਲ apply ਕਰ ਸਕਦੀ ਹੈ।",
      },
      {
        question: "ਜੇ husband missing ਹੈ ਤਾਂ ਕੀ ਚਾਹੀਦਾ ਹੈ?",
        answer:
          "Department ਵੱਲੋਂ prescribed police/FIR evidence ਲੋੜੀਂਦਾ ਹੋ ਸਕਦਾ ਹੈ। Exact requirement Sewa Kendra ਤੋਂ verify ਕਰੋ।",
      },
      {
        question: "Apply ਕਿੱਥੇ ਕਰੀਏ?",
        answer:
          "Punjab Connect Portal ਜਾਂ Punjab Sewa Kendra ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ; 1076 ਤੋਂ guidance ਵੀ ਲਈ ਜਾ ਸਕਦੀ ਹੈ।",
      },
    ],
    officialUrl:
      "https://punjab.gov.in/wp-content/uploads/2025/09/Widow-Destitute-pension-scheme.pdf",
    department:
      "ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਵਿਕਾਸ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image: "/images/schemes/widow-destitute-pension-punjab.webp",
    imageAlt:
      "ਪੰਜਾਬ ਵਿਧਵਾ ਪੈਨਸ਼ਨ ਅਰਜ਼ੀ ਲਈ community service desk ਉੱਤੇ ਦਸਤਾਵੇਜ਼ ਲੈ ਕੇ ਬੈਠੀ ਮਹਿਲਾ",
  },

  "dependent-children-pension-punjab": {
    slug: "dependent-children-pension-punjab",
    name: "ਪੰਜਾਬ ਆਸ਼ਰਿਤ ਬੱਚਿਆਂ ਦੀ ਪੈਨਸ਼ਨ ਸਕੀਮ",
    seoTitle:
      "ਆਸ਼ਰਿਤ ਬੱਚਿਆਂ ਦੀ ਪੈਨਸ਼ਨ ਪੰਜਾਬ 2026: ਯੋਗਤਾ, ਦਸਤਾਵੇਜ਼ ਅਤੇ ਅਰਜ਼ੀ",
    description:
      "Punjab Dependent Children Pension 2026 ਲਈ guardian, mother ਜਾਂ father application, birth proof, parental death/disability documents ਅਤੇ application process ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਇਹ ਪੰਜਾਬ ਸਮਾਜਿਕ ਸਹਾਇਤਾ service eligible dependent children ਲਈ ਹੈ ਜਿੱਥੇ ਮਾਤਾ-ਪਿਤਾ ਦੀ ਮੌਤ ਜਾਂ disability ਨਾਲ ਸੰਬੰਧਤ prescribed conditions ਲਾਗੂ ਹੁੰਦੀਆਂ ਹਨ।",
    category: "ਬੱਚੇ ਅਤੇ ਪਰਿਵਾਰ",
    beneficiaries:
      "Eligible dependent children ਜਿਨ੍ਹਾਂ ਲਈ mother, father ਜਾਂ guardian current departmental rules ਅਨੁਸਾਰ application ਕਰਦਾ ਹੈ।",
    benefitDetails: [
      "Eligible dependent children ਲਈ Punjab social-assistance pension",
      "Mother, father ਜਾਂ guardian ਰਾਹੀਂ case-specific application",
      "Parental death ਜਾਂ disability circumstances ਅਨੁਸਾਰ verification",
    ],
    eligibilityChecklist: [
      "Child ਦੀ age/date-of-birth evidence available ਹੋਵੇ",
      "Applying adult ਦੀ child ਨਾਲ relationship establish ਹੋਵੇ",
      "Applicable parental death ਜਾਂ disability condition prove ਹੋ ਸਕੇ",
      "Punjab residence ਅਤੇ current departmental conditions ਪੂਰੇ ਹੋਣ",
    ],
    documents: [
      "Applicant identity ਅਤੇ address proof",
      "Applicant date-of-birth proof",
      "ਹਰ dependent child ਦਾ date-of-birth proof",
      "Bank passbook",
      "Applicable parent death certificate ਜਾਂ disability certificate",
    ],
    applicationMethods: [
      "Punjab Connect Portal ਰਾਹੀਂ apply ਕਰੋ",
      "Punjab Sewa Kendra ਉੱਤੇ assisted application ਕਰੋ",
      "1076 ਤੋਂ doorstep guidance ਲਵੋ",
      "ਹਰ child ਦੇ documents ਅਤੇ acknowledgement copies ਸੰਭਾਲੋ",
    ],
    practicalTips: [
      "ਹਰ child ਲਈ separate age document ਤਿਆਰ ਰੱਖੋ।",
      "Guardian application ਵਿੱਚ relationship evidence ਪਹਿਲਾਂ verify ਕਰੋ।",
      "Minor beneficiary ਲਈ bank account title/process current service ਤੋਂ ਪੁੱਛੋ।",
      "Death/disability certificates competent authority ਦੇ ਹੋਣ।",
    ],
    currentStatus:
      "Service Punjab ਦੇ social-security system ਵਿੱਚ listed ਹੈ। Child ਅਤੇ applying adult ਦੀ exact situation ਅਨੁਸਾਰ evidence requirements ਵੱਖ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
    deepDiveHeading:
      "Parent ਜਾਂ guardian ਬੱਚੇ ਦਾ case ਕਿਵੇਂ ਤਿਆਰ ਕਰੇ?",
    deepDive: [
      "ਪਹਿਲਾਂ ਹਰ child ਦਾ exact name ਅਤੇ date of birth official record ਅਨੁਸਾਰ note ਕਰੋ ਅਤੇ identify ਕਰੋ ਕਿ application mother, father ਜਾਂ guardian ਵਿੱਚੋਂ ਕੌਣ ਕਰ ਰਿਹਾ ਹੈ।",
      "Parental death ਜਾਂ disability certificate ਵਿੱਚ relevant parent ਦੀ identity child ਅਤੇ applicant records ਨਾਲ connect ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
      "Informal ਜਾਂ disputed guardianship ਹੋਵੇ ਤਾਂ application ਤੋਂ ਪਹਿਲਾਂ official guidance ਲਵੋ।",
    ],
    faqs: [
      {
        question: "ਕੀ guardian child ਲਈ apply ਕਰ ਸਕਦਾ ਹੈ?",
        answer:
          "ਹਾਂ, prescribed conditions ਵਿੱਚ guardian apply ਕਰ ਸਕਦਾ ਹੈ, ਪਰ relationship ਅਤੇ case-specific evidence ਲੋੜੀਂਦਾ ਹੋਵੇਗਾ।",
      },
      {
        question: "ਹਰ child ਲਈ birth proof ਚਾਹੀਦਾ ਹੈ?",
        answer:
          "Official service evidence ਦੇ ਅਨੁਸਾਰ dependent children ਦੇ age/date-of-birth records ਤਿਆਰ ਰੱਖਣੇ ਚਾਹੀਦੇ ਹਨ।",
      },
      {
        question: "ਕਿਹੜਾ parent-related document ਚਾਹੀਦਾ ਹੈ?",
        answer:
          "Case ਅਨੁਸਾਰ parental death certificate ਜਾਂ disability certificate ਲੋੜੀਂਦਾ ਹੋ ਸਕਦਾ ਹੈ।",
      },
    ],
    officialUrl:
      "https://punjab.gov.in/wp-content/uploads/2025/09/Dependent-children-pension-scheme.pdf",
    department:
      "ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਵਿਕਾਸ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image: "/images/schemes/dependent-children-pension-punjab.webp",
    imageAlt:
      "ਪੰਜਾਬ ਵਿੱਚ guardian ਦੇ ਨਾਲ ਸਕੂਲ ਜਾਂਦੇ ਬੱਚੇ",
  },

  "disabled-person-pension-punjab": {
    slug: "disabled-person-pension-punjab",
    name: "ਪੰਜਾਬ ਦਿਵਿਆਂਗ ਵਿਅਕਤੀ ਪੈਨਸ਼ਨ ਸਕੀਮ",
    seoTitle:
      "ਦਿਵਿਆਂਗ ਪੈਨਸ਼ਨ ਪੰਜਾਬ 2026: ਯੋਗਤਾ, Disability Certificate, ਦਸਤਾਵੇਜ਼ ਅਤੇ ਅਰਜ਼ੀ",
    description:
      "Punjab Disabled Person Pension 2026 ਲਈ disability certificate, parent/guardian application, income/property conditions, documents ਅਤੇ application process ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਪੰਜਾਬ ਦੀ ਇਹ ਵਿੱਤੀ ਸਹਾਇਤਾ service eligible persons with disabilities ਲਈ ਹੈ। Minor ਜਾਂ independently apply ਨਾ ਕਰ ਸਕਣ ਵਾਲੇ beneficiary ਲਈ parent ਜਾਂ guardian application ਕਰ ਸਕਦਾ ਹੈ।",
    category: "ਦਿਵਿਆਂਗ ਭਲਾਈ",
    beneficiaries:
      "Punjab residents with disability ਜੋ competent authority ਦਾ accepted disability proof ਰੱਖਦੇ ਹਨ ਅਤੇ current disability, income, employment, property ਅਤੇ residence conditions ਪੂਰੇ ਕਰਦੇ ਹਨ।",
    benefitDetails: [
      "Eligible person with disability ਲਈ Punjab financial-assistance pension",
      "Minor ਜਾਂ applicable case ਵਿੱਚ parent/guardian application",
      "Official form ਵਿੱਚ government ਅਤੇ facilitation fee ₹0 ਦਰਜ ਹੈ",
    ],
    eligibilityChecklist: [
      "Competent authority ਵੱਲੋਂ disability proof available ਹੋਵੇ",
      "Punjab residence condition ਪੂਰੀ ਹੁੰਦੀ ਹੋਵੇ",
      "Current disability threshold ਅਤੇ category satisfy ਹੁੰਦੀ ਹੋਵੇ",
      "Income, employment ਅਤੇ property conditions current rules ਅਨੁਸਾਰ ਪੂਰੀਆਂ ਹੁੰਦੀਆਂ ਹੋਣ",
      "Representative application ਹੋਵੇ ਤਾਂ relationship establish ਹੋਵੇ",
    ],
    documents: [
      "Beneficiary date-of-birth proof",
      "Competent-authority disability certificate",
      "Parent/guardian identity ਅਤੇ residence proof, ਜਿੱਥੇ applicable",
      "Self-declaration",
      "Beneficiary bank passbook first-page copy",
      "Photograph, ਜਿੱਥੇ current application mode ਵਿੱਚ required ਹੋਵੇ",
    ],
    applicationMethods: [
      "Valid disability certificate ਤਿਆਰ ਕਰੋ",
      "Age, residence, declaration ਅਤੇ bank documents ਤਿਆਰ ਕਰੋ",
      "Punjab Connect, Sewa Kendra ਜਾਂ current authorized channel ਰਾਹੀਂ apply ਕਰੋ",
      "Minor beneficiary ਲਈ parent/guardian prescribed declaration complete ਕਰੇ",
      "Acknowledgement ਅਤੇ complete file ਸੰਭਾਲੋ",
    ],
    practicalTips: [
      "Medical treatment paper ਨੂੰ automatically disability certificate ਨਾ ਮੰਨੋ।",
      "Disability percentage ਅਤੇ category accepted format ਵਿੱਚ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
      "2019 form ਵਿੱਚ ਦਿੱਤੀਆਂ income/property thresholds ਨੂੰ current department ਤੋਂ verify ਕਰੋ।",
      "Representative ਅਤੇ beneficiary details ਵੱਖ-ਵੱਖ ਸਹੀ ਭਰੋ।",
    ],
    currentStatus:
      "Available official form 2019 revision ਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਕੁਝ income ਅਤੇ property thresholds ਦਿੱਤੀਆਂ ਹਨ, ਪਰ current application ਤੋਂ ਪਹਿਲਾਂ department ਤੋਂ confirm ਕਰੋ ਕਿ ਉਹ ਅਜੇ ਵੀ operative ਹਨ।",
    deepDiveHeading:
      "Disability certification ਅਤੇ representative application ਨੂੰ ਸਮਝੋ",
    deepDive: [
      "Disability certificate claim ਦਾ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ medical/legal record ਹੈ। ਇਸ ਵਿੱਚ beneficiary ਦੀ identity, disability nature ਅਤੇ applicable percentage ਸਹੀ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
      "Parent ਜਾਂ guardian application ਵਿੱਚ applicant ਅਤੇ beneficiary roles ਵੱਖ ਹਨ। Form ਵਿੱਚ beneficiary ਦੇ personal, Aadhaar, disability ਅਤੇ bank details separate ਰਹਿੰਦੇ ਹਨ।",
      "Self-declaration ਵਿੱਚ employment, land, income ਅਤੇ property ਨਾਲ ਸੰਬੰਧਤ statements truthful ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।",
    ],
    faqs: [
      {
        question: "ਦਿਵਿਆਂਗ ਪੈਨਸ਼ਨ ਲਈ disability certificate ਲਾਜ਼ਮੀ ਹੈ?",
        answer:
          "Competent authority ਦਾ accepted disability proof claim ਦਾ ਮੁੱਖ eligibility document ਹੈ।",
      },
      {
        question: "ਕੀ parent child ਲਈ apply ਕਰ ਸਕਦਾ ਹੈ?",
        answer:
          "Minor ਜਾਂ applicable representative case ਵਿੱਚ parent ਜਾਂ guardian apply ਕਰ ਸਕਦਾ ਹੈ।",
      },
      {
        question: "Application fee ਕਿੰਨੀ ਹੈ?",
        answer:
          "Available official form government fee ਅਤੇ facilitation charge ₹0 ਦਰਜ ਕਰਦਾ ਹੈ।",
      },
    ],
    officialUrl:
      "https://punjab.gov.in/wp-content/uploads/2021/10/Disabled-Person-Pension.pdf",
    department:
      "ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਵਿਕਾਸ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image: "/images/schemes/disabled-person-pension-punjab.webp",
    imageAlt:
      "ਪੰਜਾਬ ਦਿਵਿਆਂਗ ਪੈਨਸ਼ਨ service centre ਉੱਤੇ wheelchair ਵਰਤਦਾ beneficiary",
  },

  "national-family-benefit-scheme-punjab": {
    slug: "national-family-benefit-scheme-punjab",
    name: "ਨੈਸ਼ਨਲ ਫੈਮਿਲੀ ਬੇਨੇਫਿਟ ਸਕੀਮ ਪੰਜਾਬ",
    seoTitle:
      "National Family Benefit Scheme Punjab 2026: ਯੋਗਤਾ, BPL, Death Certificate ਅਤੇ ਅਰਜ਼ੀ",
    description:
      "Punjab National Family Benefit Scheme ਲਈ primary earning member ਦੀ ਮੌਤ, BPL family eligibility, death certificate, documents ਅਤੇ application process ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਇਹ one-time family assistance service eligible Punjab BPL family ਲਈ ਹੈ ਜਦੋਂ ਪਰਿਵਾਰ ਦੇ primary earning member ਦੀ ਮੌਤ ਹੋ ਜਾਂਦੀ ਹੈ ਅਤੇ ਮੌਜੂਦਾ departmental conditions ਪੂਰੀਆਂ ਹੁੰਦੀਆਂ ਹਨ।",
    category: "ਪਰਿਵਾਰਕ ਸਹਾਇਤਾ",
    beneficiaries:
      "Eligible Punjab BPL household ਦਾ beneficiary, primary earning member ਦੀ ਮੌਤ ਤੋਂ ਬਾਅਦ, subject to current age, BPL ਅਤੇ verification rules.",
    benefitDetails: [
      "Eligible BPL family ਲਈ primary earner ਦੀ ਮੌਤ ਤੋਂ ਬਾਅਦ one-time assistance",
      "Official form District Social Security Officer office ਤੋਂ free supply ਹੋਣ ਦੀ ਗੱਲ ਕਰਦਾ ਹੈ",
      "Available Punjab facilitation-charge record service charge nil ਦਰਸਾਉਂਦਾ ਹੈ",
    ],
    eligibilityChecklist: [
      "Family current rules ਅਨੁਸਾਰ BPL status establish ਕਰ ਸਕੇ",
      "Deceased person primary earning member condition satisfy ਕਰਦਾ ਹੋਵੇ",
      "Available older form ਅਨੁਸਾਰ age-at-death condition 18 ਤੋਂ 64 ਸਾਲ ਦਰਜ ਹੈ",
      "Registered death certificate available ਹੋਵੇ",
      "Beneficiary relationship ਅਤੇ family record verify ਹੋ ਸਕਣ",
    ],
    documents: [
      "Primary earning member ਦਾ registered death certificate",
      "Self-declaration",
      "BPL card ਜਾਂ current BPL-family evidence",
      "Beneficiary identity, address ਅਤੇ relationship details",
      "Aadhaar ਜਾਂ enrolment information",
      "Current process ਅਨੁਸਾਰ bank-account evidence",
    ],
    applicationMethods: [
      "Primary-earner ਅਤੇ BPL conditions ਪਹਿਲਾਂ verify ਕਰੋ",
      "Registered death certificate ਅਤੇ family/BPL record ਤਿਆਰ ਕਰੋ",
      "District Social Security Officer ਜਾਂ current authorized channel ਤੋਂ form/process ਲਵੋ",
      "Beneficiary ਅਤੇ deceased-person details ਸਹੀ ਭਰੋ",
      "Acknowledgement ਸੰਭਾਲ ਕੇ ਰੱਖੋ",
    ],
    practicalTips: [
      "Death certificate primary-earner status ਆਪਣੇ ਆਪ prove ਨਹੀਂ ਕਰਦਾ।",
      "Family composition ਅਤੇ deceased ਦੀ earning role ਬਾਰੇ truthful details ਦਿਓ।",
      "Old BPL card ਅਤੇ current electronic record ਵਿੱਚ mismatch ਹੋਵੇ ਤਾਂ ਪਹਿਲਾਂ correction/guidance ਲਵੋ।",
      "Current grant amount ਅਤੇ application deadline department ਤੋਂ verify ਕਰੋ।",
    ],
    currentStatus:
      "Punjab form available ਹੈ ਪਰ ਇਹ August 2017 revision ਦਾ ਹੈ ਅਤੇ assistance amount ਨਹੀਂ ਦੱਸਦਾ। Current grant amount, age rule, BPL verification ਅਤੇ deadline current authority ਤੋਂ confirm ਕਰੋ।",
    deepDiveHeading:
      "Primary earning member ਅਤੇ BPL condition ਕਿਵੇਂ prove ਹੁੰਦੀ ਹੈ?",
    deepDive: [
      "Death certificate ਮੌਤ ਅਤੇ date prove ਕਰਦਾ ਹੈ, ਪਰ deceased primary earning member ਸੀ ਜਾਂ ਨਹੀਂ ਇਹ separate eligibility question ਹੈ।",
      "Family ਨੂੰ household earning situation ਅਤੇ beneficiary relationship ਬਾਰੇ ਸਹੀ record ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ।",
      "BPL evidence relevant family ਨੂੰ identify ਕਰੇ; ਸਿਰਫ਼ ਕਿਸੇ relative ਦਾ ਪੁਰਾਣਾ card ਕਾਫ਼ੀ ਨਹੀਂ ਹੋ ਸਕਦਾ।",
    ],
    faqs: [
      {
        question: "ਇਹ scheme ਕਿਸ situation ਵਿੱਚ ਮਿਲਦੀ ਹੈ?",
        answer:
          "Eligible BPL family ਵਿੱਚ primary earning member ਦੀ ਮੌਤ ਤੋਂ ਬਾਅਦ current conditions satisfy ਹੋਣ ਉੱਤੇ assistance ਲਈ claim ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।",
      },
      {
        question: "Death certificate ਲੋੜੀਂਦਾ ਹੈ?",
        answer:
          "Registered death certificate mandatory supporting evidence ਵਿੱਚੋਂ ਇੱਕ ਹੈ।",
      },
      {
        question: "Current benefit amount ਕਿੰਨੀ ਹੈ?",
        answer:
          "Reviewed Punjab form amount ਨਹੀਂ ਦੱਸਦਾ, ਇਸ ਲਈ current grant department ਤੋਂ verify ਕਰੋ।",
      },
    ],
    officialUrl:
      "https://punjab.gov.in/wp-content/uploads/2020/05/NationalFamilyBenefitScheme.pdf",
    department:
      "ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਵਿਕਾਸ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image: "/images/schemes/national-family-benefit-scheme-punjab.webp",
    imageAlt:
      "Punjab National Family Benefit Scheme ਲਈ ਦਸਤਾਵੇਜ਼ ਵੇਖਦਾ ਪਰਿਵਾਰ",
  },

  "aashirwad-scheme-punjab": {
    slug: "aashirwad-scheme-punjab",
    name: "ਆਸ਼ੀਰਵਾਦ ਸਕੀਮ ਪੰਜਾਬ",
    seoTitle:
      "ਆਸ਼ੀਰਵਾਦ ਸਕੀਮ ਪੰਜਾਬ 2026: ₹51,000, ਯੋਗਤਾ, ਦਸਤਾਵੇਜ਼, Apply Online ਅਤੇ Status",
    description:
      "Punjab Aashirwad Scheme 2026 ਹੇਠ ₹51,000 marriage assistance, bride eligibility, income/category documents, online application ਅਤੇ status ਜਾਣਕਾਰੀ ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਆਸ਼ੀਰਵਾਦ ਸਕੀਮ ਪੰਜਾਬ ਵਿੱਚ eligible low-income families ਦੀਆਂ covered-category ਮਹਿਲਾਵਾਂ ਲਈ ਵਿਆਹ ਸਹਾਇਤਾ ਹੈ। ਮੌਜੂਦਾ ਸਰਕਾਰੀ ਜਾਣਕਾਰੀ ਅਨੁਸਾਰ eligible beneficiary ਨੂੰ ₹51,000 Direct Benefit Transfer ਰਾਹੀਂ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ।",
    category: "ਮਹਿਲਾਵਾਂ ਅਤੇ ਵਿਆਹ ਸਹਾਇਤਾ",
    beneficiaries:
      "18 ਸਾਲ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਉਮਰ ਦੀ eligible bride ਜੋ Punjab resident covered category ਅਤੇ current family-income conditions ਪੂਰੀ ਕਰਦੀ ਹੈ। Covered groups ਵਿੱਚ SC, Christian, BC ਅਤੇ economically weaker-section categories ਸਮੇਤ ਕੁਝ ਹੋਰ prescribed cases ਸ਼ਾਮਲ ਹਨ।",
    benefitDetails: [
      "Eligible beneficiary ਲਈ ₹51,000 marriage assistance",
      "Payment Direct Benefit Transfer ਰਾਹੀਂ beneficiary bank account ਵਿੱਚ",
      "Official Ashirwad portal ਰਾਹੀਂ online processing",
      "Approved Punjab facilitation-charge notification service fee nil ਦਰਸਾਉਂਦੀ ਹੈ",
    ],
    eligibilityChecklist: [
      "Bride ਦੀ ਉਮਰ ਘੱਟੋ-ਘੱਟ 18 ਸਾਲ ਹੋਵੇ",
      "Punjab residence proof ਹੋਵੇ",
      "Applicant covered category ਵਿੱਚ ਆਉਂਦੀ ਹੋਵੇ",
      "Current family-income condition ਪੂਰੀ ਹੁੰਦੀ ਹੋਵੇ",
      "Marriage ਅਤੇ beneficiary bank details current portal requirements ਨਾਲ match ਕਰਨ",
    ],
    documents: [
      "Punjab residence proof",
      "Bride date-of-birth proof",
      "Applicable caste/category evidence",
      "Annual family-income declaration ਜਾਂ income certificate",
      "BPL card ਜਿੱਥੇ applicable",
      "Marriage details ਅਤੇ current portal documents",
      "Beneficiary bank-account information",
    ],
    applicationMethods: [
      "Official Punjab Ashirwad portal ਖੋਲ੍ਹੋ",
      "Bride category, age, income ਅਤੇ Punjab residence eligibility verify ਕਰੋ",
      "Bride, marriage, family ਅਤੇ bank details ਭਰੋ",
      "Required documents upload ਕਰੋ",
      "Current permitted application period ਦੇ ਅੰਦਰ submit ਕਰੋ",
      "Acknowledgement status tracking ਲਈ ਸੰਭਾਲੋ",
    ],
    practicalTips: [
      "Old downloadable form ਵਿੱਚ ਪੁਰਾਣੀ ₹15,000 wording ਤੋਂ confuse ਨਾ ਹੋਵੋ।",
      "Current government material ₹51,000 benefit ਦੱਸਦਾ ਹੈ।",
      "Marriage date ਅਤੇ application timing current portal ਤੋਂ verify ਕਰੋ।",
      "Unofficial agent ਨੂੰ fee ਨਾ ਦਿਓ।",
      "Bank ਅਤੇ identity records ਵਿੱਚ bride ਦਾ ਨਾਮ match ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
    ],
    currentStatus:
      "Current Punjab government material ₹51,000 assistance ਅਤੇ Ashirwad portal processing ਦੱਸਦਾ ਹੈ। Older downloadable form ਵਿੱਚ ਪੁਰਾਣੀ amount ਹੈ, ਇਸ ਲਈ current portal rules ਨੂੰ priority ਦਿਓ।",
    deepDiveHeading:
      "Category, income ਅਤੇ marriage timing ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹਨ?",
    deepDive: [
      "Scheme ਹਰ marriage ਲਈ automatic payment ਨਹੀਂ ਹੈ। Bride ਦੀ covered category, age, Punjab residence ਅਤੇ current family-income conditions verify ਹੁੰਦੀਆਂ ਹਨ।",
      "Application marriage date ਦੇ prescribed period ਨਾਲ linked ਹੋ ਸਕਦੀ ਹੈ, ਇਸ ਲਈ delay ਕਰਨ ਦੀ ਬਜਾਏ current portal deadline check ਕਰੋ।",
      "Old forms ਅਤੇ current benefit ਵਿੱਚ difference ਹੋ ਸਕਦਾ ਹੈ; current official notification/portal ਨੂੰ latest source ਮੰਨੋ।",
    ],
    faqs: [
      {
        question: "ਆਸ਼ੀਰਵਾਦ ਸਕੀਮ ਵਿੱਚ ਕਿੰਨੇ ਪੈਸੇ ਮਿਲਦੇ ਹਨ?",
        answer:
          "Current Punjab government material eligible beneficiary ਲਈ ₹51,000 marriage assistance ਦੱਸਦਾ ਹੈ।",
      },
      {
        question: "Bride ਦੀ minimum age ਕਿੰਨੀ ਹੈ?",
        answer:
          "Eligible bride ਦੀ ਉਮਰ ਘੱਟੋ-ਘੱਟ 18 ਸਾਲ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
      },
      {
        question: "Apply online ਕਿੱਥੇ ਕਰੀਏ?",
        answer:
          "Official Punjab Ashirwad portal https://ashirwad.punjab.gov.in ਵਰਤੋ।",
      },
      {
        question: "ਕੀ application fee ਹੈ?",
        answer:
          "Punjab approved facilitation-charge record service fee nil ਦਰਸਾਉਂਦਾ ਹੈ।",
      },
      {
        question: "Old form ਵਿੱਚ ₹15,000 ਕਿਉਂ ਲਿਖਿਆ ਹੈ?",
        answer:
          "Older downloadable form outdated amount ਦਿਖਾਉਂਦਾ ਹੈ; current government material ₹51,000 benefit ਦੱਸਦਾ ਹੈ।",
      },
    ],
    officialUrl: "https://ashirwad.punjab.gov.in",
    department:
      "ਸਮਾਜਿਕ ਨਿਆਂ, ਅਧਿਕਾਰਤਾ ਅਤੇ ਘੱਟ ਗਿਣਤੀ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image: "/images/schemes/aashirwad-scheme-punjab.webp",
    imageAlt:
      "ਆਸ਼ੀਰਵਾਦ ਸਕੀਮ ਪੰਜਾਬ ਲਈ ਦਸਤਾਵੇਜ਼ ਤਿਆਰ ਕਰਦੀ ਪੰਜਾਬੀ ਦੁਲਹਨ ਅਤੇ ਉਸਦੀ ਮਾਤਾ",
  },

  "bebe-nanki-laadli-beti-kalyan-scheme": {
    slug: "bebe-nanki-laadli-beti-kalyan-scheme",
    name: "ਬੇਬੇ ਨਾਨਕੀ ਲਾਡਲੀ ਬੇਟੀ ਕਲਿਆਣ ਸਕੀਮ",
    seoTitle:
      "ਬੇਬੇ ਨਾਨਕੀ ਲਾਡਲੀ ਬੇਟੀ ਕਲਿਆਣ ਸਕੀਮ 2026: ਯੋਗਤਾ, ਲਾਭ ਅਤੇ ਮੌਜੂਦਾ Status",
    description:
      "Bebe Nanki Laadli Beti Kalyan Scheme Punjab ਬਾਰੇ girl-child eligibility, documents, benefits ਅਤੇ current enrolment status ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "ਬੇਬੇ ਨਾਨਕੀ ਲਾਡਲੀ ਬੇਟੀ ਕਲਿਆਣ ਸਕੀਮ ਪੰਜਾਬ ਦੀ girl-child welfare scheme ਵਜੋਂ responsible department ਦੀ scheme information ਵਿੱਚ listed ਰਹੀ ਹੈ, ਪਰ current enrolment status, benefit schedule ਅਤੇ application route ਲਈ direct official confirmation ਲੋੜੀਂਦੀ ਹੈ।",
    category: "ਬੱਚੀਆਂ ਅਤੇ ਮਹਿਲਾ ਭਲਾਈ",
    beneficiaries:
      "Scheme historically economically disadvantaged Punjab families ਦੀਆਂ eligible girls ਲਈ child sex ratio ਅਤੇ girl-child welfare objective ਨਾਲ ਜੋੜੀ ਗਈ ਸੀ। Current detailed eligibility official source ਤੋਂ confirm ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।",
    benefitDetails: [
      "Girl-child welfare ਅਤੇ long-term support ਨਾਲ ਜੁੜੀ Punjab scheme",
      "Economically disadvantaged families ਉੱਤੇ historical focus",
      "Current benefit schedule ਅਤੇ payment structure direct official confirmation ਮੰਗਦੇ ਹਨ",
    ],
    eligibilityChecklist: [
      "Girl child Punjab family ਨਾਲ related eligibility satisfy ਕਰਦੀ ਹੋਵੇ",
      "Current birth-date condition department ਤੋਂ verify ਕੀਤੀ ਜਾਵੇ",
      "Income ਅਤੇ family-size conditions current rules ਤੋਂ confirm ਕੀਤੀਆਂ ਜਾਣ",
      "Any category priority official source ਤੋਂ verify ਕੀਤੀ ਜਾਵੇ",
    ],
    documents: [
      "Girl child's registered birth certificate",
      "Parent/guardian identity proof",
      "Punjab residence proof",
      "Current accepted family-income evidence",
      "Family record",
      "Authorized office ਵੱਲੋਂ ਮੰਗਿਆ bank/payment detail",
    ],
    applicationMethods: [
      "Department ਤੋਂ ਪਹਿਲਾਂ confirm ਕਰੋ ਕਿ fresh enrolment currently open ਹੈ ਜਾਂ ਨਹੀਂ",
      "Current application form ਅਤੇ authorized channel ਬਾਰੇ ਪੁੱਛੋ",
      "Birth, residence, income ਅਤੇ family documents ਤਿਆਰ ਕਰੋ",
      "Unofficial portal ਉੱਤੇ child documents upload ਨਾ ਕਰੋ",
      "Acknowledgement ਮਿਲਣ ਉੱਤੇ ਸੰਭਾਲੋ",
    ],
    practicalTips: [
      "Old blog posts ਤੋਂ current benefit amount assume ਨਾ ਕਰੋ।",
      "Agent ਨੂੰ enrolment fee ਨਾ ਦਿਓ ਜਦ ਤੱਕ official department fee confirm ਨਾ ਕਰੇ।",
      "Child's birth certificate ਅਤੇ parent records ਵਿੱਚ names match ਕਰੋ।",
      "Current enrolment status department ਤੋਂ verify ਕਰਨਾ ਸਭ ਤੋਂ ਪਹਿਲਾ step ਹੈ।",
    ],
    currentStatus:
      "Scheme responsible Punjab department ਨਾਲ associated/listed ਹੈ, ਪਰ 21 August 2026 review ਵਿੱਚ current fresh enrolment window, complete benefit schedule ਅਤੇ active application portal independently verify ਨਹੀਂ ਹੋਏ।",
    deepDiveHeading:
      "ਇਸ ਸਕੀਮ ਬਾਰੇ current information ਨੂੰ ਸਾਵਧਾਨੀ ਨਾਲ ਕਿਉਂ verify ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
    deepDive: [
      "Girl-child schemes ਬਾਰੇ ਕਈ websites ਪੁਰਾਣੀਆਂ amounts ਅਤੇ eligibility rules ਨੂੰ current ਦੱਸਦੀਆਂ ਹਨ। ਜਦ official current notification unavailable ਹੋਵੇ ਤਾਂ outdated figures publish ਕਰਨਾ applicant ਨੂੰ ਗਲਤ decision ਵੱਲ ਲੈ ਜਾ ਸਕਦਾ ਹੈ।",
      "Fresh enrolment open ਹੈ ਜਾਂ ਨਹੀਂ, ਇਹ benefit details ਤੋਂ ਵੀ ਪਹਿਲਾਂ verify ਕਰਨ ਵਾਲੀ ਗੱਲ ਹੈ।",
      "PunjabSchemes.com ਇਸ page ਨੂੰ update ਕਰੇਗਾ ਜਦ responsible department current application instructions ਜਾਂ notification publish ਕਰਦਾ ਹੈ।",
    ],
    faqs: [
      {
        question: "ਕੀ ਬੇਬੇ ਨਾਨਕੀ ਲਾਡਲੀ ਬੇਟੀ ਸਕੀਮ ਅਜੇ open ਹੈ?",
        answer:
          "Current fresh enrolment window 21 August 2026 review ਵਿੱਚ independently confirm ਨਹੀਂ ਹੋਈ। Department ਤੋਂ current status verify ਕਰੋ।",
      },
      {
        question: "ਕੀ online apply ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ?",
        answer:
          "Current authorized online portal verify ਨਹੀਂ ਹੋਇਆ। Unofficial registration websites ਤੋਂ ਬਚੋ।",
      },
      {
        question: "ਕਿਹੜੇ documents ਤਿਆਰ ਰੱਖੀਏ?",
        answer:
          "Birth certificate, parent/guardian identity, Punjab residence ਅਤੇ current income/family evidence useful ਹੋ ਸਕਦੇ ਹਨ, ਪਰ exact list department ਤੋਂ ਲਵੋ।",
      },
    ],
    officialUrl:
      "https://punjab.gov.in/government/departments/social-security1/",
    department:
      "ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਵਿਕਾਸ ਵਿਭਾਗ, ਪੰਜਾਬ ਸਰਕਾਰ",
    lastReviewed: "2026-08-21",
    image:
      "/images/schemes/bebe-nanki-laadli-beti-kalyan-scheme.webp",
    imageAlt:
      "ਬੇਬੇ ਨਾਨਕੀ ਲਾਡਲੀ ਬੇਟੀ ਸਕੀਮ ਨਾਲ ਸੰਬੰਧਤ ਘਰ ਵਿੱਚ ਪੜ੍ਹਦੀ ਪੰਜਾਬੀ ਬੱਚੀ",
  },

  "construction-worker-shagun-scheme-punjab": {
    slug: "construction-worker-shagun-scheme-punjab",
    name: "ਪੰਜਾਬ BOCW ਸ਼ਗਨ ਸਕੀਮ",
    seoTitle:
      "Punjab BOCW Shagun Scheme 2026: ₹31,000, ਯੋਗਤਾ, Documents ਅਤੇ Apply",
    description:
      "Punjab construction worker Shagun Scheme ਲਈ ₹31,000 marriage assistance, registered worker eligibility, daughter marriage documents ਅਤੇ application ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "Punjab Building and Other Construction Workers Welfare Board ਦੀ Shagun Scheme eligible registered construction worker ਦੀ ਧੀ ਦੇ ਪਹਿਲੇ ਵਿਆਹ ਜਾਂ eligible registered female beneficiary ਦੇ ਆਪਣੇ ਪਹਿਲੇ ਵਿਆਹ ਲਈ ₹31,000 assistance ਦਿੰਦੀ ਹੈ।",
    category: "ਨਿਰਮਾਣ ਮਜ਼ਦੂਰ",
    beneficiaries:
      "Registered Punjab BOCW beneficiary ਦੀ eligible daughter ਦਾ first marriage ਜਾਂ eligible registered female beneficiary ਦਾ ਆਪਣਾ first marriage, subject to active membership ਅਤੇ contribution conditions.",
    benefitDetails: [
      "Eligible marriage ਲਈ ₹31,000 assistance",
      "Maximum ਦੋ daughters ਦੇ eligible marriages ਲਈ benefit",
      "Eligible registered female beneficiary ਦੇ ਆਪਣੇ first marriage ਲਈ ਵੀ provision",
      "Second marriage ਲਈ benefit ਨਹੀਂ",
    ],
    eligibilityChecklist: [
      "Construction worker Punjab BOCW Board ਨਾਲ registered ਹੋਵੇ",
      "Membership ਅਤੇ contribution current ਹੋਣ",
      "Marriage eligible first-marriage condition satisfy ਕਰਦੀ ਹੋਵੇ",
      "Daughter cases ਵਿੱਚ maximum two-daughter condition observe ਹੋਵੇ",
    ],
    documents: [
      "Registered marriage certificate",
      "Bride photograph",
      "Marriage photograph",
      "Bride date-of-birth certificate",
      "BOCW registration ਅਤੇ bank details",
      "Sarpanch ਜਾਂ accepted local authority marriage confirmation",
    ],
    applicationMethods: [
      "BOCW Form 35 complete ਕਰੋ",
      "Required marriage ਅਤੇ age documents attach ਕਰੋ",
      "Current authorized labour/Sewa channel ਰਾਹੀਂ submit ਕਰੋ",
      "Official form ਅਨੁਸਾਰ marriage ਤੋਂ ਤਿੰਨ ਮਹੀਨੇ ਦੇ ਅੰਦਰ apply ਕਰੋ",
    ],
    practicalTips: [
      "Worker contribution active ਹੈ ਜਾਂ ਨਹੀਂ ਪਹਿਲਾਂ check ਕਰੋ।",
      "Bride date of birth ਅਤੇ marriage certificate details match ਕਰੋ।",
      "Three-month timing condition miss ਨਾ ਕਰੋ।",
      "Benefit amount current Board source ਤੋਂ final verify ਕਰੋ।",
    ],
    currentStatus:
      "Reviewed official BOCW material eligible marriage ਲਈ ₹31,000 assistance ਦੱਸਦਾ ਹੈ। Membership ਅਤੇ contribution status application ਤੋਂ ਪਹਿਲਾਂ verify ਕਰੋ।",
    deepDiveHeading:
      "BOCW membership ਅਤੇ marriage eligibility ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹਨ?",
    deepDive: [
      "Shagun benefit general Punjab marriage grant ਨਹੀਂ ਹੈ; ਇਹ registered BOCW beneficiary welfare benefit ਹੈ।",
      "Worker registration ਅਤੇ contribution record inactive ਹੋਣ ਉੱਤੇ otherwise eligible marriage claim affect ਹੋ ਸਕਦਾ ਹੈ।",
      "Marriage date, bride age ਅਤੇ prescribed supporting evidence correctly document ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।",
    ],
    faqs: [
      {
        question: "BOCW Shagun Scheme ਵਿੱਚ ਕਿੰਨੀ ਰਕਮ ਮਿਲਦੀ ਹੈ?",
        answer:
          "Reviewed official Board material eligible marriage ਲਈ ₹31,000 assistance ਦੱਸਦਾ ਹੈ।",
      },
      {
        question: "ਕਿੰਨੀਆਂ daughters ਲਈ benefit ਮਿਲ ਸਕਦਾ ਹੈ?",
        answer:
          "Official scheme conditions up to two daughters ਦੇ eligible marriages ਦੀ limit ਦੱਸਦੀਆਂ ਹਨ।",
      },
      {
        question: "Apply ਕਿੰਨੇ ਸਮੇਂ ਵਿੱਚ ਕਰਨਾ ਹੈ?",
        answer:
          "Official form marriage date ਤੋਂ ਤਿੰਨ ਮਹੀਨੇ ਦੇ ਅੰਦਰ application ਦਾ rule ਦੱਸਦਾ ਹੈ।",
      },
    ],
    officialUrl:
      "https://bocw.punjab.gov.in/userfiles/file/shagun%20Form%2035%20updated.pdf",
    department:
      "Punjab Building and Other Construction Workers Welfare Board, ਕਿਰਤ ਵਿਭਾਗ",
    lastReviewed: "2026-08-21",
    image:
      "/images/schemes/construction-worker-shagun-scheme-punjab.webp",
    imageAlt:
      "Punjab BOCW Shagun Scheme ਲਈ ਵਿਆਹ ਦੇ documents ਤਿਆਰ ਕਰਦਾ construction worker ਅਤੇ ਉਸਦੀ ਬਾਲਗ ਧੀ",
  },

  "construction-worker-scholarship-punjab": {
    slug: "construction-worker-scholarship-punjab",
    name: "ਪੰਜਾਬ BOCW ਸਿੱਖਿਆ ਵਜ਼ੀਫ਼ਾ ਸਕੀਮ",
    seoTitle:
      "Punjab BOCW Scholarship 2026: Construction Worker Children Stipend, Eligibility ਅਤੇ Apply",
    description:
      "Punjab BOCW scholarship/stipend scheme ਲਈ construction workers ਦੇ ਬੱਚਿਆਂ ਦੀ school ਤੋਂ degree education assistance, documents, rates ਅਤੇ application ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "Punjab BOCW Welfare Board eligible registered construction workers ਦੇ ਬੱਚਿਆਂ ਲਈ school ਤੋਂ degree-level study ਤੱਕ education assistance ਦਿੰਦਾ ਹੈ। ਕੁਝ courses ਅਤੇ hostel students ਲਈ higher assistance listed ਹੈ।",
    category: "ਨਿਰਮਾਣ ਮਜ਼ਦੂਰ ਅਤੇ ਵਿਦਿਆਰਥੀ",
    beneficiaries:
      "Registered Punjab BOCW beneficiary ਦੇ eligible children ਜੋ prescribed school, college ਜਾਂ course ਵਿੱਚ study ਕਰ ਰਹੇ ਹਨ; detailed scheme ਕੁਝ registered beneficiaries ਦੀ evening-class study ਨੂੰ ਵੀ cover ਕਰਦੀ ਹੈ।",
    benefitDetails: [
      "School ਤੋਂ degree-level education ਲਈ annual assistance",
      "Official Board summary ਵਿੱਚ category/course ਅਨੁਸਾਰ ₹3,000 ਤੋਂ ₹70,000 ਤੱਕ historical listed rates",
      "Certain hostel students ਲਈ higher support",
      "Rates course, class, gender ਅਤੇ hostel status ਅਨੁਸਾਰ ਵੱਖ ਹੋ ਸਕਦੀਆਂ ਹਨ",
    ],
    eligibilityChecklist: [
      "Parent/beneficiary active registered Punjab BOCW worker ਹੋਵੇ",
      "Student eligible class/course ਵਿੱਚ admitted ਹੋਵੇ",
      "Current contribution/membership condition satisfy ਹੋਵੇ",
      "Required institution certificates available ਹੋਣ",
    ],
    documents: [
      "Institution-attested student photograph",
      "Current admission/class certificate",
      "Previous class pass certificate",
      "Hostel certificate, ਜਿੱਥੇ hostel assistance claim ਹੋਵੇ",
      "BOCW registration ਅਤੇ bank details",
    ],
    applicationMethods: [
      "School/college ਤੋਂ required certificates ਲਵੋ",
      "Current BOCW welfare service channel ਰਾਹੀਂ apply ਕਰੋ",
      "Documents upload ਜਾਂ submit ਕਰੋ",
      "Acknowledgement/application number ਸੰਭਾਲੋ",
    ],
    practicalTips: [
      "Current sanctioned rate apply ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ Board ਤੋਂ confirm ਕਰੋ।",
      "Old rate table ਨੂੰ automatically 2026 rate ਨਾ ਮੰਨੋ।",
      "Institution certificate ਵਿੱਚ class/course ਅਤੇ session ਸਹੀ ਹੋਵੇ।",
      "Hostel benefit ਲਈ separate hostel evidence ਤਿਆਰ ਕਰੋ।",
    ],
    currentStatus:
      "Official Board summary assistance range list ਕਰਦਾ ਹੈ, ਪਰ detailed rates 1 April 2016 effective notation ਨਾਲ ਹਨ। Current sanctioned education-assistance rate verify ਕਰੋ।",
    deepDiveHeading:
      "Course ਅਤੇ hostel status ਅਨੁਸਾਰ scholarship amount ਕਿਉਂ ਬਦਲਦੀ ਹੈ?",
    deepDive: [
      "BOCW education assistance ਇੱਕ flat scholarship ਨਹੀਂ ਹੈ। Listed rates class, course, gender ਅਤੇ hostel status ਅਨੁਸਾਰ differ ਕਰਦੀਆਂ ਹਨ।",
      "Old official rate table useful reference ਹੈ ਪਰ 2026 claim ਤੋਂ ਪਹਿਲਾਂ current Board sanction confirm ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।",
      "Student admission ਅਤੇ previous-class evidence incomplete ਹੋਣ ਨਾਲ application verification delay ਹੋ ਸਕਦੀ ਹੈ।",
    ],
    faqs: [
      {
        question: "BOCW scholarship ਕਿਸਦੇ ਬੱਚਿਆਂ ਲਈ ਹੈ?",
        answer:
          "Eligible registered Punjab construction workers ਦੇ children prescribed conditions ਅਨੁਸਾਰ apply ਕਰ ਸਕਦੇ ਹਨ।",
      },
      {
        question: "Scholarship amount ਕਿੰਨੀ ਹੈ?",
        answer:
          "Official historical summary ₹3,000 ਤੋਂ ₹70,000 ਤੱਕ course/category-based rates list ਕਰਦਾ ਹੈ, ਪਰ current rate Board ਤੋਂ verify ਕਰੋ।",
      },
      {
        question: "Hostel student ਲਈ extra benefit ਹੋ ਸਕਦਾ ਹੈ?",
        answer:
          "Official material ਕੁਝ hostel categories ਲਈ higher assistance list ਕਰਦਾ ਹੈ; hostel certificate required ਹੋ ਸਕਦਾ ਹੈ।",
      },
    ],
    officialUrl:
      "https://bocw.punjab.gov.in/bApi/images/file-1657795250542.pdf",
    department:
      "Punjab Building and Other Construction Workers Welfare Board, ਕਿਰਤ ਵਿਭਾਗ",
    lastReviewed: "2026-08-21",
    image:
      "/images/schemes/construction-worker-scholarship-punjab.webp",
    imageAlt:
      "Construction worker ਦੀ ਧੀ Punjab BOCW scholarship ਲਈ engineering study ਕਰਦੀ ਹੋਈ",
  },

  "construction-worker-maternity-benefit-punjab": {
    slug: "construction-worker-maternity-benefit-punjab",
    name: "ਪੰਜਾਬ BOCW ਮਾਤਰਿਤਵ ਲਾਭ ਸਕੀਮ",
    seoTitle:
      "Punjab BOCW Maternity Benefit 2026: ₹21,000/₹5,000, Eligibility ਅਤੇ Documents",
    description:
      "Punjab construction worker maternity benefit scheme ਹੇਠ female worker ₹21,000 ਅਤੇ eligible male worker spouse case ₹5,000 historical Board amount, documents ਅਤੇ apply process ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "Punjab BOCW Maternity Benefit Scheme eligible registered construction workers ਲਈ up to two children ਦੇ birth ਨਾਲ ਸੰਬੰਧਤ financial assistance ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।",
    category: "ਨਿਰਮਾਣ ਮਜ਼ਦੂਰ ਅਤੇ ਮਾਤਰਿਤਵ",
    beneficiaries:
      "Eligible registered female construction worker ਜਾਂ eligible registered male construction worker ਆਪਣੀ spouse ਨਾਲ ਸੰਬੰਧਤ claim ਕਰ ਸਕਦਾ ਹੈ, subject to Board membership ਅਤੇ contribution conditions.",
    benefitDetails: [
      "Official Board summary female worker ਲਈ ₹21,000 per eligible child list ਕਰਦਾ ਹੈ",
      "Eligible male worker ਲਈ ₹5,000 per child listed ਹੈ",
      "Benefit up to two children ਲਈ",
      "Current amount application ਤੋਂ ਪਹਿਲਾਂ Board ਤੋਂ verify ਕਰੋ",
    ],
    eligibilityChecklist: [
      "Worker registered Punjab BOCW beneficiary ਹੋਵੇ",
      "Contribution/membership active ਹੋਵੇ",
      "Birth up-to-two-children condition ਅੰਦਰ ਹੋਵੇ",
      "Required birth ਅਤੇ local certificates available ਹੋਣ",
    ],
    documents: [
      "Child birth certificate",
      "Village Sarpanch certificate",
      "BOCW registration ਅਤੇ contribution details",
      "Bank account number, branch ਅਤੇ IFSC",
    ],
    applicationMethods: [
      "BOCW Maternity Benefit Form 46 complete ਕਰੋ",
      "Birth certificate ਅਤੇ Sarpanch certificate attach ਕਰੋ",
      "Sewa Kendra ਜਾਂ current authorized BOCW channel ਰਾਹੀਂ submit ਕਰੋ",
      "Official scheme conditions ਅਨੁਸਾਰ child birth ਤੋਂ ਤਿੰਨ ਮਹੀਨੇ ਅੰਦਰ apply ਕਰੋ",
    ],
    practicalTips: [
      "Birth certificate registration delay ਨਾ ਕਰੋ।",
      "Worker contribution status first verify ਕਰੋ।",
      "Three-month application window current Board ਤੋਂ confirm ਕਰੋ।",
      "Old Form 46 October 2017 revision ਦਾ ਹੈ, ਇਸ ਲਈ current amount ਵੀ verify ਕਰੋ।",
    ],
    currentStatus:
      "Board summary female worker ₹21,000 ਅਤੇ eligible male worker ₹5,000 per child, up to two children, list ਕਰਦਾ ਹੈ। Form older revision ਦਾ ਹੈ, ਇਸ ਲਈ current amount/deadline verify ਕਰੋ।",
    deepDiveHeading:
      "Female ਅਤੇ male registered workers ਲਈ benefit ਕਿਵੇਂ ਵੱਖ ਹੈ?",
    deepDive: [
      "Scheme registered construction-worker welfare benefit ਹੈ, universal maternity benefit ਨਹੀਂ।",
      "Official Board summary female beneficiary ਅਤੇ male worker spouse-case ਲਈ ਵੱਖ amounts list ਕਰਦਾ ਹੈ।",
      "Birth certificate, contribution record ਅਤੇ application timing claim verification ਦੇ ਮੁੱਖ ਹਿੱਸੇ ਹਨ।",
    ],
    faqs: [
      {
        question: "Female construction worker ਲਈ amount ਕਿੰਨੀ listed ਹੈ?",
        answer:
          "Official Board summary ₹21,000 per eligible child list ਕਰਦਾ ਹੈ, subject to current verification।",
      },
      {
        question: "Male worker ਵੀ claim ਕਰ ਸਕਦਾ ਹੈ?",
        answer:
          "Official material eligible registered male worker ਲਈ spouse-related birth case ਵਿੱਚ ₹5,000 per child list ਕਰਦਾ ਹੈ।",
      },
      {
        question: "ਕਿੰਨੇ children ਲਈ benefit ਹੈ?",
        answer:
          "Official scheme material benefit ਨੂੰ up to two children ਤੱਕ limit ਕਰਦਾ ਹੈ।",
      },
    ],
    officialUrl:
      "https://punjab.gov.in/wp-content/uploads/2020/05/Application-for-Maternity-Benefit-scheme-Form-No-46.pdf",
    department:
      "Punjab Building and Other Construction Workers Welfare Board, ਕਿਰਤ ਵਿਭਾਗ",
    lastReviewed: "2026-08-21",
    image:
      "/images/schemes/construction-worker-maternity-benefit-punjab.webp",
    imageAlt:
      "Punjab BOCW maternity benefit ਨਾਲ ਸੰਬੰਧਤ newborn ਨਾਲ construction-worker ਜੋੜਾ",
  },

  "construction-worker-tools-kit-punjab": {
    slug: "construction-worker-tools-kit-punjab",
    name: "ਪੰਜਾਬ BOCW ਟੂਲ ਕਿੱਟ ਸਕੀਮ",
    seoTitle:
      "Punjab BOCW Tool Kit Scheme 2026: ₹5,000 Reimbursement, Eligibility ਅਤੇ Apply",
    description:
      "Punjab BOCW Tool Kit Scheme ਹੇਠ eligible trained construction workers ਲਈ tools reimbursement, ₹5,000 historical ceiling, training conditions ਅਤੇ application ਪੰਜਾਬੀ ਵਿੱਚ।",
    summary:
      "Punjab BOCW Tool Kit Scheme eligible registered construction workers ਨੂੰ work tools ਖਰੀਦਣ ਲਈ reimbursement assistance ਨਾਲ ਜੋੜਦੀ ਹੈ, ਖਾਸ ਤੌਰ ਉੱਤੇ Board Skill Upgradation ਜਾਂ Recognition of Prior Learning training complete ਕਰਨ ਵਾਲੇ workers ਲਈ।",
    category: "ਨਿਰਮਾਣ ਮਜ਼ਦੂਰ",
    beneficiaries:
      "Regular contribution ਵਾਲੇ eligible registered Punjab BOCW workers ਜਿਨ੍ਹਾਂ ਨੇ prescribed Skill Upgradation ਜਾਂ Recognition of Prior Learning training complete ਕੀਤੀ ਹੈ।",
    benefitDetails: [
      "Official Board material tools ਲਈ reimbursement up to ₹5,000 describe ਕਰਦਾ ਹੈ",
      "Benefit prescribed qualifying training ਨਾਲ linked ਹੈ",
      "Official material benefit ਨੂੰ ਤਿੰਨ ਸਾਲ ਬਾਅਦ ਦੁਬਾਰਾ claim ਕਰਨ ਦੀ provision ਦੱਸਦਾ ਹੈ",
      "Current ceiling ਅਤੇ interval Board ਤੋਂ verify ਕਰੋ",
    ],
    eligibilityChecklist: [
      "Worker Punjab BOCW Board ਨਾਲ registered ਹੋਵੇ",
      "Contribution record regular/current ਹੋਵੇ",
      "Required Skill Upgradation ਜਾਂ RPL training complete ਕੀਤੀ ਹੋਵੇ",
      "Qualifying tools ਦੀ purchase evidence available ਹੋਵੇ",
    ],
    documents: [
      "BOCW registration details",
      "Training completion evidence",
      "Eligible tools purchase bills/receipts",
      "Bank account details",
      "Board ਵੱਲੋਂ current application ਵਿੱਚ ਮੰਗੇ ਹੋਰ records",
    ],
    applicationMethods: [
      "Training qualification first verify ਕਰੋ",
      "Eligible tools ਦੀ purchase bills ਸੰਭਾਲੋ",
      "Current BOCW welfare channel ਰਾਹੀਂ reimbursement application ਕਰੋ",
      "Registration, training, bills ਅਤੇ bank documents submit ਕਰੋ",
      "Acknowledgement ਸੰਭਾਲੋ",
    ],
    practicalTips: [
      "Tools ਖਰੀਦਣ ਤੋਂ ਪਹਿਲਾਂ current eligible list ਅਤੇ reimbursement ceiling verify ਕਰੋ।",
      "Cash purchase without proper bill claim ਨੂੰ problem ਕਰ ਸਕਦੀ ਹੈ।",
      "Three-year repeat interval current Board rule ਤੋਂ confirm ਕਰੋ।",
      "Training certificate safely preserve ਕਰੋ।",
    ],
    currentStatus:
      "Reviewed official Board material reimbursement up to ₹5,000 ਅਤੇ three-year repeat possibility describe ਕਰਦਾ ਹੈ। Current ceiling ਅਤੇ qualifying interval Board ਤੋਂ verify ਕਰੋ।",
    deepDiveHeading:
      "Tool reimbursement ਅਤੇ training condition ਕਿਵੇਂ linked ਹਨ?",
    deepDive: [
      "Tool Kit Scheme general tool-purchase subsidy ਨਹੀਂ ਹੈ। It is linked to eligible registered workers and prescribed skill/RPL training.",
      "Reimbursement claim ਲਈ purchase evidence ਅਤੇ worker's qualifying status ਦੋਵੇਂ ਮਹੱਤਵਪੂਰਨ ਹਨ।",
      "Old scheme amount ਉੱਤੇ purchase decision ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ current ceiling verify ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।",
    ],
    faqs: [
      {
        question: "Tool Kit Scheme ਵਿੱਚ ਕਿੰਨੀ reimbursement listed ਹੈ?",
        answer:
          "Reviewed official material up to ₹5,000 reimbursement describe ਕਰਦਾ ਹੈ; current ceiling verify ਕਰੋ।",
      },
      {
        question: "ਕੀ ਹਰ registered worker eligible ਹੈ?",
        answer:
          "Scheme qualifying training condition ਨਾਲ linked ਹੈ, ਇਸ ਲਈ registration alone ਕਾਫ਼ੀ ਨਹੀਂ ਹੋ ਸਕਦੀ।",
      },
      {
        question: "ਕੀ benefit ਦੁਬਾਰਾ ਮਿਲ ਸਕਦਾ ਹੈ?",
        answer:
          "Official material three-year interval ਤੋਂ ਬਾਅਦ repeat claim ਦੀ provision ਦੱਸਦਾ ਹੈ; current rule Board ਤੋਂ confirm ਕਰੋ।",
      },
    ],
    officialUrl: "https://bocw.punjab.gov.in/",
    department:
      "Punjab Building and Other Construction Workers Welfare Board, ਕਿਰਤ ਵਿਭਾਗ",
    lastReviewed: "2026-08-21",
    image:
      "/images/schemes/construction-worker-tools-kit-punjab.webp",
    imageAlt:
      "Punjab BOCW Tool Kit Scheme ਨਾਲ ਸੰਬੰਧਤ workbench ਉੱਤੇ tools ਰੱਖਦਾ trained construction worker",
  },

};

export function getPunjabiScheme(slug: string) {
  return punjabiSchemes[slug];
}

export function hasPunjabiScheme(slug: string) {
  return Boolean(punjabiSchemes[slug]);
}

export const punjabiSchemeSlugs = Object.keys(punjabiSchemes);

import { readFileSync } from "node:fs";

const schemesSource = readFileSync("src/lib/schemes.ts", "utf8");
const guidesSource = readFileSync("src/lib/scheme-guides.ts", "utf8");
const deepDivesSource = readFileSync("src/lib/scheme-deep-dives.ts", "utf8");
let applicationSource = readFileSync("src/lib/application-guide.ts", "utf8");
applicationSource = applicationSource.slice(0, applicationSource.indexOf('heading: "Bank account and payment checks"'));

const slugs = [...schemesSource.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
const words = (value) => value.match(/[\p{L}\p{N}₹'-]+/gu)?.length ?? 0;
const strings = (value) => [...value.matchAll(/`([^`]*)`|"([^"\n]+)"/g)].map((match) => match[1] || match[2]).join(" ");
const commonWords = words(strings(applicationSource));

function recordBlock(source, slug) {
  const start = source.indexOf(`"${slug}":`);
  const laterStarts = slugs.map((item) => source.indexOf(`\n  "${item}":`, start + 1)).filter((position) => position > start);
  return source.slice(start, laterStarts.length ? Math.min(...laterStarts) : source.length);
}

let failed = false;
for (const slug of slugs) {
  const schemeStart = schemesSource.indexOf(`slug: "${slug}"`);
  const nextScheme = schemesSource.indexOf("\n  {", schemeStart + 1);
  const schemeBlock = schemesSource.slice(schemeStart, nextScheme === -1 ? schemesSource.length : nextScheme);
  const estimatedVisibleWords = commonWords + words(strings(schemeBlock + recordBlock(guidesSource, slug) + recordBlock(deepDivesSource, slug))) + 90;
  console.log(`${slug}: ${estimatedVisibleWords} words`);
  if (estimatedVisibleWords < 1200) failed = true;
}

if (failed) {
  console.error("Every published scheme guide must contain at least 1,200 estimated visible words.");
  process.exit(1);
}

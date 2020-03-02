import path from "path";
import slugify from "@sindresorhus/slugify";

const regexp = /^data\/talks\/([^/]+)\/([^/]+)\.md$/;
const CURRENT_YEAR = new Date().getFullYear();

export function parseTalkFilename(filename: string) {
  const relativeFilename = path
    .relative(process.cwd(), filename)
    .replace(/\\/g, "/");

  const match = relativeFilename.match(regexp);
  if (!match) {
    throw new Error(`${relativeFilename} does not match ${regexp}`);
  }

  const [, _year, talk] = match;
  const year = Number.parseInt(_year);
  if (Number.isNaN(year) || year < 2016 || year > CURRENT_YEAR) {
    throw new Error(
      `${year} in ${relativeFilename} is not a valid year number`
    );
  }

  const slugifiedTalk = slugify(talk);
  if (slugifiedTalk !== talk) {
    throw new Error(
      `${talk} in ${relativeFilename} should be a slugified string like ${slugifiedTalk}`
    );
  }

  return {
    year,
    talk,
  };
}

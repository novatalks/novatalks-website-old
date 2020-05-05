// const vFileReport = require("vfile-reporter");
// const recommended = require("remark-preset-lint-recommended");
import fs from "fs-extra";
import yaml from "yaml";
import vfile from "vfile";
import remark from "remark";
// @ts-ignore
import html from "remark-html";
import frontmatter from "remark-frontmatter";
import { DateTime } from "luxon";
import { validateSpeaker, validateTalkWithoutSpeaker } from "./schemas";
import { parseTalkFilename } from "./parse-talk-filename";

const processor = remark()
  .use(html as any)
  .use(frontmatter, ["yaml"])
  .use(() => {
    return (ast, file) => {
      const node = ast.children[0];
      if (node != null && node.type === "yaml") {
        file.data = yaml.parse(node.value);
      } else {
        file.data = null;
      }
    };
  })
  .freeze();

function fromISO(string: string) {
  return DateTime.fromISO(string, { zone: "Portugal" });
}

function validateDateTime(string: string) {
  const dateTime = fromISO(string);

  if (!dateTime.isValid) {
    throw new Error(
      `${dateTime} is invalid. ${dateTime.invalidReason} ${dateTime.invalidExplanation}`
    );
  }
}

export async function processTalk(
  filename: string,
  contents: string,
  query?: {
    year: number;
    talk: string;
  }
) {
  const file = await processor().process(
    vfile({
      path: filename,
      contents,
    })
  );
  // console.log(vFileReport(file));

  const talk = validateTalkWithoutSpeaker(file.data);

  // Additional validation for date and time
  validateDateTime(`${talk.date}T${talk.startTime}`);
  validateDateTime(`${talk.date}T${talk.endTime}`);

  // See if year in url matches year in talk's frontmatter
  const { year } = query || parseTalkFilename(filename);
  const yearInData = fromISO(talk.date).year;
  if (yearInData !== year) {
    throw new Error(
      `Year in frontmatter (${yearInData}) does not match year in path (${year})`
    );
  }

  // Resolve and validate speakers
  const speakers = await Promise.all(
    talk.speakers.map(async s => {
      if (typeof s === "string") {
        const file = `data/speakers/${s}.yaml`;
        const yamlString = await fs.readFile(file, "utf8");
        return validateSpeaker(yaml.parse(yamlString), ` (in ${file})`);
      }
      return s;
    })
  );

  talk.speakers = speakers;

  return {
    data: talk,
    html: file.contents,
  };
}

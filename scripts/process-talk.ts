// const vFileReport = require("vfile-reporter");
// const recommended = require("remark-preset-lint-recommended");
import path from "path";
import fs from "fs-extra";
import yaml from "yaml";
import remark from "remark";
import externalLinks from "remark-external-links";
import html from "remark-html";
import frontmatter from "remark-frontmatter";
import { DateTime } from "luxon";
import { validateSpeaker, validateTalkWithoutSpeaker } from "./schemas";
import { parseTalkFilename } from "./parse-talk-filename";

const processor = remark()
  .use(externalLinks)
  .use(html)
  .use(frontmatter, ["yaml"])
  .use(() => (ast, file) => {
    const node = ast.children[0];
    if (node != null && node.type === "yaml") {
      file.data = yaml.parse(node.value);
    } else {
      file.data = null;
    }
  })
  .freeze();

function fromISO(string: string) {
  return DateTime.fromISO(string, { zone: "Portugal" });
}

function validateDateTime(dateTime: DateTime) {
  if (!dateTime.isValid) {
    throw new Error(
      `${dateTime} is invalid. ${dateTime.invalidReason} ${dateTime.invalidExplanation}`
    );
  }
}

const CWD = process.cwd();

export async function processTalk(
  filename: string,
  contents: string,
  query?: {
    year: number;
    talk: string;
  }
) {
  const relativeFilename = path.relative(CWD, filename);
  const file = await processor().process({
    path: filename,
    contents,
  });
  // console.log(vFileReport(file));

  const talk = validateTalkWithoutSpeaker(
    file.data,
    ` (in ${relativeFilename})`
  );

  const startTime = fromISO(`${talk.date}T${talk.startTime}`);
  const endTime = fromISO(`${talk.date}T${talk.endTime}`);

  // Additional validation for date and time
  validateDateTime(startTime);
  validateDateTime(endTime);

  if (endTime.toMillis() - startTime.toMillis() <= 0) {
    throw new Error(
      `The difference between the end and start times should be positive (in ${relativeFilename})`
    );
  }

  // See if year in url matches year in talk's frontmatter
  const { year } = query || parseTalkFilename(filename);
  const yearInData = startTime.year;
  if (yearInData !== year) {
    throw new Error(
      `Year in frontmatter (${yearInData}) does not match year in path (${year}) (in ${relativeFilename})`
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

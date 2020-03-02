// This will run at build time
import fs from "fs-extra";
import { getAllTalks } from "../scripts/get-all-talks";
import { processTalk } from "../scripts/process-talk";
import { AllTalks } from "./types";

export default async function() {
  const talks = await getAllTalks();
  const dependencies = talks.map(({ filename }) => filename);
  const processed = await Promise.all(
    talks.map(async ({ filename, query }) =>
      processTalk(filename, await fs.readFile(filename, "utf8"), query)
    )
  );

  const json: AllTalks = talks
    .map(({ href, as }, idx) => {
      const { title, date, startTime, endTime, image } = processed[idx].data;
      return {
        href,
        as,
        title,
        date,
        startTime,
        endTime,
        image,
      };
    })
    .sort(
      (a, b) =>
        +new Date(`${b.date}T${b.startTime}`) -
        +new Date(`${a.date}T${a.startTime}`)
    );
  // More recent first

  return {
    code: "module.exports = " + JSON.stringify(json),
    dependencies,
  };
}

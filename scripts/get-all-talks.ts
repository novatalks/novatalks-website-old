import glob from "fast-glob";
import { parseTalkFilename } from "./parse-talk-filename";

export async function getAllTalks() {
  const talks: string[] = await glob(["data/talks/*/*.md"], { absolute: true });
  return talks.map(filename => {
    const { year, talk } = parseTalkFilename(filename);
    return {
      filename,
      href: `/talk?year=${year}&talk=${talk}`,
      as: `/talk/${year}/${talk}`,
      query: { year, talk },
    };
  });
}

// Import only the types!
import type { Talk, Speaker } from "../scripts/schemas";

export type TalkAndHtml = {
  data: Talk;
  html: string;
};

export type MinimalTalk = {
  href: string;
  as: string;
  title: Talk["title"];
  date: Talk["date"];
  startTime: Talk["startTime"];
  endTime: Talk["endTime"];
  image: Talk["image"];
};

export type AllTalks = MinimalTalk[];

export { Talk, Speaker };

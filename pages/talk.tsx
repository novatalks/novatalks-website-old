import React from "react";
import { NextPage } from "next";
import TalkComponent from "../src/components/talk";
import { TalkAndHtml } from "../src/types";

const load = (
  year: string | string[] | undefined,
  talk: string | string[] | undefined
) => {
  return import(`Data/talks/${year}/${talk}.md`) as Promise<TalkAndHtml>;
};

const TalkPage: NextPage<TalkAndHtml> = ({ data, html }) => {
  return <TalkComponent data={data} html={html} />;
};

TalkPage.getInitialProps = ({ query }) => load(query.year, query.talk);

export default TalkPage;

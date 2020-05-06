import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import TalkComponent from "../../../src/components/talk";
import { TalkAndHtml } from "../../../src/types";
import { getAllTalks } from "../../../scripts/get-all-talks";

const load = (
  year: string | string[] | undefined,
  talk: string | string[] | undefined
) => {
  return import(`Data/talks/${year}/${talk}.md`) as Promise<TalkAndHtml>;
};

const TalkPage: NextPage<TalkAndHtml> = ({ data, html }) => {
  return <TalkComponent data={data} html={html} />;
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: TalkAndHtml;
}> => {
  const { data, html } = await load(context.params?.year, context.params?.talk);
  return {
    props: {
      data,
      html,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const talks = await getAllTalks();
  return {
    paths: talks.map(({ query }) => ({
      params: {
        year: query.year + "",
        talk: query.talk,
      },
    })),
    fallback: false,
  };
};

export default TalkPage;

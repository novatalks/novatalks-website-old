import React from "react";
import { NextPage, GetStaticProps } from "next";
import HomeComponent, { HomeProps } from "../src/components/home";
import { AllTalks } from "../src/types";

const HomePage: NextPage<HomeProps> = ({ talks }) => {
  return <HomeComponent talks={talks} />;
};

async function getAllTalks() {
  // At build time, "../src/get-talks.loader" will be converted into data, not code...
  const data = (await import("../src/get-talks.loader")).default;
  // ...so, this is safe.
  return (data as unknown) as AllTalks;
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: HomeProps;
}> => ({
  props: {
    talks: await getAllTalks(),
  },
});

export default HomePage;

import React from "react";
import Head from "next/head";
import { AllTalks } from "../../types";
import MainImage from "./main-image";
import About from "./about";
import Team from "./team";
import Talks from "./talks";

export type HomeProps = {
  talks: AllTalks;
};

export default ({ talks }: HomeProps) => {
  return (
    <>
      <Head>
        <title>NOVATalks</title>
      </Head>
      <MainImage />
      <div id="jump-sobre-nos" />
      <About />
      <div id="jump-equipa" />
      <Team />
      <div id="jump-talks" />
      <Talks talks={talks} />
    </>
  );
};

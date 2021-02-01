import React from "react";
import Head from "next/head";
import { AllTalks } from "../../types";
import MainImage from "./main-image";
import About from "./about";
import HelpUs from "./help-us";
import Partners from "./partners";
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
      <div id="jump-eventos" />
      <Talks talks={talks} />
      <div id="jump-parceiros" />
      <Partners />
      <div id="jump-equipa" />
      <Team />
      <HelpUs />
    </>
  );
};

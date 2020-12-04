// From https://github.com/mui-org/material-ui/tree/master/examples/nextjs
import React from "react";
import App from "next/app";
import Router from "next/router";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../src/components/app-bar";
import Footer from "../src/components/footer";
import theme from "../src/theme";
import redirects from "../src/redirects";

const homeUrlToSection = (url: string) => {
  switch (url) {
    case "/#sobre-nos":
      return document.getElementById("jump-sobre-nos");
    case "/#equipa":
      return document.getElementById("jump-equipa");
    case "/#eventos":
    case "/#talks":
      return document.getElementById("jump-eventos");
    case "/#parceiros":
      return document.getElementById("jump-parceiros");
    default:
      return null;
  }
};

const handleUrlChange = (url: string) => {
  const section = homeUrlToSection(url);
  if (section) {
    window.scrollTo(0, section.offsetTop - 90);
  } else {
    const redirect = redirects[url];
    if (redirect) {
      console.log("Redirecting to ", redirect);
      Router.push(redirect.href, redirect.as);
    }
  }
};

Router.events.on("routeChangeComplete", handleUrlChange);
Router.events.on("hashChangeComplete", handleUrlChange);

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);

    handleUrlChange(location.pathname + location.hash);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}

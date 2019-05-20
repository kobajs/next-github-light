import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import NProgress from "nprogress";
import Router from "next/router";
import NextSeo from 'next-seo';

import SEO from '../next-seo.config';

import configureStore from "../src/redux/configureStore";
import Header from "../src/components/Header";
import MainContent from "../src/components/MainContent";
import ThemeProvider from "../src/theme/ThemeProvider";

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider>
             <NextSeo config={SEO} />
            <Header {...pageProps} />
            <MainContent>
              <Component {...pageProps} />
            </MainContent>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);

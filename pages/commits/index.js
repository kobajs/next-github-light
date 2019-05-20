import React from "react";
import Head from "next/head";

import SearchForm from "../../src/components/SearchForm";
import Wrapper from "../../src/components/Wrapper";
import { ROUTES } from "../../src/router/routes";
import Commits from "./Commits";
import { getCommitsAction } from "../../src/redux/actions/commitsAction";

function Page({ query }) {
  const { user, repo } = query;

  return (
    <Wrapper>
      <Head>
        <title>Commits</title>
      </Head>
      <SearchForm />
      <Commits />
    </Wrapper>
  );
}

Page.getInitialProps = async ({ store, query }) => {
  await store.dispatch(getCommitsAction(query));

  return {
    query
  };
};

export default Page;

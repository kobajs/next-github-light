import React from "react";
import Head from "next/head";

import Introduction from "./Introduction";
import SearchForm from "../../src/components/SearchForm";
import { ROUTES } from "../../src/router/routes";
import Wrapper, { ContentWrapper } from "../../src/components/Wrapper";

function Page(props) {
  return (
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>
      <ContentWrapper>
        <Introduction />
      </ContentWrapper>
      <SearchForm />
    </Wrapper>
  );
}

// import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
// Page.getInitialProps = async ({ store, req }) => {
//   await store.dispatch(getRepositoriesAction());
// };

export default Page;

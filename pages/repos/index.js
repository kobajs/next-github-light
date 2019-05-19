import React from "react";

import { ROUTES } from "../../src/router/routes";
import SearchForm from "../../src/components/SearchForm";
import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
import Wrapper from "../../src/components/Wrapper";
import Repositories from "./Repositories";

function Page({ query }) {
  const {
    username
  } = query;

  return (
    <Wrapper>
      <SearchForm to={ROUTES.COMMITS} />
      <Repositories username={username} />
    </Wrapper>
  );
}

Page.getInitialProps = async ({ store, query, res }) => {
  await store.dispatch(getRepositoriesAction(query))

  return {
    query,
  }
};

export default Page;

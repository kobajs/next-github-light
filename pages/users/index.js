import React from "react";

import { ROUTES } from "../../src/router/routes";
import { searchUsersAction } from "../../src/redux/actions/usersActions";
import SearchForm from "../../src/components/SearchForm";
import UsersList from "./UsersList";
import { needsQuery } from "../../src/lib/router";
import Wrapper from "../../src/components/Wrapper";

function Page(props) {
  return (
    <Wrapper>
      <SearchForm to={ROUTES.USERS} />
      <UsersList />
    </Wrapper>
  );
}

Page.getInitialProps = async ({ store, query, res }) => {
  needsQuery(query, res)
  await store.dispatch(searchUsersAction(query));
};

export default Page;

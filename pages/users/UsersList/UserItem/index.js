import React from "react";
import Router from "next/router";

import * as Styled from "./UserItem.styles";
import { ROUTES } from "../../../../src/router/routes";

function UserItem({ avatar_url, login }) {
  function goToRepositories() {
    Router.push({
      pathname: ROUTES.REPOSITORIES,
      query: {
        user: login
      }
    });
  }
  return (
    <Styled.Card onClick={goToRepositories}>
      <Styled.UserItemContent>
        <Styled.Avatar src={avatar_url} />
        <Styled.Username>{login}</Styled.Username>
      </Styled.UserItemContent>
    </Styled.Card>
  );
}

export default UserItem;

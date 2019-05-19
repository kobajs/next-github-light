import React from "react";
import Router from "next/router";

import * as Styled from "./UserItem.styles";
import { ROUTES } from "../../../../src/router/routes";
import Card from "../../../../src/components/Card";

function UserItem({ avatar_url, login }) {
  function goToRepositories() {
    Router.push({
      pathname: ROUTES.REPOSITORIES,
      query: {
        username: login
      }
    });
  }
  return (
    <Card onClick={goToRepositories}>
      <Styled.UserItemContent>
        <Styled.Avatar src={avatar_url} />
        <Styled.Username>{login}</Styled.Username>
      </Styled.UserItemContent>
    </Card>
  );
}

export default UserItem;

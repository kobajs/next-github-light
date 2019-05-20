import React from "react";
import Router from "next/router";

import * as Styled from "./UserItem.styles";
import { ROUTES } from "../../../../src/router/routes";
import Card from "../../../../src/components/Card";
import Avatar from "../../../../src/components/Avatar";

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
    <Card onClick={goToRepositories}>
      <Styled.UserItemContent>
        <Avatar src={avatar_url} />
        <Styled.Username>{login}</Styled.Username>
      </Styled.UserItemContent>
    </Card>
  );
}

export default UserItem;

import React from "react";

import * as Styled from "./Introduction.styles";

function Introduction(props) {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        A lighter version of Github Search
      </Styled.Title>
      <Styled.Subtitle>
        This is an open source project that facilitates the search of public repositories and their commits
      </Styled.Subtitle>
    </Styled.Wrapper>
  );
}

export default Introduction;

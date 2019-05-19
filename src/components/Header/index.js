import React from "react";
import Link from "next/link";

import * as Styled from "./Header.styles";

function Header(props) {
  return (
    <Styled.Wrapper>
      <Link href="/">
        <Styled.LinkWrapper>
          <Styled.GitHubIcon />
          <Styled.Title>Github Light</Styled.Title>
        </Styled.LinkWrapper>
      </Link>
    </Styled.Wrapper>
  );
}

export default Header;

import React from "react";
import Link from 'next/link';

import GithubSvg from '../../../static/github.svg'

import * as Styled from "./Header.styles";

function Header(props) {
  console.log(props);
  return (
    <Styled.Wrapper>
      <Link style={{ fill: 'white'}} href="/">
        <a>
        <GithubSvg />
        Github Light
        </a>
      </Link>
      {/* <Styled.SearchWrapper>
        <Styled.SearchInput />
      </Styled.SearchWrapper> */}
    </Styled.Wrapper>
  );
}

export default Header;

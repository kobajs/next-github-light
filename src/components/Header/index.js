import React from "react";

import * as Styled from "./Header.styles";

function Header(props) {
  console.log(props)
  return (
    <Styled.Wrapper>
      <p> Helllo World</p>
    </Styled.Wrapper>
  );
}

export default Header;

import styled from "styled-components";

import DefaultCard from "../../../src/components/Card";
import DefaultAvatar from "../../../src/components/Avatar";
import { theme, bp } from "../../../src/lib/styled";

export const List = styled.div``;

export const Card = styled(DefaultCard)`
  display: flex;
  flex-direction: column;

  & p, h4 {
    margin: 0;
  }
`;

export const RightInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${theme('spacing.unit')}px;
`

export const Avatar = styled(DefaultAvatar)`
  width: 20px;
  height: 20px;
  margin-right: ${theme('spacing.unit')}px;
`
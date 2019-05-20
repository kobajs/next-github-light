import styled from "styled-components";

import DefaultCard from "../../../src/components/Card";
import { theme, bp } from "../../../src/lib/styled";

export const List = styled.div``;

export const Card = styled(DefaultCard)`
  display: flex;
  flex-wrap: wrap;
  padding: ${theme('spacing.unit')}px ${theme('spacing.double')}px;
`;

export const Title = styled.p`
  color: ${theme("palette.secondary.main")};

  :hover {
    text-decoration: underline;
  }
`;

export const Info = styled.div``;

export const Indicators = styled.div`
  margin: ${theme("spacing.double")}px ${theme("spacing.unit")}px 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  ${bp("sm")} {
    flex-direction: column;
    align-items: flex-end;
    margin: 0;
  }
`;

export const Indicator = styled.div`
  text-align: center;
  ${bp("sm")} {
    display: flex;
    width: 50px;
    justify-content: space-between;
    align-items: center;
  }
`;

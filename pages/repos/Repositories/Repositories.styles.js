import styled from "styled-components";

import DefaultCard from "../../../src/components/Card";
import { theme, bp } from "../../../src/lib/styled";

export const List = styled.div``;

export const Card = styled(DefaultCard)`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0;
`;

export const Title = styled.p`
  color: ${theme("palette.secondary.main")};
`;

export const Info = styled.div``;

export const Indicators = styled.div`
  margin: ${theme("spacing.quadruple")}px ${theme("spacing.double")}px
    ${theme("spacing.double")}px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  ${bp("sm")} {
    flex-direction: column;
    align-items: flex-end;
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

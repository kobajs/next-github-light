import styled from "styled-components";
import { bp, theme } from "../../lib/styled";

export default styled.div`
  padding: ${theme("spacing.double")}px;
  ${bp("xs")} {
    width: 100%;
  }
  ${bp("sm")} {
    width: 80%;
    margin: auto;
  }
`;

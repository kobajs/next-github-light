import styled from "styled-components";
import { theme } from "../../../../src/lib/styled";
import Card from "../../../../src/components/Card";

export const Avatar = styled.img.attrs({
  width: 60,
  height: 60
})`
  border-radius: 50%;
  margin-right: ${theme("spacing.double")}px;
`;

export const Username = styled.p``;

export const UserItemContent = styled.div`
  display: flex;
  align-items: center;
`
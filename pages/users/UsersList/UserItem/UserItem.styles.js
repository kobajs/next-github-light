import styled from "styled-components";

import DefaultAvatar from "../../../../src/components/Avatar";
import DefaultCard from "../../../../src/components/Card";
import { theme, bp } from "../../../../src/lib/styled";

export const Username = styled.p``;

export const UserItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(DefaultCard)`
  flex: initial;
  width: 200px;
`;

export const Avatar = styled(DefaultAvatar)`
  margin-bottom: ${theme`spacing.unit`}px;
`;

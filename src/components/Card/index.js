import React from 'react'
import styled from 'styled-components'
import { theme } from '../../lib/styled';

export default styled.div`
  flex: 1;
  display: block;
  padding: ${theme("spacing.double")}px;
  margin: ${theme("spacing.double")}px;
  border: 2px solid ${theme("palette.primary.light")};
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: ${theme("palette.primary.light")};
    transition: background-color 0.3s ease;
    -webkit-box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.75);
  }
`;
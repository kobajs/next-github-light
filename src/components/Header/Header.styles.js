import React from 'react';
import styled from 'styled-components'

import { theme, bp } from '../../lib/styled';

import GithubSvg from "../../../static/github.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme('spacing.appBar')}px;
  background-color: ${theme('palette.primary.main')};
  color: ${theme('palette.white')};
`
export const LinkWrapper = styled.a`
  fill: white;
  display: flex;
  align-items: center;
`

export const GitHubIcon = styled(GithubSvg)`
  margin: 0 ${theme('spacing.double')}px;

  ${bp('sm')} {
    position: absolute;
    left: 0;
  }
`

export const Title = styled.h1`
  ${bp('xs')} {
    display: none;
  }
  ${bp('sm')} {
    display: block;
  }
`
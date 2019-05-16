import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createMuiTheme,
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';

import { palette } from './default/palette';
import { typography } from './default/typography';
import { overrides } from './default/overrides';

const styleNode = document.createComment("jss-insertion-point");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point',
});

const defaultTheme = createMuiTheme({
  palette,
  typography,
  overrides,
});

const ThemeProvider = ({ children, theme = defaultTheme }) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </JssProvider>
  );
};

export default ThemeProvider;

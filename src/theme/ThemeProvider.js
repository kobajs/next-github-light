import React from "react";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";

import defaultTheme from "./default";

export default function({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
}

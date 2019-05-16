import React from "react";
import renderer from "react-test-renderer";

import Snackbar from "..";
import { snackbarVariants } from "../snackbarVariants";

const props = {
  classes: {},
  open: false,
  message: 'SnackbarTest',
  variant: snackbarVariants.common,
  onClose: jest.fn(),
  width: 'xs',
};

test("Snackbar renders correctly", () => {
  const tree = renderer.create(<Snackbar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

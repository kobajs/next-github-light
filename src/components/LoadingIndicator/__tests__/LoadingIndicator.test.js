import React from "react";
import renderer from "react-test-renderer";

import LoadingIndicator from "..";

const props = {
  message: "Is loading",
  isFixed: true
};

test("LoadingIndicator renders correctly", () => {
  const tree = renderer.create(<LoadingIndicator {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

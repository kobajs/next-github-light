import React from "react";

import { getRepositoriesAction } from "../src/redux/actions/repositoriesActions";
import Repositories from "../src/components/Repositories";

function Page(props) {
  return (
    <div>
      <Repositories />
    </div>
  );
}

Page.getInitialProps = async ({ store, req }) => {
  await store.dispatch(getRepositoriesAction())
}

export default Page;

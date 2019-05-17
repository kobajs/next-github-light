import React from "react";
import { connect } from "react-redux";
import { getRepositoriesAction } from "../src/redux/actions/repositoriesActions";

function Page(props) {
  return (
    <div>
      <p>oi</p>
    </div>
  );
}

Page.getInitialProps = ({ store, req }) => {
  store.dispatch(getRepositoriesAction())
}

export default connect(state => state)(Page);

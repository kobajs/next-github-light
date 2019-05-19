import React, { useState } from "react";
import Router from "next/router";
import { connect } from "react-redux";

import * as Styled from "./SearchForm.styles";
import { setSearchAction } from "../../redux/actions/searchActions";

function SearchForm({ to, search, setSearchAction }) {
  const [formValues, setFormValues] = useState({
    input: search.input
  });

  function onSubmit(e) {
    e.preventDefault();

    setSearchAction(formValues)

    Router.push({
      pathname: to,
      query: {
        search: formValues.input,
      }
    });
  }

  function handleSearchChange(e) {
    setFormValues({
      input: e.target.value
    });
  }

  return (
    <Styled.FormWrapper onSubmit={onSubmit}>
      <Styled.SearchInput
        name="input"
        value={formValues.input}
        onChange={handleSearchChange}
      />
    </Styled.FormWrapper>
  );
}

const mapStateToProps = ({ search }) => ({ search });
const mapDispatchToProps = { setSearchAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

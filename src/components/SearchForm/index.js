import React, { useState } from "react";
import Router from "next/router";
import { connect } from "react-redux";

import * as Styled from "./SearchForm.styles";

import { setSearchAction } from "../../redux/actions/searchActions";
import RadioButton from "../RadioButton";
import { ROUTES } from "../../router/routes";

function SearchForm({ search, setSearchAction }) {
  const [formValues, setFormValues] = useState({
    input: search.input,
    to: ROUTES.USERS,
  });

  function onSubmit(e) {
    e.preventDefault();

    setSearchAction(formValues);

    Router.push({
      pathname: formValues.to,
      query: {
        search: formValues.input
      }
    });
  }

  function handleSearchChange(e) {
    setFormValues({
      ...formValues,
      input: e.target.value
    });
  }

  function handleForChange(e) {
    setFormValues({
      ...formValues,
      to: e.target.value
    });
  }

  return (
    <Styled.FormWrapper onSubmit={onSubmit}>
      <Styled.Buttons onChange={handleForChange}>
        <RadioButton name="to" value={ROUTES.USERS}>
          Users
        </RadioButton>
        <RadioButton name="to" value={ROUTES.REPOSITORIES}>
          Repositories
        </RadioButton>
        <RadioButton name="to" value={ROUTES.COMMITS}>
          Commits
        </RadioButton>
      </Styled.Buttons>
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

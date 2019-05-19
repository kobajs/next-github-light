import { SET_SEARCH } from "../types/searchTypes";

function setSearchCreator(payload) {
  return { type: SET_SEARCH, payload };
}

export const setSearchAction = formValues => async dispatch => {
  dispatch(setSearchCreator({ search: formValues }))
};

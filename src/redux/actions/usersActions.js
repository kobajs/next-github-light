import fetch from "isomorphic-unfetch";
import qs from "qs";
import { SEARCH_USERS } from "../types/usersTypes";
import usersFixture from "../../__fixtures__/users.json";

function searchUsersCreator(payload) {
  return { type: SEARCH_USERS, payload };
}

export const searchUsersAction = formValues => async dispatch => {
  const { search } = formValues;

  const queryParams = qs.stringify(
    {
      q: `${search}+in:login`,
      type: "users"
    },
    { encode: false }
  );

  return new Promise(res => {
    dispatch(searchUsersCreator({ users: usersFixture }));
    res();
  });
  // return fetch('https://api.github.com/search?' + queryParams)
  //   .then(res => res.json())
  //   .then(data => dispatch(searchUsersCreator({data})))
};

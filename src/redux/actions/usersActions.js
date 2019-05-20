import fetch from "isomorphic-unfetch";
import { SEARCH_USERS } from "../types/usersTypes";
import usersFixture from "../../__fixtures__/users.json";

function searchUsersCreator(payload) {
  return { type: SEARCH_USERS, payload };
}

export const searchUsersAction = formValues => async dispatch => {
  const { search } = formValues;

  // return new Promise(res => {
  //   dispatch(searchUsersCreator({ data: usersFixture }));
  //   res();
  // });
  return fetch(
    `https://api.github.com/search/users?q=${search}+in:login+type:users`
  )
    .then(resp => resp.json())
    .then(data => {
      return dispatch(searchUsersCreator({ data }));
    });
};

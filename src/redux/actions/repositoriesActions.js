import fetch from "isomorphic-unfetch";
import { GET_REPOSITORIES } from "../types/repositoriesTypes";
import repositoriesFixture from "../../__fixtures__/repositories.json";

function getRepositoriesCreator(payload) {
  return { type: GET_REPOSITORIES, payload };
}

export const getRepositoriesAction = (query) => async dispatch => {
  const {
    search,
    user,
  } = query;

  // return new Promise(res => {
  //   dispatch(getRepositoriesCreator({ data: repositoriesFixture }));
  //   res()
  // });

  if (search) {
    return fetch(`https://api.github.com/search/repositories?q=${search}+in:name`)
    .then(res => res.json())
    .then(data => dispatch(getRepositoriesCreator({ data })))
  }

  return fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .then(data => dispatch(getRepositoriesCreator({ data: { items: data } })))
};

import fetch from "isomorphic-unfetch";
import { GET_REPOSITORIES } from "../types/repositoriesTypes";
import repositoriesFixture from "../../__fixtures__/repositories.json";

function getRepositoriesCreator(payload) {
  return { type: GET_REPOSITORIES, payload };
}

export const getRepositoriesAction = (query) => async dispatch => {
  const {
    username,
  } = query;
  return new Promise(res => {
    dispatch(getRepositoriesCreator({ data: repositoriesFixture }));
    res()
  });
  // return fetch(`https://api.github.com/users/${username}/repos`)
  //   .then(res => res.json())
  //   .then(data => dispatch(getRepositoriesCreator({data})))
};

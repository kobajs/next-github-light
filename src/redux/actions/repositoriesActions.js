import fetch from "isomorphic-unfetch";
import { GET_REPOSITORIES } from "../types/repositoriesTypes";
import repositoriesFixture from "../../__fixtures__/repositories.json";

function getRepositoriesCreator(payload) {
  return { type: GET_REPOSITORIES, payload };
}

export const getRepositoriesAction = () => async dispatch => {
  return new Promise(res => {
    dispatch(getRepositoriesCreator({ data: repositoriesFixture }));
    res()
  });
  // return fetch('https://api.github.com/users/yuritk/repos')
  //   .then(res => res.json())
  //   .then(data => dispatch(getRepositoriesCreator({data})))
};

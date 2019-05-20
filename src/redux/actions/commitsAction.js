import fetch from "isomorphic-unfetch";
import { GET_COMMITS } from "../types/commitsTypes";
import commitsFixture from "../../__fixtures__/commits.json";

function getCommitsCreator(payload) {
  return { type: GET_COMMITS, payload };
}

export const getCommitsAction = (query) => async dispatch => {
  const {
    user,
    repo,
  } = query;
  return new Promise(res => {
    dispatch(getCommitsCreator({ data: commitsFixture }));
    res()
  });
  // return fetch(`https://api.github.com/users/${user}/repos`)
  //   .then(res => res.json())
  //   .then(data => dispatch(getCommitsCreator({data})))
};

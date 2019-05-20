import fetch from "isomorphic-unfetch";
import { GET_COMMITS } from "../types/commitsTypes";
import commitsFixture from "../../__fixtures__/commits.json";

function getCommitsCreator(payload) {
  return { type: GET_COMMITS, payload };
}

export const getCommitsAction = query => async dispatch => {
  const { user, repo, search } = query;
  // return new Promise(res => {
  //   dispatch(getCommitsCreator({ data: commitsFixture }));
  //   res()
  // });

  if (search) {
    return fetch(`https://api.github.com/search/commits?q=${search}`, {
      headers: {
        Accept: "application/vnd.github.cloak-preview"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(getCommitsCreator({ data })));
  }

  return fetch(`https://api.github.com/repos/${user}/${repo}/commits`)
    .then(res => res.json())
    .then(data => dispatch(getCommitsCreator({ data: { items: data } })));
};

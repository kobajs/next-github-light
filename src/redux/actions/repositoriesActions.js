import fetch from 'isomorphic-unfetch'
import { GET_REPOSITORIES } from "../types/repositoriesTypes";


function getRepositoriesCreator(payload) {
  return { type: GET_REPOSITORIES, payload };
}

export const getRepositoriesAction = () => async (dispatch) => {
  const res = await fetch('https://api.github.com/users/yuritk/repos')
  const json = await res.json();
  dispatch(getRepositoriesCreator({json}));
}
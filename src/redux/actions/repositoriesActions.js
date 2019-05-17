import fetch from 'isomorphic-unfetch'
import { GET_REPOSITORIES } from "../types/repositoriesTypes";


function getRepositoriesCreator(payload) {
  return { type: GET_REPOSITORIES, payload };
}

export const getRepositoriesAction = () => async (dispatch) => {
  return fetch('https://api.github.com/users/yuritk/repos')
    .then(res => res.json())
    .then(data => dispatch(getRepositoriesCreator({data})))
}
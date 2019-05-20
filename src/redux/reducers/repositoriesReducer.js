import { GET_REPOSITORIES } from "../types/repositoriesTypes";

const initialState = [];

export default function repositoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_REPOSITORIES:
      return action.payload.data;
    default:
      return state;
  }
}

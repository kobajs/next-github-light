import { GET_REPOSITORIES } from "../types/repositoriesTypes";

const initialState = {
  data: [],
};

export default function repositoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_REPOSITORIES:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
}

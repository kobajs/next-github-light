import { SET_SEARCH } from "../types/searchTypes";

const initialState = {
  input: '',
};

export default function repositoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...action.payload.search
      };
    default:
      return state;
  }
}

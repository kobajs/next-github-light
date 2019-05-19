import { SEARCH_USERS } from "../types/usersTypes";

const initialState = {};

export default function repositoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...action.payload.users
      };
    default:
      return state;
  }
}

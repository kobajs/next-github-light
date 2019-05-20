import { GET_COMMITS } from "../types/commitsTypes";

const initialState = []

export default function commitsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_COMMITS:
      return action.payload.data;
    default:
      return state;
  }
}

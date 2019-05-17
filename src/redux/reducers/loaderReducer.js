import { SET_LOADER, CLEAN_LOADER } from '../types/loaderTypes';

const initialState = {
  isLoading: false,
  message: '',
};

function loaderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADER:
      return {
        isLoading: true,
        message: action.payload.message || '',
      };
    case CLEAN_LOADER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export default loaderReducer;

import { combineReducers } from 'redux';

import snackbarReducer from './reducers/snackbarReducer';
import loaderReducer from './reducers/loaderReducer';

export function createRootReducer() {
  return combineReducers({
    snackbar: snackbarReducer,
    loader: loaderReducer,
  });
}

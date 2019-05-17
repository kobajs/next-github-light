import { combineReducers } from 'redux';

import snackbarReducer from './reducers/snackbarReducer';
import loaderReducer from './reducers/loaderReducer';
import repositoriesReducer from './reducers/repositoriesReducer';

export function createRootReducer() {
  return combineReducers({
    snackbar: snackbarReducer,
    loader: loaderReducer,
    repositories: repositoriesReducer,
  });
}

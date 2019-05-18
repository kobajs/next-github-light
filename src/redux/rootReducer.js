import { combineReducers } from 'redux';

import loaderReducer from './reducers/loaderReducer';
import repositoriesReducer from './reducers/repositoriesReducer';

export function createRootReducer() {
  return combineReducers({
    loader: loaderReducer,
    repositories: repositoriesReducer,
  });
}

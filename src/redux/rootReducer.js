import { combineReducers } from 'redux';

import loaderReducer from './reducers/loaderReducer';
import repositoriesReducer from './reducers/repositoriesReducer';
import usersReducer from './reducers/usersReducer';
import searchReducer from './reducers/searchReducer';

export function createRootReducer() {
  return combineReducers({
    loader: loaderReducer,
    repositories: repositoriesReducer,
    users: usersReducer,
    search: searchReducer,
  });
}

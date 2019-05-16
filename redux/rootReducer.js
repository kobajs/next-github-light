import { persistCombineReducers } from 'redux-persist';
import { connectRouter } from 'connected-react-router';

import StorageEngine from './StorageEngine';

import snackbarReducer from './reducers/snackbarReducer';
import loaderReducer from './reducers/loaderReducer';

const config = {
  key: 'root',
  storage: StorageEngine,
  whitelist: ['auth', 'checkin', 'shipmentsFilter'],
  timeout: 0,
};

export function createRootReducer(history) {
  return persistCombineReducers(config, {
    router: connectRouter(history),
    snackbar: snackbarReducer,
    loader: loaderReducer,
  });
}

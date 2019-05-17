import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createRootReducer } from './rootReducer';

export default function configureStore(initialState = undefined, options) {
  return createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}

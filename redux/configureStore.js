import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createRootReducer } from './rootReducer';

export const history = createBrowserHistory();

export default function configureStore() {
  return createStore(
    createRootReducer(history),
    undefined,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk, logger)),
  );
}

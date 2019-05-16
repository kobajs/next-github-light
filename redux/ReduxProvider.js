import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from 'redux/configureStore';
import LoadingIndicator from '../components/LoadingIndicator';

export const store = configureStore();

export const persistor = persistStore(store);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;

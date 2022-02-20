import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import store from 'src/core/store';

export const ReduxProvider: FunctionComponent = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
import { Provider } from 'react-redux';
import React, { FunctionComponent } from 'react';
import { Store } from 'src/core/store';

export const ReduxProvider: FunctionComponent = ({ children }) => {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  );
}

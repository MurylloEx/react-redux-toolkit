import React, { FunctionComponent } from 'react';
import { ReduxProvider } from './Redux';

export const CoreProvider: FunctionComponent = ({ children }) => {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  );
}
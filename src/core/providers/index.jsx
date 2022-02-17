import React from 'react';
import { ReduxProvider } from './redux.provider';

export const CoreProvider = ({ children }) => {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  );
}
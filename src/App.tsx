import React from 'react';
import { Todos } from 'src/pages';
import { CoreProvider } from 'src/core/providers';

export const App = () => (
  <CoreProvider>
    <Todos />
  </CoreProvider>
);

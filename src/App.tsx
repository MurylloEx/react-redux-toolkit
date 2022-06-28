import React from 'react';
import { TodosPage } from 'src/pages';
import { CoreProvider } from 'src/core/providers';

export const App = () => (
  <CoreProvider>
    <TodosPage />
  </CoreProvider>
);

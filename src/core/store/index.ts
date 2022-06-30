import { configureStore } from '@reduxjs/toolkit';
import { TodoSlice } from './slices';

/**
 * Export the Store object containing all state data
 */
export const Store = configureStore({
  reducer: {
    Todos: TodoSlice.Reducers
  },
});

/**
 * Export all slices from application
 */
export * from './slices';

/**
 * Export all Models from application
 */
export * from './models';

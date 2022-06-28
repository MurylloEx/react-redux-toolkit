import { combineReducers } from 'redux';
import { TodoHandlers } from './Todos';

/**
 * Combine all reducers from Ducks and export as a single reducer
 */
export const DuckReducer = combineReducers({
  Todos: TodoHandlers.Reducers
});

/**
 * All handlers
 */
export * from './Todos';

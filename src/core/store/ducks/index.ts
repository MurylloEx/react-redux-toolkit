import { combineReducers } from 'redux';
import { TodoDuck } from './todos';

/**
 * Combine all reducers from Ducks and export as a single reducer
 */
export const DuckReducer = combineReducers({
  Todos: TodoDuck.Reducers
});

/**
 * Export all ducks
 */
export * from './todos';

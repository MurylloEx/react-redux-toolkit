import { combineReducers } from 'redux';
import { TodoHandlers } from './Todos';

export default combineReducers({
  Todos: TodoHandlers.Reducers
});

export * from 'src/core/store/interfaces';

/**
 * All stored models
 */
export * from './Todos';
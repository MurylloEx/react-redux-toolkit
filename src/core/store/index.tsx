import { createStore } from 'redux';
import reducers, { Todo } from './ducks';

export interface StoreType {
  Todos: Todo[];
}

export * from './ducks';
export default createStore(reducers);
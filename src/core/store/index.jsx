import { createStore } from 'redux';
import reducers from './ducks';

export * from './ducks';
export default createStore(reducers);

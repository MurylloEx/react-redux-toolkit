import { createStore } from 'redux';
import { DuckReducer } from './ducks';
import { StoreType, ActionType } from './models';

/**
 * Export the Store object containing all state data
 */
export const Store = createStore<StoreType, ActionType, any, any>(DuckReducer);

/**
 * Export all Ducks from application
 */
export * from './ducks';

/**
 * Export all Models from application
 */
export * from './models';

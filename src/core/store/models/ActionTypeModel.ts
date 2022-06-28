import { Action } from 'redux';

export interface ActionType<T = string, D = any> extends Action<T> {
  payload: D;
}

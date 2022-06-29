import { ActionType } from 'src/core/store/models';
import { Actions } from './Actions';
import { Reducers } from './Handlers';

/**
 * Define what exported actions can be used in App
 */
export type TodoActions = {
 create(text: string): ActionType<string, string>;
 toggle(id: number): ActionType<string, number>;
 remove(id: number): ActionType<string, number>;
}

export const TodoDuck = {
  Reducers,
  Actions
};

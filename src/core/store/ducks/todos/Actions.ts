import { ActionType, Todo } from 'src/core/store/models';

/**
 * Action Creators
 */
const CreateTodoAction = (text: string) => 
  ({ type: 'CREATE_TODO', payload: text });

const ToggleTodoAction = (id: number) => 
  ({ type: 'TOGGLE_TODO', payload: id });

const RemoveTodoAction = (id: number) => 
  ({ type: 'REMOVE_TODO', payload: id });

/**
 * Define what exported actions can be used in App
 */
export type TodoActions = {
  create(text: string): ActionType<string, string>;
  toggle(id: number): ActionType<string, number>;
  remove(id: number): ActionType<string, number>;
}

/**
 * Export usable "Todo" actions
 */
export const Actions: TodoActions = {
  create: CreateTodoAction, 
  toggle: ToggleTodoAction, 
  remove: RemoveTodoAction
};

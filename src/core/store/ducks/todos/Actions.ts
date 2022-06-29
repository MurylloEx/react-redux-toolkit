import { TodoActions } from 'src/core/store/ducks/todos';

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
 * Export usable "Todo" actions
 */
export const Actions: TodoActions = {
  create: CreateTodoAction, 
  toggle: ToggleTodoAction, 
  remove: RemoveTodoAction
};

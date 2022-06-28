import { ActionType, Todo } from 'src/core/store/models';

/**
 * Initial value of entity state
 */
const INITIAL_STATE: Todo[] = [];

/**
 * Handlers / Reducers
 */
function CreateTodo(state: Todo[], action: ActionType<string, string>) {
  return [
    ...state,
    { 
      id: Math.ceil(10000 * Math.random()), 
      text: action.payload, 
      complete: false 
    }
  ];
}

function ToggleTodo(state: Todo[], action: ActionType<string, number>) {
  return state.map((todo) => {
    return (todo.id === action.payload) ? { ...todo, complete: !todo.complete } : todo;
  });
}

function RemoveTodo(state: Todo[], action: ActionType<string, number>) {
  return state.filter(todo => todo.id !== action.payload);
}

function Reducers(state: Todo[] = INITIAL_STATE, action: ActionType<string>) {
  const Handler = {
    'CREATE_TODO': CreateTodo,
    'TOGGLE_TODO': ToggleTodo,
    'REMOVE_TODO': RemoveTodo
  } [action.type];

  return !!Handler ? Handler(state, action) : state;
}

/**
 * Action Creators
 */
const CreateTodoAction = (text: string) => 
  ({ type: 'CREATE_TODO', payload: text });

const ToggleTodoAction = (id: number) => 
  ({ type: 'TOGGLE_TODO', payload: id });

const RemoveTodoAction = (id: number) => 
  ({ type: 'REMOVE_TODO', payload: id });

export type TodoActions = {
  create(text: string): ActionType<string, string>;
  toggle(id: number): ActionType<string, number>;
  remove(id: number): ActionType<string, number>;
}

const Actions: TodoActions = {
  create: CreateTodoAction, 
  toggle: ToggleTodoAction, 
  remove: RemoveTodoAction
};

export const TodoHandlers = {
  Reducers,
  Actions
};

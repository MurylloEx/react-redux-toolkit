import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from 'src/core/store/models';

/**
 * Define what exported actions can be used in App
 */
export type TodoActions = {
  create(text: string): PayloadAction<string, string>;
  toggle(id: number): PayloadAction<number, string>;
  remove(id: number): PayloadAction<number, string>;
}

/**
 * Define a type for the slice state
 */
export type TodoState = Todo[];

/**
 * Initial value of entity state
 */
const INITIAL_STATE: TodoState = [];

/**
 * Handlers
 */
function CreateTodo(state: TodoState, action: PayloadAction<string, string>) {
  return [
    ...state,
    {
      id: Math.ceil(10000 * Math.random()),
      text: action.payload,
      complete: false
    }
  ];
}

function ToggleTodo(state: TodoState, action: PayloadAction<number, string>) {
  return state.map((todo) => {
    return (todo.id === action.payload) ? { ...todo, complete: !todo.complete } : todo;
  });
}

function RemoveTodo(state: TodoState, action: PayloadAction<number, string>) {
  return state.filter(todo => todo.id !== action.payload);
}

const Slice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    create: CreateTodo,
    toggle: ToggleTodo,
    remove: RemoveTodo
  },
});

export const TodoSlice = {
  Reducers: Slice.reducer,
  Actions: Slice.actions
};

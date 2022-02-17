import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addTodo: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"]
});

/**
 * Handlers
 */
const INITIAL_STATE = [];

function add(state = INITIAL_STATE, action){
  return [
    ...state,
    { 
      id: Math.ceil(10000 * Math.random()), 
      text: action.text, 
      complete: false 
    }
  ];
}

function toggle(state = INITIAL_STATE, action){
  return state.map((todo) => {
    return (todo.id === action.id) ? { ...todo, complete: !todo.complete } : todo;
  });
}

function remove(state = INITIAL_STATE, action) {
  return state.filter(todo => todo.id !== action.id);
}

/**
 * Reducer
 */
export const TodoReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove
});

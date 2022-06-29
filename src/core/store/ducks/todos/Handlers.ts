import { ActionType, Todo } from 'src/core/store/models';

/**
 * Initial value of entity state
 */
const INITIAL_STATE: Todo[] = [];

/**
 * Handlers
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

/**
 * Reducer of entity
 */
export function Reducers(state: Todo[] = INITIAL_STATE, action: ActionType<string>) {
  const Handler = {
    'CREATE_TODO': CreateTodo,
    'TOGGLE_TODO': ToggleTodo,
    'REMOVE_TODO': RemoveTodo
  }[action.type];

  return !!Handler ? Handler(state, action) : state;
}

import { combineReducers } from "redux";
import { TodoReducer } from "./todos";

export * from "./todos";

export default combineReducers({
  TodoReducer
});

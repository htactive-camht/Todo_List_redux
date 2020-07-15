import ListTodo from "./list_todo";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  listTask: ListTodo,
});

export { allReducers };

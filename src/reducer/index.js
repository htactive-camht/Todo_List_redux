import ListTodo from "./list_todo";
import { combineReducers } from "redux";
import TodoReduce from './active_reducer'
 
const allReducers = combineReducers({
  listTask: ListTodo,
  todo: TodoReduce
});

export default allReducers;

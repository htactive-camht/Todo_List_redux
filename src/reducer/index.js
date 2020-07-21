
import { combineReducers } from "redux";
import TodoReduce from './active_reducer'
 
const allReducers = combineReducers({
 
  todo: TodoReduce
});

export default allReducers;

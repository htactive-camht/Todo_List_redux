import {
  SELECT_TASK,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  CHECK_TASK,
} from "../actions/actionType";
// import store from '../app/store'
// import ListTodo from './list_todo';

const d = new Date();
const n = d.toISOString();
const todoList = {
  todoArr: [
    
  ],
};
export default function TodoReduce(state = todoList, action) {
  console.log("đã vào Reduce");
  switch (action.type) {
    case SELECT_TASK:
      return { ...state };

    case ADD_TASK:
      console.log("ket qua trong reduce", action.payload);
      return {
        ...state,
        todoArr: [...state.todoArr, action.payload],
      };

    case DELETE_TASK:
      console.log(" delete", action.payload);
      return {
        ...state,
        todoArr: state.todoArr.filter((e, i) => e.id !== action.payload),
      };

    case UPDATE_TASK:
      const { payload } = action;
      console.log("payload Edit:", payload.text);
      return {
        ...state,
        todoArr: state.todoArr.map((task, index) =>
        task.id === payload.id ? { ...task, name: payload.text } : task
        ),
      };

      case CHECK_TASK:
        
      return {
        ...state,
        todoArr: state.todoArr.map((task, index) =>
        task.id === action.payload.id ?{ ...task, completed: !task.completed } : task
        ),
      };

    default:
      return state;
  }
}

import {
  SELECT_TASK,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../actions/actionType";
// import store from '../app/store'
// import ListTodo from './list_todo';

const d = new Date();
const n = d.toISOString();
const todoList = {
  todoArr: [
    { name: "Task 1", date: n, color: "blue", isUpdate: false },
    { name: "Task 2", date: n, color: "red", isUpdate: false },
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
        todoArr: state.todoArr.filter((e, i) => i !== action.payload),
      };

    case UPDATE_TASK:
      const { payload } = action;
      console.log("payload Edit:", payload.text);
      return {
        ...state,
        todoArr: state.todoArr.map((task, index) =>
          index === payload.id ? { ...task, name: payload.text } : task
        )
      };

    default:
      return state;
  }
}

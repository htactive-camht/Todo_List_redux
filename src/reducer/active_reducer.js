import {
  SELECT_TASK,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../actions/actionType";
import store from '../app/store'
// import ListTodo from './list_todo';

const todoList = {
  todoArr: [{ name: "Task 1" }, { name: "Task 2" }],
  error: [],
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
            return state.map((item, id) => {
                if (payload.id === id) {
                    return { ...state, todoArr: payload.text }
                }
                return item
            })
    default:
      return state;
  }
}

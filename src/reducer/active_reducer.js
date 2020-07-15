import {SELECT_TASK, ADD_TASK, DELETE_TASK} from '../actions/actionType';
// import ListTodo from './list_todo';

const todoList = {
    todoArr: [
        {name: "cam bà điên"},
        {name: "quyit khung"}
    ],
    error: []
}
export default function TodoReduce (state = todoList , action) {
        console.log("đã vào Reduce");
        switch (action.type){
            case SELECT_TASK:
                return {...state};

                case ADD_TASK:
                    console.log("ket qua trong reduce", action.payload);
                    return {
                        ...state,
                        todoArr: [ ...state.todoArr, action.payload] 
                    }

                    case DELETE_TASK: 
                    console.log(" delete", action.payload);
                    return {
                        ...state,
                        todoArr: state.todoArr.filter((e, i) => i !== action.payload)

                    }
            default:
                return state;
        }
       
}
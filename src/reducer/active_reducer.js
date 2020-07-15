import {SELECT_TASK, ADD_TASK} from '../actions/actionType';
import ListTodo from './list_todo';

export default (state = ListTodo , action) => {
        switch (action.type){
            case SELECT_TASK:
                return {...state};

                case ADD_TASK:
                    return {
                        ...state,
                        ListTodo: [ ...state.ListTodo,{
                            id: Math.random(),
                            value: action.payload,
                        }
                      ] 
                    }
            default:
                return state;
        }
       
}
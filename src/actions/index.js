import {SELECT_TASK, ADD_TASK, DELETE_TASK} from './actionType';

export const selectTaskList = (task) => {
    return {
        type: SELECT_TASK,
        payload: task
    };
    
}

export const addTaskList = (task) => {
    console.log("đã vào action", task);
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}
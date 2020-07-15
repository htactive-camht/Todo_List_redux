import {SELECT_TASK, ADD_TASK} from './actionType';

export const selectTaskList = (task) => {
    return {
        type: SELECT_TASK,
        payload: task
    };
    
}

export const addTaskList = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}
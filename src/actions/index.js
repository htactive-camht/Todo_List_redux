import {SELECT_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK} from './actionType';

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
      console.log('deleteTask íd',id);
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const updateTask = (task, id) => {
    console.log('update task', task, id);
    return {
        type: UPDATE_TASK,
        payload: {
            id,
            task
        }
    }
}
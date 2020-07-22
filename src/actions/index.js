import {SELECT_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK} from './actionType';

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
 
export const checkTask = (id) => {
    console.log('check Task',id);
  return {
      type: CHECK_TASK,
      payload: id
  }
}
 export const updateTask = (id, text) => {
     console.log("action Log:", text);
    return ({
        type: UPDATE_TASK,
        payload: {
            id:id,
            text:text
        }
    })

}
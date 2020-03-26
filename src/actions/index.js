import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from "../type"

export const addTasks = (text) => {
    return {
        type : ADD_TASK,
        payload: {
            id: new Date().getTime(),
            text
        }
    }
}

export const removeTasks = (id) => {
    return {
        type : REMOVE_TASK,
        payload : { id }
    }
}

export const changeTasks = (id,text) => {
    return {
        type : CHANGE_TASK,
        payload : { id , text } 
    }
}


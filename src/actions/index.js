import { ADD_TASK, REMOVE_TASK } from "../type"

export const addTasks = (text) => {
    return {
        type : ADD_TASK,
        text
    }
}

export const removeReducer = (id) => {
    return {
        type : REMOVE_TASK,
        payload : {id}
    }
}


import { ADD_TASK, REMOVE_TASK } from "../type"

const InitialState = () => {
    return {
        type : 'DEFAULT_TASK',
        payload : {
            id : new Date().toDateString(),
            text: 'Test'
        }
    }
}

export const itemReducer = (state = InitialState ,action) => {
    switch (action.type) {
        case ADD_TASK :
            return [
                ...state,
                {
                    id: new Date().toDateString(),
                    text: action.text 
                }
            ]
        case REMOVE_TASK: 
            return {}
        default :
            return state
    }
}
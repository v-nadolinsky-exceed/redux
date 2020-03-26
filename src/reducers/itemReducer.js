import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from "../type"

const InitialState = () => {
    return {
       items : []
    }
}

export const itemReducer = (state = InitialState() ,action) => {
    switch (action.type) {
        case ADD_TASK :
            return { ...state, items: [...state.items, action.payload] }
        case REMOVE_TASK: 
            return { items: [...state.items.filter( task => task.id !== action.payload.id ) ]} 
        case CHANGE_TASK:
            return { items: [...state.items.map( task => {
                if( task.id === action.payload.id) {
                    return { ...task , text : action.payload.text }
                }
            })]}
        default :
            return state
    }

}
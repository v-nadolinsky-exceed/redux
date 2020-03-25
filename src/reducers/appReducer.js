const InitialState = () => {
    return {
        type : 'DEFAULT_TASK',
        payload : {
            id : new Date().toDateString()
        }
    }
}

export const appReducer = (state = InitialState, action) => {
    switch (action.type) {
        default :
            return state
    }
}
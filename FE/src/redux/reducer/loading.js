const initialState = false
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_CHANGE':
            return action.open
        default:
            return state
    }
}

export default myReducer

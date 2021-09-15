// import data from "../data"
const initialState = {}
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return action.user
        default:
            return state
    }
}

export default myReducer

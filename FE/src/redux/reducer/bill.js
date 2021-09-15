const initialState = []
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BILL':
            return action.bills
        default:
            return state
    }
}

export default myReducer

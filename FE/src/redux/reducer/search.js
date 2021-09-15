const initialState = []
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SEARCH_PRODUCTS':
            return action.products
        case 'CLEAR_SEARCH_PRODUCTS':
            return []
        default:
            return state
    }
}

export default myReducer

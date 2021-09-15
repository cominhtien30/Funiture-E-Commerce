const initialState = { listCategory: [], detail: {} }
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY':
            return { ...state, listCategory: action.categorys }
        case 'GET_DETAIL_CATEGORY':
            return { ...state, detail: action.detail }
        default:
            return state
    }
}

export default myReducer

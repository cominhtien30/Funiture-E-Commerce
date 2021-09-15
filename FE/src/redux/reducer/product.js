const initialState = {
    getListProduct: [],
    totalPages: 0,
    getAllProduct: [],
    colors: [],
    detail: {},
}
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                getListProduct: action.products,
                totalPages: action.totalPages,
                getAllProduct: action.allProducts,
                colors: action.colors,
            }
        case 'GET_DETAIL_PRODUCT':
            return {
                ...state,
                detail: action.detail,
            }
        default:
            return state
    }
}

export default myReducer

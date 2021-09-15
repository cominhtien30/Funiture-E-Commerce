import * as types from '../../constants'
export const requestProducts = (url) => {
    return {
        type: types.REQUEST_PRODUCTS,
        url,
    }
}
export const getProducts = (products) => {
    return {
        type: types.GET_PRODUCTS,
        products,
    }
}
export const requestDetailProduct = (id) => {
    return {
        type: types.REQUEST_DETAIL_PRODUCT,
        id,
    }
}
export const getDetailProduct = (detail) => {
    return {
        type: types.GET_DETAIL_PRODUCT,
        detail,
    }
}

export const addProducts = (product) => {
    return {
        type: types.ADD_PRODUCTS,
        product,
    }
}
export const updateProduct = (id, product) => {
    return {
        type: types.UPDATE_PRODUCT,
        id,
        product,
    }
}
export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id,
    }
}
export const searchProduct = (word) => {
    return {
        type: types.SEARCH_PRODUCTS,
        word,
    }
}
export const getSearchProduct = (products) => {
    return {
        type: types.GET_SEARCH_PRODUCTS,
        products,
    }
}

export const clearSearchProduct = () => {
    return {
        type: types.CLEAR_SEARCH_PRODUCTS,
    }
}

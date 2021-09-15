import * as types from '../../constants'

export const addCart = (product) => {
    return {
        type: types.ADD_TO_CART,
        product,
    }
}
export const deleteItemCart = (id) => {
    return {
        type: types.DELETE_TO_ITEM_CART,
        id,
    }
}
export const updateItemCart = (id, quantity) => {
    return {
        type: types.UPDATE_TO_ITEM_CART,
        id,
        quantity,
    }
}
export const clearCart = () => {
    return {
        type: types.CLEAR_CART,
    }
}

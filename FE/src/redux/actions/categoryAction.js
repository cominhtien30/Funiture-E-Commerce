import * as types from '../../constants'

export const requestCategorys = () => {
    return {
        type: types.REQUEST_CATEGORY,
    }
}
export const getCategorys = (categorys) => {
    return {
        type: types.GET_CATEGORY,
        categorys,
    }
}
export const requestDetail = (id) => {
    return {
        type: types.REQUEST_DETAIL_CATEGORY,
        id,
    }
}
export const getDetail = () => {
    return {
        type: types.GET_DETAIL_CATEGORY,
    }
}
export const addCategorys = (category) => {
    return {
        type: types.ADD_CATEGORY,
        category,
    }
}
export const deleteCategory = (id) => {
    return {
        type: types.DELETE_CATEGORY,
        id,
    }
}
export const updateCategory = (id, category) => {
    return {
        type: types.UPDATE_CATEGORY,
        id,
        category,
    }
}

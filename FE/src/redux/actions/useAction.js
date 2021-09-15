import * as types from '../../constants'

export const requestProfile = (account, onGetSuccess) => {
    return {
        type: types.REQUEST_PROFILE,
        account,
        onGetSuccess,
    }
}

export const getProfile = (user) => {
    return {
        type: types.GET_PROFILE,
        user,
    }
}
export const updateProfile = (user) => {
    return {
        type: types.UPDATE_PROFILE,
        user,
    }
}

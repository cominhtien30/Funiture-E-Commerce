import * as types from '../../constants'

export const openSignIn = (open) => {
    return {
        type: types.CHANGE_OPEN,
        open,
    }
}

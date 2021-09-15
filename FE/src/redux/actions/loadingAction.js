import * as types from '../../constants'

export const loadingChange = (open) => {
    return {
        type: types.LOADING_CHANGE,
        open,
    }
}

import * as types from '../../constants'

export const alertChange = (payload) => {
    const { open, notice, patch, message, status } = payload
    return {
        type: types.ALTER_CHANGE,
        open,
        notice,
        patch,
        status,
        message,
    }
}

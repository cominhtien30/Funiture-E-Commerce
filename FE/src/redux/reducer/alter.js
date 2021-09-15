const initialState = {
    open: false, // open or off alert
    notice: false, //if true , will green alert , else false, will red alert
    patch: '', // đường dẫn router có thể có hoặc không
    status: '', //nó thuộc loại hành động nào, đăng nhập hay là xử lý chức năng
    message: '', //gửi 1 thông báo vào component
}
var myReducer = (state = initialState, action) => {
    const { open, notice, patch, message, status } = action
    switch (action.type) {
        case 'ALERT_CHANGE':
            return {
                ...state,
                open,
                notice,
                patch,
                status,
                message,
            }
        default:
            return state
    }
}

export default myReducer

import api from '../../utils/api'
import { takeEvery, call, put } from 'redux-saga/effects'
import { delayWorker, doneWorker } from './worker/loadingWorker'
const url = 'user'

// login
function* loginWorker(action) {
    yield call(doneWorker)
    try {
        yield call(delayWorker)
        const handleLogin = yield api.post(`${url}/login-user`, {
            ...action.user,
            account: action.user.email,
        })

        if (handleLogin) {
            console.log(handleLogin, 'handleLogin')
            const { message } = handleLogin.data
            yield call(isLoginSuccessWorker, handleLogin.data)
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                status: 'auth',
                patch: '/profile',
                message,
            })
        }
    } catch (error) {
        const { message } = error.response.data
        yield (error.response.status === 400 || 500) &&
            put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: false,
                patch: '',
                status: 'auth',
                message,
            })
    }
    yield call(doneWorker)
}
// login social
function* loginSocialWorker(action) {
    yield call(delayWorker)

    try {
        const { user } = action
        const handleLogin = yield api.post(
            `${url}/login-user-social`,
            { user },
        )
        if (handleLogin) {
            const { message } = handleLogin.data
            yield call(isLoginSuccessWorker, handleLogin.data)
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                status: 'auth',
                patch: '/profile',
                message,
            })
        }
    } catch (error) {
        const { message } = error.response.data
        yield (error.response.status === 400 || 500) &&
            put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: false,
                patch: '',
                status: 'auth',
                message,
            })
    }
    yield call(doneWorker)
}
// login social
function* registerWorker(action) {
    yield call(delayWorker)
    try {
        const handleRegister = yield api.post(`${url}/create-user`, {
            ...action.newUser,
        })

        if (handleRegister) {
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                patch: '',
                status: 'auth',
                message: 'Đăng Ký Thành Công !',
            })
        }
    } catch (error) {
        yield error.response.status === 500 &&
            put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: false,
                status: 'auth',
                patch: '',
                message: 'có lỗi xảy ra !',
            })
    }
    yield call(doneWorker)
}
//--------------------------------
// set localStoreage
function isLoginSuccessWorker(isLoggined) {
    const { token, user } = isLoggined
    const { account, type } = user
    localStorage.setItem('access_token', token)
    localStorage.setItem('user', JSON.stringify({ account, type }))
}

export default function* authWatcher() {
    //action data
    yield takeEvery('REQUEST_LOGIN', loginWorker)
    yield takeEvery('REQUEST_REGISTER', registerWorker)
    yield takeEvery('REQUEST_LOGIN_SOCIAL', loginSocialWorker)
}

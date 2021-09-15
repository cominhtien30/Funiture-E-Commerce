import api from '../../utils/api'
import { takeEvery, call, put } from 'redux-saga/effects' //select
import { delayWorker, doneWorker } from './worker/loadingWorker'
// service
import authService from '../../utils/AuthService'
const url = 'user'
// getProfile ------------------------------------
function* getProfileWorker(action) {
    try {
        const profile = yield call(callGetProfile, action)
        if (action.onGetSuccess) {
            action.onGetSuccess(profile.data)
        }
    } catch (error) {
        console.log(error, 'error')
    }
}

function callGetProfile(action) {
    return api.get(
        `${url}/get-one-user/${action.account}`,
        authService.headerToken(),
    )
}
//---------------------------------------
// update-----------------------------------
function* updateProfileWorker(action) {
    try {
        //  delay loading
        yield call(delayWorker)
        const update = yield call(callUpdateProfile, action)
        if (update) {
            yield call(doneWorker)
            //neu thanh cong thi dis patch alter thanh cong
            const { message } = update.data
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                status: 'handle',
                patch: '',
                message,
            })
        }
    } catch (error) {
        //neu that bai dispatch alert that bai
        const { message } = error.response.data
        yield (error.response.status === 400 || 500) &&
            console.log(error.response, 'update')
        put({
            type: 'ALERT_CHANGE',
            open: true,
            notice: false,
            patch: '',
            status: 'handle',
            message,
        })
    }
}
function* getBillWorker() {
    try {
        //  delay loading
        const getBill = yield api(
            'bill/get-order',
            authService.headerToken(),
        )
        if (getBill) {
            yield put({
                type: 'GET_BILL',
                bills: getBill.data?.data,
            })
        }
    } catch (error) {
        console.log(error, 'error')
    }
}

//call api update
function callUpdateProfile(action) {
    const { user } = action
    return api.put(
        `${url}/update-user`,
        user,
        authService.uploadHaveFile(),
    )
}
//---------------------------------------

export default function* userWatcher() {
    //action data
    yield takeEvery('REQUEST_PROFILE', getProfileWorker)
    yield takeEvery('UPDATE_PROFILE', updateProfileWorker)
    yield takeEvery('REQUEST_BILL', getBillWorker)
}

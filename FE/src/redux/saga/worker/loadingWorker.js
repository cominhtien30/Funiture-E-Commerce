//---------------------------------------
// handle laoaing for layout
import { delay, put } from 'redux-saga/effects'
export function* delayWorker() {
    yield put({
        type: 'LOADING_CHANGE',
        open: true,
    })
    yield delay(1000)
}
export function* doneWorker() {
    yield put({
        type: 'LOADING_CHANGE',
        open: false,
    })
}

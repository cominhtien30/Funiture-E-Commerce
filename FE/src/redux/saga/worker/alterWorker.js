//---------------------------------------
// handle laoaing for layout
import { put } from 'redux-saga/effects'

export default function* alterWorker({ notice, message }) {
    yield put({
        type: 'ALERT_CHANGE',
        open: true,
        notice,
        patch: '',
        status: '',
        message,
    })
}

import api from '../../utils/api'
import { takeLatest, call, put } from 'redux-saga/effects' //callput
import { delayWorker, doneWorker } from './worker/loadingWorker'
import alertWorker from './worker/alterWorker'
// service
import authService from '../../utils/AuthService'
const url = 'typeProduct'

// render products
function* getCategorysWorker() {
    yield call(delayWorker)

    try {
        const getCategorys = yield api.get(
            `${url}/get-all-type-product`,
        )
        console.log('REQUEST_CATEGORY', 'REQUEST_CATEGORY')
        if (getCategorys) {
            yield put({
                type: 'GET_CATEGORY',
                categorys: getCategorys.data,
            })
            yield call(doneWorker)
        }
    } catch (error) {
        console.log(error)
    }
}
function* addCategorysWorker(action) {
    const { category } = action

    try {
        const addCategorys = yield api.post(
            `${url}/create-type-product`,
            category,
            authService.uploadHaveFile(),
        )
        if (addCategorys) {
            yield call(getCategorysWorker)
            yield call(alertWorker, {
                notice: true,
                message: 'Thêm Thành Công',
            })
        }
    } catch (error) {
        console.log(error.respones)
    }
}
function* getDetailCategoryWorker(action) {
    const { id } = action
    yield call(delayWorker)
    try {
        const detailCategory = yield api.get(
            `${url}/get-one-type-product/${id}`,
        )
        console.log(detailCategory, 'detail')

        if (detailCategory) {
            yield put({
                type: 'GET_DETAIL_CATEGORY',
                detail: detailCategory.data,
            })
            yield call(doneWorker)
        }
    } catch (error) {
        console.log(error.respones)
    }
}

function* deleteCategorysWorker(action) {
    const { id } = action
    try {
        const deleteCategory = yield api.delete(
            `${url}/delete-type-product/${id}`,
            authService.headerToken(),
        )
        console.log(deleteCategory, 'deleteCategory')
        if (deleteCategory) {
            yield call(getCategorysWorker)
            yield call(alertWorker, {
                notice: true,
                message: 'Xóa Thành Công',
            })
        }
    } catch (error) {
        const { message } = error.response.data
        yield (error.response.status === 400 || 500) &&
            call(alertWorker, {
                notice: false,
                message,
            })
    }
}
function* updateCategorysWorker(action) {
    const { id, category } = action
    try {
        const updateCategory = yield api.put(
            `${url}/update-type-product/${id}`,
            category,
            authService.uploadHaveFile(),
        )
        if (updateCategory) {
            yield call(getCategorysWorker)
            yield call(alertWorker, {
                notice: true,
                message: 'Cập Nhật Thành Công',
            })
        }
    } catch (error) {
        console.log(error, 'action')
    }
}
export default function* categorysWatcher() {
    // action data
    yield takeLatest('REQUEST_CATEGORY', getCategorysWorker)
    yield takeLatest(
        'REQUEST_DETAIL_CATEGORY',
        getDetailCategoryWorker,
    )
    yield takeLatest('ADD_CATEGORY', addCategorysWorker)
    yield takeLatest('DELETE_CATEGORY', deleteCategorysWorker)
    yield takeLatest('UPDATE_CATEGORY', updateCategorysWorker)
}

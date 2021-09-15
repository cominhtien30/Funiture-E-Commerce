import api from '../../utils/api'
import { takeLatest, put, call } from 'redux-saga/effects' //call
import { delayWorker, doneWorker } from './worker/loadingWorker'
import alertWorker from './worker/alterWorker'
// service
import authService from '../../utils/AuthService'
const url = 'product'

// render products
function* getProductsWorker(action) {
    yield call(delayWorker)
    const query =
        action.url === undefined ? 'get-pagination/0' : action.url
    try {
        const getProducts = yield api.get(`${url}/${query}`)
        const getAllProducts = yield api.get(
            `${url}/get-all-products`,
        )
        const getColors = yield api.get(`color/get-all-color`)
        if (getProducts && getColors && getColors) {
            const { content, totalPages } = getProducts.data
            console.log(content, 'content')
            //get color
            //when get list all product
            const allProducts = getAllProducts.data
            const colors = getColors.data
            // console.log(colors(), 'colors')
            yield put({
                type: 'GET_PRODUCTS',
                products: content,
                totalPages,
                allProducts,
                colors,
            })
            yield call(doneWorker)
        }
    } catch (error) {
        console.log(error)
    }
}
function* addProductsWorker(action) {
    yield call(delayWorker)
    const { product } = action
    try {
        const addProduct = yield api.post(
            `${url}/create-products`,
            product,
            authService.uploadHaveFile(),
        )
        if (addProduct) {
            yield call(getProductsWorker, {
                type: 'REQUEST_PRODUCTS',
                url: undefined,
            })
            yield call(alertWorker, {
                notice: true,
                message: 'Thêm Thành Công',
            })
        }
    } catch (error) {
        console.log(error)
    }
}
function* getDetailProductWorker(action) {
    yield call(delayWorker)
    const { id } = action
    try {
        yield call(delayWorker)
        const getDetailProduct = yield api.get(
            `${url}/get-one-products/${id}`,
        )
        if (getDetailProduct) {
            yield put({
                type: 'GET_DETAIL_PRODUCT',
                detail: getDetailProduct.data,
            })
            yield call(doneWorker)
        }
    } catch (error) {
        console.log(error)
    }
}
function* updateProductWorker(action) {
    yield call(delayWorker)
    const { product, id } = action
    try {
        const updateProduct = yield api.put(
            `${url}/update-products/${id}`,
            product,
            authService.uploadHaveFile(),
        )
        if (updateProduct) {
            yield call(getProductsWorker, {
                type: 'REQUEST_PRODUCTS',
                url: undefined,
            })
            yield call(alertWorker, {
                notice: true,
                message: 'Cập Nhật Thành Công',
            })
        }
    } catch (error) {
        console.log(error)
    }
}
function* deleteProductWorker(action) {
    yield call(delayWorker)
    const { id } = action
    try {
        const updateProduct = yield api.delete(
            `${url}/delete-products/${id}`,
            authService.headerToken(),
        )
        if (updateProduct) {
            yield call(getProductsWorker, {
                type: 'REQUEST_PRODUCTS',
                url: undefined,
            })
            yield call(alertWorker, {
                notice: true,
                message: 'Xoa Thành Công',
            })
        }
    } catch (error) {
        console.log(error)
    }
}
function* searchProductWorker(action) {
    const { word } = action
    try {
        const searchProduct = yield api.get(
            `${url}/get-search?search=${word}`,
        )
        if (searchProduct) {
            yield put({
                type: 'GET_SEARCH_PRODUCTS',
                products: searchProduct.data,
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export default function* productsWatcher() {
    // action data
    yield takeLatest('REQUEST_PRODUCTS', getProductsWorker)
    yield takeLatest('REQUEST_DETAIL_PRODUCT', getDetailProductWorker)
    yield takeLatest('SEARCH_PRODUCTS', searchProductWorker)
    yield takeLatest('ADD_PRODUCTS', addProductsWorker)
    yield takeLatest('UPDATE_PRODUCT', updateProductWorker)
    yield takeLatest('DELETE_PRODUCT', deleteProductWorker)
}

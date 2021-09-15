import { all } from 'redux-saga/effects'
import watchProduct from './sagaProducts'
import watchAuth from './sagaAuthen'
import watchUserProfile from './sagaUserProfile'
import watchCategory from './sagaCategory'
export default function* rootSaga() {
    yield all([
        watchAuth(),
        watchUserProfile(),
        watchProduct(),
        watchCategory(),
    ])
}

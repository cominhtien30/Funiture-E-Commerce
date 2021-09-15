import cart from './cart'
import openSignIn from './signIn'
import alert from './alter'
import userProfile from './userProfile'
import products from './product'
import loading from './loading'
import categorys from './category'
import search from './search'
import bill from './bill'

import { combineReducers } from 'redux'

const myReducer = combineReducers({
    categorys,
    cart,
    openSignIn,
    alert,
    userProfile,
    products,
    loading,
    search,
    bill,
})
export default myReducer

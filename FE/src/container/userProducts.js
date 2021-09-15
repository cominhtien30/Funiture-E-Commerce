// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as productsAction from '../redux/actions/productsAction'
import * as cartAction from '../redux/actions/cartAction'

import Products from '../screens/products/listProduct'

function userProducts({ products, requestListProducts, addToCart }) {
    return (
        <Products
            addToCart={addToCart}
            products={products}
            requestListProducts={requestListProducts}
        />
    )
}
const mapStateToProps = (state) => ({
    products: state.products,
})
//DISPATCH
const mapDispatchToProps = {
    //  get products
    requestListProducts: (page) =>
        productsAction.requestProducts(page),
    // add cart
    addToCart: (product) => cartAction.addCart(product),
}
//check type props
userProducts.propTypes = {
    products: PropTypes.shape({
        getListProduct: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nameProduct: PropTypes.string,
                description: PropTypes.string,
                price: PropTypes.number,
                pictures: PropTypes.string,
                color: PropTypes.string,
            }),
        ),
        totalPages: PropTypes.number,
        colors: PropTypes.arrayOf,
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(userProducts)

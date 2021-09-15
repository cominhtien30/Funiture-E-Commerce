// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as productsAction from '../redux/actions/productsAction'
import UserDetailProduct from '../screens/detail/detail'

function userDetailProductContainer({
    products,
    requestDetailProduct,
}) {
    return (
        <UserDetailProduct
            product={products?.detail}
            requestDetailProduct={requestDetailProduct}
        />
    )
}
const mapStateToProps = (state) => ({
    products: state.products,
})
//DISPATCH
const mapDispatchToProps = {
    requestDetailProduct: (id) =>
        productsAction.requestDetailProduct(id),
}
//check type props
userDetailProductContainer.propTypes = {
    products: PropTypes.shape({
        detail: PropTypes.shape({
            id: PropTypes.number,
            nameProduct: PropTypes.string,
            quantityProducts: PropTypes.number,
            description: PropTypes.string,
            price: PropTypes.number,
            picturesZero: PropTypes.string,
            color: PropTypes.string,
        }),
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(userDetailProductContainer)

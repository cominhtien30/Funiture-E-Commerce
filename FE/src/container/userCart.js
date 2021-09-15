// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartUser from '../screens/cart/cart'
import * as actionCart from '../redux/actions/cartAction'

export const CartUserContainer = ({
    cart,
    deleteItemCart,
    updateItemCart,
}) => {
    //console.log(handleOpen(), "handleOpen")
    return (
        <CartUser
            cart={cart}
            deleteItemCart={deleteItemCart}
            updateItemCart={updateItemCart}
        />
    )
}
// state
const mapStateToProps = (state) => ({
    cart: state.cart,
})
//check type props
CartUserContainer.propTypes = {
    // cart.
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            nameProduct: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            pictures: PropTypes.string,
            color: PropTypes.string,
        }),
    ),
}
const mapDispatchToProps = {
    deleteItemCart: (id) => actionCart.deleteItemCart(id),
    // update
    updateItemCart: (id, quantity) =>
        actionCart.updateItemCart(id, quantity),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CartUserContainer)

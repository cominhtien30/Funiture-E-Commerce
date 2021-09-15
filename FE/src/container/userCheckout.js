// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CheckoutUser from '../screens/checkout/checkout'

export const CheckoutUserContainer = ({ cart }) => {
    //console.log(handleOpen(), "handleOpen")
    const total = () => {
        return (
            cart.reduce((total, currentValue) => {
                return (
                    total + currentValue.quantity * currentValue.price
                )
            }, 0) || 0
        )
    }
    return <CheckoutUser cart={cart} total={total()} />
}
// state
const mapStateToProps = (state) => ({
    cart: state.cart,
})
//check type props
CheckoutUserContainer.propTypes = {
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
// const mapDispatchToProps = {
//     deleteItemCart: (id) => actionCart.deleteItemCart(id),
//     // update
//     updateItemCart: (id, quantity) =>
//         actionCart.updateItemCart(id, quantity),
// }
export default connect(mapStateToProps, null)(CheckoutUserContainer)

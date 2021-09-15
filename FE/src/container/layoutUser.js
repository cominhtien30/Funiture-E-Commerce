// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LayoutUser from '../pages/userLayout'
import * as actionSign from '../redux/actions/signAction'
import * as actionCart from '../redux/actions/cartAction'
import * as actionAlert from '../redux/actions/alertAction'
import * as actionProduct from '../redux/actions/productsAction'
export const layoutUserContainer = ({
    openSignIn,
    handleOpenSignIn,
    openAlert,
    alertChange,
    cart,
    deleteItemCart,
    updateItemCart,
    searchProduct,
    requestSearch,
}) => {
    //console.log(handleOpen(), "handleOpen")
    return (
        <LayoutUser
            cart={cart}
            deleteItemCart={deleteItemCart}
            updateItemCart={updateItemCart}
            openSignIn={openSignIn}
            handleOpenSignIn={handleOpenSignIn}
            openAlert={openAlert}
            alertChange={alertChange}
            searchProduct={searchProduct}
            requestSearch={requestSearch}
        />
    )
}
// state
const mapStateToProps = (state) => ({
    openSignIn: state.openSignIn,
    openAlert: state.alert,
    // cart
    cart: state.cart,
    searchProduct: state.search,
})
//check type props
layoutUserContainer.propTypes = {
    openLoading: PropTypes.bool,
    openSignIn: PropTypes.bool,
    openAlert: PropTypes.shape({
        open: PropTypes.bool,
        notice: PropTypes.bool,
        patch: PropTypes.string,
        message: PropTypes.string,
    }),
    // cart.
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            nameProduct: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            picturesZero: PropTypes.string,
            color: PropTypes.string,
        }),
    ),
    searchProduct: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            nameProduct: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            picturesZero: PropTypes.string,
            color: PropTypes.string,
        }),
    ),
}
const mapDispatchToProps = {
    handleOpenSignIn: (open) => actionSign.openSignIn(open),
    // Alert change
    alertChange: (payload) => actionAlert.alertChange(payload),
    // delete cart
    deleteItemCart: (id) => actionCart.deleteItemCart(id),
    // update
    updateItemCart: (id, quantity) =>
        actionCart.updateItemCart(id, quantity),
    //search
    requestSearch: (word) => actionProduct.searchProduct(word),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(layoutUserContainer)

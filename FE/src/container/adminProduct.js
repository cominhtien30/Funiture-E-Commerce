// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as productsAction from '../redux/actions/productsAction'
import * as categorysAction from '../redux/actions/categoryAction'
import AdminProducts from '../screens/adminProduct/adminProduct'

function adminProductsContainer({
    products,
    requestListProducts,
    categorys,
    requestListCategorys,
    addProducts,
    requestDetailProduct,
    updateProduct,
    deleteProduct,
}) {
    return (
        <AdminProducts
            updateProduct={updateProduct}
            addProducts={addProducts}
            requestListCategorys={requestListCategorys}
            categorys={categorys?.listCategory}
            products={products}
            requestListProducts={requestListProducts}
            requestDetailProduct={requestDetailProduct}
            deleteProduct={deleteProduct}
        />
    )
}
const mapStateToProps = (state) => ({
    products: state.products,
    categorys: state.categorys,
})
//DISPATCH
const mapDispatchToProps = {
    //  get products
    requestListProducts: productsAction.requestProducts,
    addProducts: (product) => productsAction.addProducts(product),
    updateProduct: (id, product) =>
        productsAction.updateProduct(id, product),
    deleteProduct: (id) => productsAction.deleteProduct(id),

    requestListCategorys: categorysAction.requestCategorys,
    requestDetailProduct: (id) =>
        productsAction.requestDetailProduct(id),
}
//check type props
adminProductsContainer.propTypes = {
    products: PropTypes.shape({
        getListProduct: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nameProduct: PropTypes.string,
                quantityProducts: PropTypes.number,
                description: PropTypes.string,
                price: PropTypes.number,
                picturesZero: PropTypes.string,
                color: PropTypes.string,
            }),
        ),
        totalPages: PropTypes.number,
        getAllProduct: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nameProduct: PropTypes.string,
                quantityProducts: PropTypes.number,
                description: PropTypes.string,
                price: PropTypes.number,
                picturesZero: PropTypes.string,
                color: PropTypes.string,
                flowTypeProducts: PropTypes.shape({
                    id: PropTypes.number,
                    nameProduct: PropTypes.string,
                    quantityProducts: PropTypes.number,
                    description: PropTypes.string,
                    price: PropTypes.number,
                    pictures: PropTypes.string,
                    color: PropTypes.string,
                }),
            }),
        ),
        colors: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nameColor: PropTypes.string,
                colorCode: PropTypes.string,
            }),
        ),
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
    categorys: PropTypes.shape({
        listCategory: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nameTypeProduct: PropTypes.string,
                imagesTypeProduct: PropTypes.string,
            }),
        ),
        detail: PropTypes.shape({
            id: PropTypes.number,
            nameTypeProduct: PropTypes.string,
            imagesTypeProduct: PropTypes.string,
        }),
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(adminProductsContainer)

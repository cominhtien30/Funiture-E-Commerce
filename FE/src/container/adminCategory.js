// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as categorysAction from '../redux/actions/categoryAction'
import AdminCategory from '../screens/adminCategory'

function adminCategorysContainer({
    categorys,
    requestListCategorys,
    addCategorys,
    requestDetailCategory,
    deleteCategory,
    updateCategory,
}) {
    return (
        <AdminCategory
            categorys={categorys}
            requestListCategorys={requestListCategorys}
            addCategorys={addCategorys}
            requestDetailCategory={requestDetailCategory}
            deleteCategory={deleteCategory}
            updateCategory={updateCategory}
        />
    )
}
const mapStateToProps = (state) => ({
    categorys: state.categorys,
})
//DISPATCH
const mapDispatchToProps = {
    requestListCategorys: categorysAction.requestCategorys,
    // add category
    addCategorys: (category) =>
        categorysAction.addCategorys(category),
    //reques detail category
    requestDetailCategory: (id) => categorysAction.requestDetail(id),
    //delete  category
    deleteCategory: (id) => categorysAction.deleteCategory(id),
    updateCategory: (id, product) =>
        categorysAction.updateCategory(id, product),
}
//check type props
adminCategorysContainer.propTypes = {
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
)(adminCategorysContainer)

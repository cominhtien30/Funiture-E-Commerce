// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as categorysAction from '../redux/actions/categoryAction'
import UserHome from '../screens/home/home'

function userHomeContainer({ categorys, requestListCategorys }) {
    return (
        <UserHome
            categorys={categorys}
            requestListCategorys={requestListCategorys}
        />
    )
}
const mapStateToProps = (state) => ({
    categorys: state.categorys,
})
//DISPATCH
const mapDispatchToProps = {
    requestListCategorys: categorysAction.requestCategorys,
}
//check type props
userHomeContainer.propTypes = {
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
)(userHomeContainer)

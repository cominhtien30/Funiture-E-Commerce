// @flow
import React from 'react'
import { connect } from 'react-redux'
import ComponentLoading from '../commons/loading/handleUser'

function loading({ loading }) {
    return loading ? <ComponentLoading /> : ''
}
// state
const mapStateToProps = (state) => ({
    loading: state.loading,
})
export default connect(mapStateToProps, null)(loading)

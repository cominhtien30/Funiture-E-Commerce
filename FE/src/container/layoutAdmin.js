// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LayoutAdmin from '../pages/layoutAdmin'

export const layoutAdminContainer = ({ openAlert }) => {
    return <LayoutAdmin openAlert={openAlert} />
}
// state
const mapStateToProps = (state) => ({
    openAlert: state.alert,
})
//check type props
layoutAdminContainer.propTypes = {
    openAlert: PropTypes.shape({
        open: PropTypes.bool,
        notice: PropTypes.bool,
        patch: PropTypes.string,
        message: PropTypes.string,
    }),
}

export default connect(mapStateToProps, null)(layoutAdminContainer)

// @flow
import React from 'react'
import { connect } from 'react-redux'
import * as authActions from '../redux/actions/authAction'
import ComponentRegister from '../component/user/popupAuthen/register'

function register({
    requestRegister,
    handleClearPopup,
    handleOpenSignUp,
    requestLoginSocial,
}) {
    return (
        <ComponentRegister
            requestRegister={requestRegister}
            handleOpenSignUp={handleOpenSignUp}
            handleClearPopup={handleClearPopup}
            requestLoginSocial={requestLoginSocial}
        />
    )
}
const mapDispatchToProps = {
    requestRegister: (newUser) =>
        authActions.requestRegister(newUser),
    requestLoginSocial: (user) =>
        authActions.requestLoginSocial(user),
}
export default connect(null, mapDispatchToProps)(register)

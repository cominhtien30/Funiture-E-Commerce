// @flow
import React from 'react'
import { connect } from 'react-redux'
import * as authActions from '../redux/actions/authAction'
import ComponentLogin from '../component/user/popupAuthen/login'

function login({
    requestLogin,
    handleClearPopup,
    handleOpenSignUp,
    requestLoginSocial,
}) {
    return (
        <ComponentLogin
            requestLogin={requestLogin}
            handleOpenSignUp={handleOpenSignUp}
            handleClearPopup={handleClearPopup}
            requestLoginSocial={requestLoginSocial}
        />
    )
}
const mapDispatchToProps = {
    requestLogin: (user) => authActions.requestLogin(user),
    requestLoginSocial: (user) =>
        authActions.requestLoginSocial(user),
}
export default connect(null, mapDispatchToProps)(login)

// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/useAction'
import * as actionBill from '../redux/actions/billAction'

import ScreenUserProfile from '../screens/profileUser/profile'

function userProfile({
    userProfile,
    requestProfile,
    updateProfile,
    bill,
    requestBill,
}) {
    return (
        <ScreenUserProfile
            updateProfile={updateProfile}
            userProfile={userProfile}
            requestProfile={requestProfile}
            bill={bill}
            requestBill={requestBill}
        />
    )
}
const mapStateToProps = (state) => ({
    userProfile: state.userProfile,
    bill: state.bill,
})
//DISPATCH
const mapDispatchToProps = {
    //  rq profile
    requestProfile: (account, onGetSuccess) =>
        actions.requestProfile(account, onGetSuccess),
    updateProfile: (user) => actions.updateProfile(user),
    requestBill: actionBill.requestBill,
}
//check type props
userProfile.propTypes = {
    userProfile: PropTypes.shape({
        id: PropTypes.number,
        account: PropTypes.string,
        fullname: PropTypes.string,
        phone: PropTypes.number,
        avatar: PropTypes.string,
        address: PropTypes.string,
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(userProfile)

import React from 'react'
import authService from '../../../../utils/AuthService'
import { useNavigate } from 'react-router-dom'
import Scroll from 'react-scroll'

const DropDownUser = ({ classes, handleOpenSignIn }) => {
    // var scroll = Scroll.animateScroll
    var scroller = Scroll.scroller
    let navigate = useNavigate()
    const isLogin = authService.isLogin()
    const handleLogout = () => {
        authService.handleLogout()
        navigate('/')
    }
    const hanldeScrollToOrder = () => {
        new Promise((resolve) => {
            navigate('/profile')
            resolve()
        }).then(() => {
            scroller.scrollTo('scroll-to-order', {
                delay: 500,
            })
        })
    }
    return (
        <>
            {isLogin ? (
                <>
                    {' '}
                    <div
                        className={`${classes.row} lineBottom dropdown-option`}
                    >
                        <a
                            onClick={() => navigate('/profile')}
                            href="#javascript()"
                        >
                            Profile
                        </a>
                    </div>
                    <div className={`${classes.row} lineBottom`}>
                        <a
                            onClick={hanldeScrollToOrder}
                            href="#javascript()"
                        >
                            Order
                        </a>
                    </div>
                    <div
                        className={`${classes.row} lineBottom dropdown-option`}
                    >
                        <a
                            onClick={handleLogout}
                            href="#javascript()"
                        >
                            Logout
                        </a>
                    </div>
                </>
            ) : (
                <div
                    className={`${classes.row} lineBottom dropdown-option`}
                >
                    <a
                        onClick={() => handleOpenSignIn(true)}
                        href="#javascript()"
                    >
                        Login
                    </a>
                </div>
            )}
        </>
    )
}
export default DropDownUser

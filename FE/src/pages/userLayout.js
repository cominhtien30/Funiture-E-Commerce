import React, { useState, useEffect, useCallback } from 'react'
import '../App.css'
// -----
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
// --------
import { Outlet } from 'react-router-dom'
import {
    disableBodyScroll,
    enableBodyScroll,
    // clearAllBodyScrollLocks,
} from 'body-scroll-lock'
// conponennt
import Header from '../component/user/header'
import Footer from '../component/user/footer/footer'
import Chat from '../commons/chatComponent/chat'
import CartFixed from '../component/user/cartFixed'
import Login from '../container/login'
import Register from '../container/register'
import Alert from '../commons/alert'
// ----global
// import GlobalCss from '../global.styles'
function App({
    openSignIn,
    handleOpenSignIn,
    openAlert,
    alertChange,
    cart,
    deleteItemCart,
    updateItemCart,
    searchProduct,
    requestSearch,
}) {
    const [openSignup, setOpenSignUp] = useState(false)
    // khi openSignIn openSignup thay đổi làm component reRender
    // thì sẽ kiểm tra xem có popup nào mở không, nếu có thì block scroll
    useEffect(() => {
        const body = document.querySelector('body')
        openSignIn || openSignup
            ? disableBodyScroll(body, {
                  reserveScrollBarGap: true,
              })
            : !openSignIn && !openSignup
            ? enableBodyScroll(body)
            : disableBodyScroll(body, {
                  reserveScrollBarGap: true,
              })
    }, [openSignIn, openSignup])

    // viết useCallback để khi không dùng hàm thì sẽ không Created
    // open popup register
    const handleOpenSignUp = useCallback(
        (open) => {
            setOpenSignUp(open)
        },
        [openSignup],
    )
    // close all poppup
    const handleClearPopup = useCallback(() => {
        setOpenSignUp(false)
        handleOpenSignIn(false)
    }, [openSignIn])
    // reder popup
    const formAuth = () => {
        return openSignIn ? (
            openSignup ? (
                <Register
                    handleClearPopup={handleClearPopup}
                    handleOpenSignUp={handleOpenSignUp}
                />
            ) : (
                <Login
                    handleClearPopup={handleClearPopup}
                    handleOpenSignUp={handleOpenSignUp}
                />
            )
        ) : (
            ''
        )
    }

    return (
        <React.Fragment>
            <div className={`App `}>
                {/* layout user */}
                {/* -------------------------- */}
                {/* css global*/}
                {/* <GlobalCss /> */}
                {/* -------------------------- */}
                <Header
                    handleOpenSignIn={handleOpenSignIn}
                    searchProduct={searchProduct}
                    requestSearch={requestSearch}
                />
                <div className="container-fluid">
                    <Outlet />
                </div>
                {/* popup auth */}
                {formAuth()}
                {/* menu cart */}
                <CartFixed
                    cart={cart}
                    deleteItemCart={deleteItemCart}
                    updateItemCart={updateItemCart}
                />
                {/* icon chat */}
                {/* alert */}
                {openAlert.open && (
                    <Alert
                        openAlert={openAlert}
                        handleOpenSignIn={handleOpenSignIn}
                        alertChange={alertChange}
                        handleOpenSignUp={handleOpenSignUp}
                    />
                )}
                <Chat />
                <Footer />
                {/* layout user */}
            </div>
        </React.Fragment>
    )
}

export default App

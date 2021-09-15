// @flow
import React, { useState, useEffect } from 'react'
import styles from './cartFixed.style'
import { withTheme } from '@material-ui/core/styles'
import ItemProduct from './itemProduct'

import {
    disableBodyScroll,
    enableBodyScroll,
    // clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import Footer from './footer'
import Overlay from '../../../commons/overlay/overlay'

const CartFixed = ({ cart, deleteItemCart, updateItemCart }) => {
    // state set animation
    const [open, setOpen] = useState(false)
    const [animationCount, setAnimationCount] = useState(false)
    // truyẻân param vao style d
    const classes = styles({
        open,
        animationCount,
        cart: cart.length,
    })
    // ham count item cart
    const countItemCart = () => {
        return cart.reduce((total, currentValue) => {
            return total + currentValue.quantity
        }, 0)
    }
    useEffect(() => {
        setAnimationCount(true)
        setTimeout(() => {
            setAnimationCount(false)
        }, 250)
    }, [countItemCart()])
    useEffect(() => {
        const body = document.querySelector('body')
        open
            ? disableBodyScroll(body, {
                  reserveScrollBarGap: true,
              })
            : enableBodyScroll(body)
    }, [open])
    return (
        <>
            {open ? <Overlay /> : ''}
            <div className={`${classes.box1} ${classes.boxCart}`}>
                <div className="d-flex list-product-cart flex-column  justify-content-between w-100 h-100">
                    {/* hide */}
                    <div
                        className={`d-flex w-100 border-bottom justify-content-end align-items-center p-2  headerCart ${classes.boxShadow}`}
                    ></div>
                    {/*  */}
                    {/* body */}
                    <div className="bodyCart">
                        {/* item product */}
                        {cart.map((product, index) => {
                            return (
                                <ItemProduct
                                    key={index}
                                    id={product.id}
                                    nameProduct={product.nameProduct}
                                    pictures={product.picturesZero}
                                    price={
                                        product.price *
                                        product.quantity
                                    }
                                    quantity={product.quantity}
                                    deleteItemCart={deleteItemCart}
                                    updateItemCart={updateItemCart}
                                />
                            )
                        })}
                        {/* end ---- item ---cart */}
                    </div>
                    <Footer cart={cart} />
                </div>
            </div>
            {/* box 2 */}
            <div
                className={`${classes.box2} ${classes.boxCart} ${classes.boxShadow}`}
                onClick={() => setOpen(!open)}
            >
                <span
                    style={{
                        lineHeight: '50px',
                        color: `${open ? 'black' : 'white'}`,
                    }}
                >
                    {open ? (
                        <i className="fa fa-times"></i>
                    ) : (
                        <i className="fa fa-cart-plus"></i>
                    )}
                </span>
                <div className="coutItem coutItemAnimation">
                    {countItemCart()}
                </div>
                {!animationCount && !open ? (
                    <div className="coutItem showCount">
                        {countItemCart()}
                    </div>
                ) : (
                    ' '
                )}
            </div>
        </>
    )
}
export default withTheme(CartFixed)

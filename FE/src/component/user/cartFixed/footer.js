// @flow
import React from 'react'
import styles from './cartFixed.style'
import { useNavigate } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const CartFixed = ({ cart }) => {
    let navigate = useNavigate()
    const classes = styles()
    // ham count item cart
    const total = () => {
        return cart.reduce((total, currentValue) => {
            return total + currentValue.quantity * currentValue.price
        }, 0)
    }
    return (
        <>
            <div
                onClick={() => navigate('/cart')}
                className={`d-flex w-100 justify-content-center footerCart ${classes.boxShadow}`}
            >
                <div className="btn-checkout d-flex  align-items-center">
                    <div className="total">
                        <Typography
                            variant="subtitle1"
                            style={{
                                fontWeight: 600,
                            }}
                        >
                            Total : {total()} $
                        </Typography>
                    </div>
                    <i className="fa fa-arrow-circle-right"></i>
                </div>
            </div>
        </>
    )
}
export default withTheme(CartFixed)

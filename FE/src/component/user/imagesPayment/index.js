// @flow
import React from 'react'
import styles from './imagePayment.style'
import { withTheme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import momo from '../../../assets/images/payment/momo.jpg'
import paypal from '../../../assets/images/payment/paypal.png'
import visa from '../../../assets/images/payment/visa.png'

const Cart = ({ formik }) => {
    const classes = styles()
    const handlePaymentPaypal = () => {
        formik.handleSubmit()
    }

    // styles row image
    return (
        <>
            <Grid md={8} container justifyContent="flex-start">
                <img className={classes.img} src={momo} alt="" />
                <img
                    className={classes.img}
                    src={paypal}
                    alt=""
                    onClick={handlePaymentPaypal}
                />
                <img className={classes.img} src={visa} alt="" />
            </Grid>
        </>
    )
}
export default withTheme(Cart)

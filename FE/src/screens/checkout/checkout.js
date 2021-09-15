// @flow
import React, { useState } from 'react'
import { withTheme } from '@material-ui/core/styles'
import ProcessStep from '../../component/user/processStep'
import MuiPhoneNumber from 'material-ui-phone-number'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {
    Button,
    Typography,
    Grid,
    TextField,
    Box,
    Paper,
} from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import { validationCheckout } from '../../utils/validation'
import { useFormik } from 'formik'
import { Motion, spring, presets } from 'react-motion'
import ImagesPayment from '../../component/user/imagesPayment'
import Paypal from '../../component/user/checkout/paypelComponent'
import Overlay from '../../commons/overlay/overlay'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../redux/actions/cartAction'
import { useDispatch } from 'react-redux'

const Checkout = ({ cart, total }) => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [checkout, setCheckout] = useState({})
    const [paypal, setPaypal] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const handleSuccess = (success) => {
        setIsSuccess(success)
    }
    const handleDoneOrder = () => {
        setIsSuccess(false)
        dispatch(clearCart())
        navigate('/profile')
    }
    const formik = useFormik({
        initialValues: {
            zipcode: ``,
            addresss: '',
            numberPhone: '',
        },
        validationSchema: validationCheckout,
        onSubmit: (values) => {
            setCheckout(values)
            setPaypal(true)
        },
    })

    return (
        <>
            <div
                className={` container-checkout width-layout mt-4 mb-4`}
            >
                <ProcessStep />
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Box
                            borderColor="primary.bolid"
                            border={1}
                            p={4}
                            height="100%"
                        >
                            <Typography
                                variant="caption"
                                gutterBottom
                            >
                                Shipping Address
                            </Typography>
                            <form
                                action=""
                                className="d-flex justify-content-center align-items-center h-100"
                            >
                                <div className="d-flex flex-column justify-content-around  w-100">
                                    <TextField
                                        fullWidth
                                        id="standard-basic"
                                        label="ZipCode"
                                        required
                                        margin="normal"
                                        name="zipcode"
                                        onChange={formik.handleChange}
                                        value={formik.values.zipcode}
                                        error={
                                            formik.touched.zipcode &&
                                            formik.errors.zipcode
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched.zipcode &&
                                            formik.errors.zipcode
                                                ? formik.errors
                                                      .zipcode
                                                : ''
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        id="standard-basic"
                                        label="Address"
                                        required
                                        margin="normal"
                                        name="addresss"
                                        onChange={formik.handleChange}
                                        value={formik.values.addresss}
                                        error={
                                            formik.touched.addresss &&
                                            formik.errors.addresss
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched.addresss &&
                                            formik.errors.addresss
                                                ? formik.errors
                                                      .addresss
                                                : ''
                                        }
                                    />

                                    <MuiPhoneNumber
                                        fullWidth
                                        name="numberPhone"
                                        required
                                        data-cy="user-phone"
                                        margin="normal"
                                        defaultCountry={'vn'}
                                        onChange={(value) =>
                                            formik.setFieldValue(
                                                'numberPhone',
                                                value,
                                            )
                                        }
                                        value={
                                            formik.values.numberPhone
                                        }
                                        error={
                                            formik.touched
                                                .numberPhone &&
                                            formik.errors.numberPhone
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched
                                                .numberPhone &&
                                            formik.errors.numberPhone
                                                ? formik.errors
                                                      .numberPhone
                                                : ''
                                        }
                                    />
                                </div>
                            </form>
                        </Box>
                    </Grid>
                    <Grid xs={6} item>
                        <Box
                            borderColor="primary.bolid"
                            border={1}
                            p={4}
                            height="100%"
                        >
                            <Typography
                                variant="caption"
                                gutterBottom
                            >
                                Order Sumary
                            </Typography>
                            <Grid
                                container
                                justifyContent="space-between"
                                style={{
                                    height: '100%',
                                }}
                            >
                                <div className="d-flex list-product-cart flex-column mt-4 w-100 ">
                                    {cart.map((product, index) => (
                                        <div
                                            key={index}
                                            className="d-flex item-product justify-content-between align-items-center lineBottom"
                                        >
                                            <img
                                                style={{
                                                    height: '46px',
                                                    width: '88px',
                                                    objectFit:
                                                        'cover',
                                                }}
                                                src={
                                                    product?.picturesZero
                                                }
                                                alt=""
                                            />
                                            <div className="info d-flex flex-column align-items-end">
                                                <Typography variant="subtitle1">
                                                    {
                                                        product?.nameProduct
                                                    }
                                                </Typography>
                                                <Typography variant="body1">
                                                    quantity :{' '}
                                                    {
                                                        product?.quantity
                                                    }
                                                </Typography>
                                                <Typography variant="body1">
                                                    Price :{' '}
                                                    {product?.price}{' '}
                                                    VND
                                                </Typography>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Grid xs={12}>
                                    <Grid
                                        container
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography variant="subtitle1">
                                            cart Total
                                        </Typography>
                                        <Typography variant="body1">
                                            {total} VND
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography variant="subtitle1">
                                            Discounts
                                        </Typography>
                                        <Typography variant="body1">
                                            0 VND
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography variant="subtitle1">
                                            Delivery Charges
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            style={{
                                                color: 'green',
                                            }}
                                        >
                                            Free
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography variant="h6">
                                            Total
                                        </Typography>
                                        <Typography variant="h5">
                                            {total} VND
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    xs={12}
                    container
                    justifyContent="space-between"
                    style={{
                        margin: '20px 0',
                    }}
                >
                    <ImagesPayment formik={formik} />
                    <Grid xs={1} item>
                        <Button
                            size="medium"
                            startIcon={
                                <ArrowBackIosIcon fontSize="small" />
                            }
                        >
                            back
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignContent="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} sm={12} md={12}>
                        <Collapse in={paypal}>
                            <Paper
                                style={{ justifyContent: 'center' }}
                            >
                                {paypal && (
                                    <Paypal
                                        handleSuccess={handleSuccess}
                                        checkout={checkout}
                                        cart={cart}
                                        totalMoney={total}
                                    />
                                )}
                            </Paper>
                        </Collapse>
                    </Grid>
                </Grid>
            </div>
            {isSuccess && <Overlay />}
            <Motion
                style={
                    isSuccess
                        ? {
                              opacity: spring(1),
                              translateY: spring(0, presets.wobbly),
                          }
                        : {
                              opacity: 0,
                              translateY: 500,
                          }
                }
            >
                {(interpolatedStyles) => (
                    <div
                        id="Paypal"
                        style={{
                            transform: `translateY(${interpolatedStyles.translateY}px)`,
                            opacity: interpolatedStyles.opacity,
                        }}
                    >
                        <div className="Paypal-title">
                            <h1>Payment successful</h1>
                        </div>
                        <div className="Paypal-content">
                            <div className="content-left">
                                <div className="span-left">
                                    <span>payment type</span>
                                </div>
                                <div className="span-left">
                                    <span>Bank</span>
                                </div>
                                <div className="span-left">
                                    <span>Mobile</span>
                                </div>
                                <div className="span-left">
                                    <span>Email</span>
                                </div>
                                <div className="span-left">
                                    <span>Amount paid</span>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="span-right">
                                    <span>Net banking</span>
                                </div>
                                <div className="span-right">
                                    <span>Bank</span>
                                </div>
                                <div className="span-right">
                                    <span>Mobile</span>
                                </div>
                                <div className="span-right">
                                    <span>Email</span>
                                </div>
                                <div className="span-right">
                                    <span>Amount paid</span>
                                </div>
                            </div>
                        </div>
                        <div className="Paypal-button">
                            <div className="button-print">
                                <button onClick={handleDoneOrder}>
                                    PRINT
                                </button>
                            </div>
                            <div className="button-close">
                                <button onClick={handleDoneOrder}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Motion>
        </>
    )
}
export default withTheme(Checkout)

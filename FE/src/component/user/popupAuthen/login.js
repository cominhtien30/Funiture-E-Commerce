// @flow
import React from 'react'
import styles from './styles'
import logo from '../../../assets/images/products/product.jpg'
import BtnClose from './btnClose'
import { validationLogin } from '../../../utils/validation'
import { useFormik } from 'formik'
import BtnFacebook from './btnFacebook'
import {
    FormControl,
    Grid,
    TextField,
    Button,
} from '@material-ui/core'

const Login = ({
    handleClearPopup,
    handleOpenSignUp,
    requestLogin,
    requestLoginSocial,
}) => {
    const classes = styles()
    // submib and validation
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationLogin,
        onSubmit: (values) => {
            requestLogin(values)
        },
    })

    return (
        <div className={`${classes.root}  `}>
            <div className="popup-auth">
                <Grid container>
                    <Grid item xs={6}>
                        <img
                            className="logo-left"
                            src={logo}
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <div className={`${classes.form} auth-form`}>
                            <BtnClose
                                handleClearPopup={handleClearPopup}
                            />
                            <div className="title-form ">Login</div>
                            <div className="info-form ">
                                Login Your Email ID
                            </div>
                            <form
                                className={`form`}
                                onSubmit={formik.handleSubmit}
                            >
                                <FormControl
                                    className={`  d-flex justify-content-center align-items-center `}
                                    color="secondary"
                                >
                                    <TextField
                                        error={
                                            formik.touched.email &&
                                            formik.errors.email
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched.email &&
                                            formik.errors.email
                                                ? formik.errors.email
                                                : ''
                                        }
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        classes={{
                                            root: classes.input,
                                        }}
                                        fullWidth
                                        id="standard-adornment-password"
                                        placeholder="account"
                                    />
                                </FormControl>
                                <FormControl
                                    className={` d-flex justify-content-center align-items-center mt-2`}
                                    color="secondary"
                                >
                                    <TextField
                                        error={
                                            formik.touched.password &&
                                            formik.errors.password
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched.password &&
                                            formik.errors.password
                                                ? formik.errors
                                                      .password
                                                : ''
                                        }
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        placeholder="password"
                                        type="password"
                                        classes={{
                                            root: classes.input,
                                        }}
                                        fullWidth
                                        id="standard-adornment-password"
                                    />
                                </FormControl>
                                <FormControl
                                    className={` d-flex justify-content-center align-items-center mt-3`}
                                    color="secondary"
                                >
                                    <Button
                                        type="submit"
                                        color="secondary"
                                        fullWidth
                                        classes={{
                                            root: classes.btnSubmit,
                                        }}
                                    >
                                        Login
                                    </Button>
                                </FormControl>
                            </form>
                            <div className="text-account ">
                                Do&apost you have account ?
                                <a
                                    href="#javascript()"
                                    onClick={() =>
                                        handleOpenSignUp(true)
                                    }
                                >
                                    Register !
                                </a>
                            </div>
                            <div className="row social-auth ">
                                <div className="info-form ">
                                    Social Login
                                </div>
                                <div className="buttons-social d-flex justify-content-between mt-2">
                                    {/* <Button classes={{
                                    root: classes.btnFacebook
                                }}>
                                    Primary
                                </Button> */}
                                    <BtnFacebook
                                        requestLoginSocial={
                                            requestLoginSocial
                                        }
                                    />
                                    <Button
                                        classes={{
                                            root: classes.btnGoogle,
                                        }}
                                    >
                                        Secondary
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Login

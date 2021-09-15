// @flow
import React from 'react'
import styles from './styles'
import BtnClose from './btnClose'
import { validationRegister } from '../../../utils/validation'
import logo from '../../../assets/images/products/product.jpg'
import BtnFacebook from './btnFacebook'
import { useFormik } from 'formik'
import {
    FormControl,
    Grid,
    TextField,
    Button,
} from '@material-ui/core'

const Register = ({
    handleClearPopup,
    handleOpenSignUp,
    requestRegister,
    requestLoginSocial,
}) => {
    const classes = styles()
    const formik = useFormik({
        initialValues: {
            fullname: '',
            account: '',
            email: '',
            password: '',
            repassword: '',
        },
        validationSchema: validationRegister,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            requestRegister(values)
        },
    })
    return (
        <div className={`${classes.root}  `}>
            <div className="popup-auth">
                <Grid container>
                    <Grid item xs={6} spacing={3}>
                        <img className="logo-left" src={logo} />
                    </Grid>
                    <Grid item xs={6}>
                        <div className={`${classes.form} auth-form`}>
                            <BtnClose
                                handleClearPopup={handleClearPopup}
                            />
                            <div className="title-form ">
                                Register
                            </div>
                            <div className="info-form ">
                                Register Your Email ID
                            </div>
                            <form
                                action=""
                                className={` form`}
                                onSubmit={formik.handleSubmit}
                            >
                                <FormControl
                                    className={` d-flex justify-content-center align-items-center`}
                                    color="secondary"
                                >
                                    <TextField
                                        error={
                                            formik.touched.fullname &&
                                            formik.errors.fullname
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched.fullname &&
                                            formik.errors.fullname
                                                ? formik.errors
                                                      .fullname
                                                : ''
                                        }
                                        onChange={formik.handleChange}
                                        value={formik.values.fullname}
                                        classes={{
                                            root: classes.input,
                                        }}
                                        fullWidth
                                        id="standard-adornment-password"
                                        placeholder="fullname"
                                        name="fullname"
                                    />
                                </FormControl>
                                <FormControl
                                    className={`  d-flex justify-content-center align-items-center  mt-2`}
                                    color="secondary"
                                >
                                    <TextField
                                        name="account"
                                        error={
                                            formik.touched.account &&
                                            formik.errors.account
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched.account &&
                                            formik.errors.account
                                                ? formik.errors
                                                      .account
                                                : ''
                                        }
                                        onChange={formik.handleChange}
                                        value={formik.values.account}
                                        classes={{
                                            root: classes.input,
                                        }}
                                        fullWidth
                                        id="standard-adornment-password"
                                        placeholder="account"
                                    />
                                </FormControl>
                                <FormControl
                                    className={`  d-flex justify-content-center align-items-center  mt-2`}
                                    color="secondary"
                                >
                                    <TextField
                                        name="email"
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
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        classes={{
                                            root: classes.input,
                                        }}
                                        fullWidth
                                        id="standard-adornment-password"
                                        placeholder="email"
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
                                        classes={{
                                            root: classes.input,
                                        }}
                                        fullWidth
                                        id="standard-adornment-password"
                                        placeholder="password"
                                        type="password"
                                    />
                                </FormControl>
                                <FormControl
                                    className={` d-flex justify-content-center align-items-center mt-2`}
                                    color="secondary"
                                >
                                    <TextField
                                        name="repassword"
                                        error={
                                            formik.touched
                                                .repassword &&
                                            formik.errors.repassword
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            formik.touched
                                                .repassword &&
                                            formik.errors.repassword
                                                ? formik.errors
                                                      .repassword
                                                : ''
                                        }
                                        onChange={formik.handleChange}
                                        value={
                                            formik.values.repassword
                                        }
                                        classes={{
                                            root: classes.input,
                                        }}
                                        fullWidth
                                        id="standard-adornment-password"
                                        placeholder="password"
                                        type="password"
                                    />
                                </FormControl>

                                <FormControl
                                    className={` d-flex justify-content-center align-items-center mt-3 mb-3`}
                                    color="secondary"
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                    >
                                        Register
                                    </Button>
                                </FormControl>
                            </form>
                            <div className="text-account">
                                Have an account ?{' '}
                                <a
                                    href="#javascript()"
                                    onClick={() =>
                                        handleOpenSignUp(false)
                                    }
                                >
                                    Login now !
                                </a>
                            </div>
                            <div className="row social-auth mt-4">
                                <div className="info-form ">
                                    Social Login
                                </div>
                                <div className="buttons-social d-flex justify-content-between mt-3 mb-3">
                                    <BtnFacebook
                                        requestLoginSocial={
                                            requestLoginSocial
                                        }
                                    />
                                    <Button
                                        variant="contained"
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
export default Register

// @flow
import React from 'react'
import styles from './footer.styles'
import app from '../../../assets/images/banner/app.png'
import google from '../../../assets/images/banner/google.png'
import { Button, Grid, TextField } from '@material-ui/core'

const Footer = () => {
    //const { classes } = props
    const classes = styles()

    return (
        <footer className={`${classes.footer} footer`}>
            <div className="lineBottom"></div>
            {/* section mail */}
            <section
                className={` width-layout lineBottom ${classes.section}  section-mail`}
            >
                <div className="title-mail">
                    SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY OF
                    THE WEEK.
                </div>
                <div className="form-mail d-flex justify-content-center">
                    <form
                        action=""
                        className="d-flex justify-content-center"
                    >
                        {/* <input type="text" className="input-mail" /> */}
                        <TextField
                            id="standard-basic"
                            variant="outlined"
                        />
                        <Button size="medium">subbscrie</Button>
                    </form>
                </div>
            </section>
            {/* end section mail */}
            {/* ---------------------- */}
            {/* infor section */}
            <section
                className={` width-layout ${classes.section}   section-info`}
            >
                <Grid container>
                    {/* col */}
                    <Grid xs={3} item>
                        <Grid xs={12} item>
                            <div
                                className={`${classes.title} title-info d-flex`}
                            >
                                The Company
                            </div>
                        </Grid>
                        <Grid container>
                            <Grid xs={6} item>
                                <div className="info-content d-flex flex-column align-items-start">
                                    <a href="">About Us</a>
                                    <a href="">Help</a>
                                    <a href="">Blog</a>
                                    <a href="">Insile Ul</a>
                                </div>
                            </Grid>
                            <Grid xs={6} item>
                                <div className="info-content d-flex flex-column align-items-start">
                                    <a href="">Careers</a>
                                    <a href="">Press</a>
                                    <a href="">Team</a>
                                    <a href="">Privacy Policy</a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* end col */}
                    {/* col */}
                    <Grid xs={4} item>
                        <Grid xs={12} item>
                            <div
                                className={`${classes.title} title-info d-flex`}
                            >
                                More Information:
                            </div>
                        </Grid>
                        <Grid container>
                            <Grid xs={6} item>
                                <div className="info-content d-flex flex-column align-items-start">
                                    <a href="">Payment & Security</a>
                                    <a href="">Shipping & Delivery</a>
                                    <a href="">Terms of Use</a>
                                    <a href="">
                                        Terms of Offer + Sale
                                    </a>
                                </div>
                            </Grid>
                            <Grid xs={6} item>
                                <div className="info-content d-flex flex-column align-items-start">
                                    <a href="">Contact Us</a>
                                    <a href="">Visit Us</a>
                                    <a href="">Buy In Bulk</a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* end col */}
                    {/* col */}
                    <Grid xs={2} item>
                        <Grid xs={12} item>
                            <div
                                className={`${classes.title} title-info d-flex`}
                            >
                                Explore More
                            </div>
                        </Grid>
                        <Grid xs={12} item>
                            <div className="info-content d-flex flex-column align-items-start">
                                <a href="">Refer & Earn</a>
                                <a href="">Exchange</a>
                                <a href="">Gift Cards</a>
                            </div>
                        </Grid>
                    </Grid>
                    {/* end col */}
                    {/* col */}
                    <Grid xs={3} item>
                        <Grid xs={12} item>
                            <div
                                className={`${classes.title} title-info d-flex`}
                            >
                                Registered Address
                            </div>
                        </Grid>
                        <Grid xs={12} item>
                            <div className="info-content d-flex flex-column align-items-start ">
                                <span className="address-info">
                                    {' '}
                                    Urban Ladder Home Décor Solutions
                                    Pvt Ltd, 1st, 2nd & 3rd Floor, No
                                    259 and 276, Amarjyothi HBCS
                                    Layout, Domlur, Bengaluru-560 071,
                                    Karnataka, India
                                    <br />
                                    <br />
                                    <b>CIN</b> : U74999KA2012PTC062610
                                    Grievance Contact: Akash Chauhan
                                    hello@urbanladder.com
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                    {/* end col */}
                </Grid>
            </section>
            {/* end info section */}
            {/* ------------- */}
            {/* section contact */}
            <section
                className={` width-layout ${classes.section}  section-contact`}
            >
                <Grid container justifyContent="space-between">
                    <Grid item xs={4}>
                        <div
                            className={`${classes.title} d-flex title-contact`}
                        >
                            Connect With Us:
                        </div>
                        <div className="icon-contact d-flex justify-content-between mt-4">
                            <a href="">
                                <i className="fa fa-envelope-open-o"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-youtube"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-github"></i>
                            </a>
                            {/* <i className="fa fa-google-plus-g"></i> */}
                            <a href="">
                                <i className="fa fa-pinterest-square"></i>
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div
                            className={`${classes.title} d-flex title-contact `}
                        >
                            {' '}
                            Download App:
                        </div>
                        <div className="app-mobile-contact d-flex justify-content-start mt-4">
                            <a href="" className="mobile-ios">
                                <img src={app} alt="Error" />
                            </a>
                            <a href="" className="mobile-android ">
                                <img src={google} alt="Error" />
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </footer>
    )
}
export default Footer

// @flow
import React, { useState } from 'react'
import rocket from '../../assets/images/logo/rocket.png'
import warning from '../../assets/images/logo/warning.png'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Grid, Typography } from '@material-ui/core'
import * as actionAlert from '../../redux/actions/alertAction'
import styles from './styles'

const AlterAdmin = ({ openAlert, alertChange }) => {
    const [animationClose, setAnimationClose] = useState(false)
    const handleClickOk = () => {
        setAnimationClose(true)
        setTimeout(() => {
            alertChange({
                ...openAlert,
                open: false,
            })
        }, 1000)
    }
    console.log(openAlert.notice, 'openAlert.notice')
    const classes = styles({
        success: openAlert.notice,
    })

    return (
        <div className={`${classes.root}`}>
            <Box
                className={`${classes.alert}  ${
                    animationClose
                        ? classes.alertNone
                        : classes.alertShow
                }`}
                component="div"
                height="400px"
                width="350px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translateX(-50%)"
                style={{
                    backgroundColor: openAlert.notice
                        ? 'rgb(67,182,73)'
                        : 'rgb(226 50 25)',
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                    overflow: 'hidden',
                }}
            >
                <Grid
                    container
                    style={{
                        height: '100%',
                    }}
                    justifyContent="space-between"
                    direction="column"
                >
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        style={{
                            paddingTop: '10px',
                        }}
                    >
                        <Typography
                            style={{
                                color: 'white',
                                textTransform: 'uppercase',
                            }}
                            variant="h6"
                        >
                            {openAlert.notice
                                ? 'Thông Báo !'
                                : 'Cảnh Báo !'}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography
                            align="center"
                            style={{
                                color: 'white',
                                textTransform: 'capitalize',
                            }}
                            variant="h6"
                        >
                            {openAlert.message}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        classes={{
                            root: classes.btnOk,
                        }}
                        onClick={handleClickOk}
                    >
                        <Typography
                            align="center"
                            style={{
                                color: 'white',
                                textTransform: 'capitalize',
                            }}
                            variant="h6"
                        >
                            ok{' '}
                            <img
                                style={{
                                    paddingLeft: '10px',
                                }}
                                src={
                                    openAlert.notice
                                        ? rocket
                                        : warning
                                }
                            />{' '}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
const mapDispatchToProps = {
    alertChange: (payload) => actionAlert.alertChange(payload),
}
const mapStateToProps = (state) => ({
    openAlert: state.alert,
})
//check type props
AlterAdmin.propTypes = {
    openAlert: PropTypes.shape({
        open: PropTypes.bool,
        notice: PropTypes.bool,
        patch: PropTypes.string,
        message: PropTypes.string,
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AlterAdmin)

// @flow
import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import styles from './navigation.style'

import { Grid } from '@material-ui/core'

const Navigation = (props) => {
    const { classes } = props
    const navigationStyle = styles()
    return (
        <>
            <section
                className={`lineBottom  ${classes.row} ${classes.line} ${navigationStyle.navigation} navigation`}
            >
                <div
                    className={`${classes.row}  ${classes.content} width-layout navigation_wrapper`}
                >
                    {Array(8)
                        .fill(0)
                        .map((item, index) => (
                            <div
                                className="navigation-item item-sale"
                                key={index}
                            >
                                <a href="" className="item ">
                                    Sale
                                </a>
                                <div className="subnavlist subnavlist-sale">
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <div
                                                className={`${classes.row} subnavlist-content`}
                                                style={{
                                                    borderRight: `1px solid ${props.theme.palette.primary.line}`,
                                                }}
                                            >
                                                <a
                                                    href=""
                                                    className="title-content"
                                                >
                                                    Deal of the week
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Living seating
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Stydy table
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Beds
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Dinging
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Sofa
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Woman
                                                </a>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div
                                                className={`${classes.row} subnavlist-content`}
                                                style={{
                                                    borderRight: `1px solid ${props.theme.palette.primary.line}`,
                                                }}
                                            >
                                                <a
                                                    href=""
                                                    className="title-content"
                                                >
                                                    Deal of the week
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Living seating
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Stydy table
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Beds
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Dinging
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Sofa
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Woman
                                                </a>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div
                                                className={`${classes.row} subnavlist-content`}
                                            >
                                                <a
                                                    href=""
                                                    className="title-content"
                                                >
                                                    Deal of the week
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Living seating
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Stydy table
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Beds
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Dinging
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Sofa
                                                </a>
                                                <a
                                                    href=""
                                                    className="link-content"
                                                >
                                                    Woman
                                                </a>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        ))}

                    {/* <div className="navigation-item"><a href="" className="item">Living</a></div>
                <div className="navigation-item"><a href="" className="item">Bedroom</a></div>
                <div className="navigation-item"><a href="" className="item">Dinning</a></div>
                <div className="navigation-item"><a href="" className="item">Storage</a></div>
                <div className="navigation-item"><a href="" className="item">Study</a></div>
                <div className="navigation-item"><a href="" className="item">Kidsroom</a></div>
                <div className="navigation-item"><a href="" className="item">Mattesses</a></div>
                <div className="navigation-item"><a href="" className="item">Decor</a></div>
                <div className="navigation-item"><a href="" className="item">Collection</a></div> */}
                </div>
            </section>
        </>
    )
}
export default withTheme(Navigation)

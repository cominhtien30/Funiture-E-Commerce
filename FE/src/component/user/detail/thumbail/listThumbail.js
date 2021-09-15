// @flow
import React from 'react'
import styles from './listThumbail.style'
import { withTheme } from '@material-ui/core/styles'
// import NavPages from '../../navPages/navPage'
// import ReactImageMagnify from 'react-image-magnify'

// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Grid } from '@material-ui/core'
// import ColorFilter from '../../products/filter/colors/colors'

const Detail = (props) => {
    const classes = styles()
    const { listImg, changeimg, chooseThumbail } = props

    return (
        <>
            {listImg.map((item, index) => {
                return (
                    <Grid xs={2} item key={index}>
                        {' '}
                        <div
                            onClick={() => changeimg(index)}
                            className={`${classes.thumbail} product-image-thumbnail`}
                        >
                            <img
                                className={`img ${
                                    index === chooseThumbail
                                        ? 'active'
                                        : ''
                                }`}
                                src={item}
                                alt=""
                            />
                        </div>
                    </Grid>
                )
            })}
        </>
    )
}
export default withTheme(Detail)

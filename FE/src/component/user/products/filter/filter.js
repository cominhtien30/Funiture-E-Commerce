// @flow
import React from 'react'
import styles from './filter.style'
import Colors from './colors/colors'
import Price from './prices/price'
import { withTheme } from '@material-ui/core/styles'

const filter = ({ colors }) => {
    const classes = styles()
    console.log(colors, 'colors')
    return (
        <>
            <div className={`${classes.root} filter-product`}>
                <Colors colors={colors} />
                <Price />
            </div>
        </>
    )
}
export default withTheme(filter)

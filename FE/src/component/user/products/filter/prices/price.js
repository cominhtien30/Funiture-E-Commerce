// @flow
import React from 'react'
import styles from './price.style'
import { withTheme } from '@material-ui/core/styles'

const Price = () => {
    const classes = styles()
    return (
        <>
            <div
                className={`${classes.root} row lineBottom filter-color mt-4`}
            >
                <div className="title-filter">Price</div>
                <div className="list-filter row d-flex mt-4">
                    <div className="option-price d-flex justify-content-between">
                        <span className="price">Dưới 500k</span>{' '}
                        <div className="count-price">5</div>
                    </div>
                    <div className="option-price d-flex justify-content-between">
                        <span className="price">
                            1 triệu - 2 triệu
                        </span>{' '}
                        <div className="count-price">3</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withTheme(Price)

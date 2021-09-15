// @flow
import React from 'react'
import styles from './processStep.style'

const navPage = () => {
    const classes = styles()
    return (
        <>
            <div
                className={`${classes.root} d-flex justify-content-center mt-5 mb-4`}
            >
                <a className="item-step avtive" href="">
                    1. Cart{' '}
                </a>
                <a className="item-step" href="">
                    2. Address{' '}
                </a>
                <a className="item-step" href="">
                    3. Payment
                </a>
            </div>
        </>
    )
}
export default navPage

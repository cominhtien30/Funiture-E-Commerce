// @flow
import React from 'react'
import styles from './navPage.style'

const navPage = () => {
    const classes = styles()
    return (
        <>
            <nav className={`${classes.navPage} path-page  row mb-3`}>
                <div className="col-4 d-flex justify-space-between">
                    <a href="" className="item-patch">
                        Furniture Home
                    </a>
                    <a href="" className="item-patch">
                        Bedroom Furniture
                    </a>
                    <a href="" className="item-patch">
                        Bed
                    </a>
                    <a href="" className="item-patch active">
                        Beds with Storage
                    </a>
                </div>
            </nav>
        </>
    )
}
export default navPage

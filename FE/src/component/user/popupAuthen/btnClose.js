// @flow
import React from 'react'

const btnClose = ({ handleClearPopup }) => {
    return (
        <div
            className="close-form align-self-end"
            onClick={handleClearPopup}
        >
            <a href="#javascript()">
                <i className="fa fa-times"></i>
            </a>
        </div>
    )
}
export default btnClose

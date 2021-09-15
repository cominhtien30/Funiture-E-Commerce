// @flow
import React from 'react'
import { withTheme } from '@material-ui/core/styles'

const overlay = (props) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                zIndex: props.theme.zIndex.tooltip,
            }}
        ></div>
    )
}
export default withTheme(overlay)

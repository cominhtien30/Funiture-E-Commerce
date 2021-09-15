// @flow
import * as React from 'react'
import { BoxLoading } from 'react-loadingg'
import { withTheme } from '@material-ui/core/styles'

const index = ({ theme }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: theme.palette.primary.main,
                zIndex: 999999,
            }}
        >
            <BoxLoading color="#FFFFFF" size="large" />
        </div>
    )
}
export default withTheme(index)

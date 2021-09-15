// @flow
import * as React from 'react'
import { CoffeeLoading } from 'react-loadingg'
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
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 999999,
            }}
        >
            <CoffeeLoading
                color={theme.palette.primary.main}
                size="large"
            />
        </div>
    )
}
export default withTheme(index)

import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import useTheme from '@material-ui/core/styles/useTheme'

export default function Title(props) {
    return (
        <Typography
            component="h2"
            variant="h6"
            style={{ color: useTheme().palette.primary.main }}
            gutterBottom
        >
            {props.children}
        </Typography>
    )
}

Title.propTypes = {
    children: PropTypes.node,
}

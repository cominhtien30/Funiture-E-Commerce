// @flow
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'

const Products = ({ totalPages, query }) => {
    //theme
    //requestListProducts
    const navigate = useNavigate()
    let location = useLocation()

    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: '50px',
            '& .Mui-selected': {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                // backgroundColor: 'rgba(255, 152, 0, 0.5)',
            },
        },
    }))
    const handleChange = (page) => {
        navigate({ search: `?api=${query}&page=${page - 1}` })
    }

    const classes = useStyles()
    return (
        <>
            <Pagination
                // style={{ color: theme.palette.primary.main }}

                onChange={(e, page) => handleChange(page)}
                className={classes.root}
                count={totalPages}
                variant="outlined"
                page={
                    parseInt(
                        new URLSearchParams(location.search).get(
                            'page',
                        ),
                    ) + 1 || 1
                }
            />
        </>
    )
}
export default withTheme(Products)

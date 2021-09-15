// @flow
import React, { useState, useEffect } from 'react'
import styles from './cart.style'
import { withTheme } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'
import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import {
    Typography,
    // TextField
} from '@material-ui/core'
import none from '../../../assets/images/logo/none.png'

const DataCart = ({
    cart,
    theme,
    deleteItemCart,
    updateItemCart,
}) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [cart])
    const classes = styles()

    const updateHandle = (id, quantity) => {
        quantity >= 1 && updateItemCart(id, quantity)
    }

    // styles row image
    const cellImage = (img) => {
        const style = {
            objectFit: 'cover',
            width: '60px',
            height: '40px',
        }
        return <img src={img} style={style} />
    }
    const cellColor = (color) => {
        const style = {
            backgroundColor: color,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
        }
        return <div style={style} />
    }
    const cellAction = (id) => {
        return (
            <>
                <a
                    onClick={() => deleteItemCart(id)}
                    href="#javascript()"
                    className="d-flex justify-content-center"
                >
                    <i
                        className="fa fa-trash"
                        style={{ color: 'red' }}
                    ></i>
                </a>
            </>
        )
    }
    // cellQuantity
    const cellQuantity = (id, quantity) => {
        return (
            <>
                <div
                    className={`d-flex justify-content-around p-2 ${classes.sectionUpdate}`}
                >
                    <span
                        className="btnUpdate down d-flex justify-content-center align-items-center"
                        onClick={() => updateHandle(id, quantity - 1)}
                    >
                        -
                    </span>
                    <Typography
                        variant="body1"
                        style={{
                            fontWeight: 500,
                            color: 'black',
                            padding: '0 8px',
                        }}
                    >
                        {quantity}
                    </Typography>
                    <span
                        className="btnUpdate up d-flex justify-content-center align-items-center"
                        onClick={() => updateHandle(id, quantity + 1)}
                    >
                        +
                    </span>
                </div>
            </>
        )
    }
    const CustomLoadingOverlay = () => {
        return (
            <GridOverlay>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                    }}
                >
                    <LinearProgress />
                </div>
            </GridOverlay>
        )
    }
    // CustomNoRowsOverlay
    const CustomNoRowsOverlay = () => {
        return (
            <GridOverlay>
                <div className="d-flex  mb-4 flex-column justify-content-between">
                    <img src={none} />
                    <h4
                        className="mt-3"
                        style={{
                            color: theme.palette.primary.title,
                        }}
                    >
                        Cart Empty
                    </h4>
                </div>
            </GridOverlay>
        )
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
        },
        {
            field: 'nameProduct',
            headerName: 'name',
            width: 210,
        },
        {
            field: 'pictures',
            headerName: 'image',
            width: 140,
            renderCell: (param) => {
                return cellImage(param.row.pictures)
            },
        },
        {
            field: 'price',
            headerName: 'price',
            type: 'number',
            width: 120,
        },
        {
            field: 'quantity',
            headerName: 'quantity',
            type: 'number',
            width: 120,
            renderCell: (param) => {
                return cellQuantity(param.row.id, param.row.quantity)
            },
        },
        {
            field: 'color',
            headerName: 'color',
            type: 'number',
            width: 130,
            renderCell: (param) => {
                return cellColor(param.row.color)
            },
        },
        {
            field: 'col8',
            headerName: 'Action',
            width: 110,
            align: 'center',
            renderCell: (param) => {
                return cellAction(param.row.id)
            },
        },
    ]

    const rows = cart.map((item) => ({
        id: item.id,
        nameProduct: item.nameProduct,
        price: item.price,
        pictures: item.picturesZero,
        quantity: item.quantity,
        color: item.color,
    }))
    console.log(cart, 'cart')
    return (
        <>
            <div
                className="d-flex table-cart  mt-4 mb-4"
                style={{
                    minHeight: '400px',
                    width: '100%',
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    disableSelectionOnClick
                    hideFooter
                    disableColumnFilter
                    disableColumnMenu
                    hideFooterRowCount
                    hideFooterSelectedRowCount
                    hideFooterPagination
                    loading={loading}
                    components={{
                        LoadingOverlay: CustomLoadingOverlay,
                        NoRowsOverlay: CustomNoRowsOverlay,
                    }}
                    // loading
                />
            </div>
        </>
    )
}
export default withTheme(DataCart)

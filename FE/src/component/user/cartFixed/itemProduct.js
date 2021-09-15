// @flow
import React from 'react'
import styles from './cartFixed.style'
import { withTheme } from '@material-ui/core/styles'
import {
    Typography,
    // TextField
} from '@material-ui/core'

const ItemProduct = ({
    theme,
    id,
    nameProduct,
    pictures,
    price,
    quantity,
    deleteItemCart,
    updateItemCart,
}) => {
    const classes = styles()
    const updateHandle = (quantity) => {
        quantity >= 1 && updateItemCart(id, quantity)
    }
    return (
        <div
            className="d-flex item-product m-2"
            style={{
                borderBottom: `1px solid ${theme.palette.primary.line}`,
            }}
        >
            <div className="info d-flex  align-items-center">
                <img
                    style={{
                        height: '88px',
                        width: '88px',
                    }}
                    src={pictures}
                    alt=""
                />
            </div>
            <div className="info d-flex justify-content-around align-items-center w-100">
                <div className="d-flex flex-column justify-content-around h-100">
                    <Typography
                        variant="body1"
                        style={{
                            fontWeight: 600,
                        }}
                    >
                        {nameProduct}
                    </Typography>
                    <div
                        className={`d-flex justify-content-around p-2 ${classes.sectionUpdate}`}
                    >
                        <div
                            className="btnUpdate down"
                            onClick={() => updateHandle(quantity - 1)}
                        >
                            -
                        </div>
                        <Typography
                            variant="body1"
                            style={{
                                fontWeight: 600,
                                color: 'black',
                                padding: '0 8px',
                            }}
                        >
                            {quantity}
                        </Typography>
                        <div
                            className="btnUpdate up"
                            onClick={() => updateHandle(quantity + 1)}
                        >
                            +
                        </div>
                    </div>
                </div>
                <Typography
                    variant="body2"
                    style={{
                        fontWeight: 600,
                    }}
                >
                    {price}$
                </Typography>
                <span onClick={() => deleteItemCart(id)}>
                    <i
                        style={{
                            color: 'red',
                            marginTop: '5px',
                            cursor: 'pointer',
                        }}
                        className="fa fa-times-circle"
                    ></i>
                </span>
            </div>
        </div>
    )
}
export default withTheme(ItemProduct)

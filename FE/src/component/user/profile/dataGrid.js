// @flow
import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'
import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import styles from './styles'
import none from '../../../assets/images/logo/none.png'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import {
    Typography,
    // TextField
} from '@material-ui/core'

const DataCart = ({ bill, theme }) => {
    const classes = styles()
    const [openModal, setOpenModal] = React.useState({
        open: false,
        detailBill: {},
    })
    const handleChangeModal = (isOpen) => {
        setOpenModal(isOpen)
    }
    const handleDetail = (params) => {
        const { id } = params?.row
        const billDetail = bill.filter((item) => item.id === id)[0]
        handleChangeModal({
            open: true,
            billDetail,
        })
    }

    const cellStatus = (text) => {
        const status = text.toLowerCase()
        switch (status) {
            case 'success':
                return (
                    <>
                        <h6 className="d-flex text-success">
                            {status}
                        </h6>
                    </>
                )
            case 'danger':
                return (
                    <>
                        <h6 className="d-flex text-danger">
                            {status}
                        </h6>
                    </>
                )
            default:
                return (
                    <>
                        <h6 className="d-flex text-warning">
                            {status}
                        </h6>
                    </>
                )
        }
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
            field: 'totalMoney',
            headerName: 'total',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'status',
            width: 160,
            renderCell: (param) => {
                return cellStatus(param.row.status)
            },
        },
        {
            field: 'address',
            headerName: 'address',

            width: 240,
        },
        {
            field: 'numberPhone',
            headerName: 'numberPhone',
            width: 220,
        },
    ]

    const rows = bill.map((order) => ({
        id: order?.id,
        totalMoney: order?.totalMoney + ' VND',
        status: order?.status,
        address: order?.addresss,
        numberPhone: order?.numberPhone,
    }))
    console.log(openModal?.billDetail?.productsList, 'productsList')
    return (
        <>
            <div
                className="d-flex table-cart  mt-4 mb-4 datagrid-order"
                style={{
                    minHeight: '400px',
                    width: '100%',
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    hideFooter
                    disableColumnFilter
                    disableColumnMenu
                    onRowClick={handleDetail}
                    //loading
                    components={{
                        LoadingOverlay: CustomLoadingOverlay,
                        NoRowsOverlay: CustomNoRowsOverlay,
                    }}
                    // loading
                />
            </div>
            <Modal
                open={openModal.open}
                onClose={() =>
                    handleChangeModal({
                        open: false,
                        billDetail: {},
                    })
                }
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper
                    style={{
                        width: '60%',
                        margin: '8% auto',
                    }}
                >
                    <Grid item xs={12} md={12} lg={12}>
                        {openModal?.billDetail?.productsList &&
                            openModal?.billDetail?.productsList.map(
                                (product, index) => {
                                    return (
                                        <div
                                            key={index}
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
                                                    src={
                                                        product?.picturesZero
                                                    }
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
                                                        {
                                                            product?.nameProduct
                                                        }
                                                    </Typography>
                                                    <div
                                                        className={`d-flex justify-content-around p-2 ${classes.sectionUpdate}`}
                                                    >
                                                        <Typography
                                                            variant="body1"
                                                            style={{
                                                                fontWeight: 600,
                                                                color: 'black',
                                                                padding:
                                                                    '0 8px',
                                                            }}
                                                        >
                                                            {
                                                                product
                                                                    ?.orders
                                                                    ?.quantity
                                                            }
                                                        </Typography>
                                                    </div>
                                                </div>
                                                <Typography
                                                    variant="body2"
                                                    style={{
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {product?.price *
                                                        product
                                                            ?.orders
                                                            ?.quantity}{' '}
                                                    VND
                                                </Typography>
                                            </div>
                                        </div>
                                    )
                                },
                            )}
                    </Grid>
                </Paper>
            </Modal>
        </>
    )
}
export default withTheme(DataCart)

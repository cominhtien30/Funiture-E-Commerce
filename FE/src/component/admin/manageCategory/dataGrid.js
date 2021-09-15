import React, { useState } from 'react'
import {
    DataGrid,
    GridOverlay,
    GridToolbarExport,
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarFilterButton,
} from '@mui/x-data-grid'
import { makeStyles } from '@material-ui/styles'
import { LinearProgress } from '@material-ui/core'
import { withTheme } from '@material-ui/core'
import DialogDelete from './dialogDelete'

const DataGridProduct = ({
    theme,
    handleChangeModal,
    categorys,
    deleteCategory,
}) => {
    const [openDialog, setOpenDialog] = useState({
        open: false,
        id: null,
    })
    // when open diaglog , will set open:true and id:id_Category
    const handleOpenDialog = (open, id = null) => {
        setOpenDialog({ ...openDialog, open, id })
    }
    // render cell
    const cellImage = (img) => {
        const style = {
            objectFit: 'cover',
        }
        return <img src={img} style={style} />
    }
    const cellAction = (id) => {
        return (
            <div className="d-flex justify-content-between">
                <a
                    onClick={() => handleChangeModal(true, id)}
                    href="#javasctipt()"
                    style={{
                        color: 'green',
                        margin: '0 5px',
                    }}
                >
                    <i className="fa fa-eye"></i>
                </a>
                <a
                    href="#javasctipt()"
                    onClick={() => handleOpenDialog(true, id)}
                    style={{
                        color: 'red',
                        margin: '0 5px',
                    }}
                >
                    <i className="fa fa-trash"></i>
                </a>
            </div>
        )
    }
    // -----------------------------------------
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
                    <h4
                        className="mt-3"
                        style={{
                            color: theme.palette.primary.title,
                        }}
                    >
                        Product Empty
                    </h4>
                </div>
            </GridOverlay>
        )
    }

    // render column
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
        },
        {
            field: 'name',
            headerName: 'name',
            width: 360,
        },
        {
            field: 'typeproducts',
            headerName: 'image',
            width: 220,
            renderCell: (param) => {
                return cellImage(param.row.typeproducts)
            },
        },
        {
            field: 'col8',
            headerName: 'Action',
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderCell: (param) => {
                return cellAction(param.row.id)
            },
        },
    ]
    // ------------------

    // send data to rows
    const rows = categorys.map((item) => ({
        id: item.id,
        name: item.nameTypeProduct,
        typeproducts: item.imagesTypeProduct,
    }))
    const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    pageSize={7}
                    disableSelectionOnClick
                    components={{
                        Toolbar: CustomToolbar,

                        LoadingOverlay: CustomLoadingOverlay,
                        NoRowsOverlay: CustomNoRowsOverlay,
                    }}
                    // loading
                />
            </div>
            <DialogDelete
                openDialog={openDialog}
                handleOpenDialog={handleOpenDialog}
                deleteCategory={deleteCategory}
            />
        </>
    )
}
function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
        </GridToolbarContainer>
    )
}
// styles
const useStyles = makeStyles(() => ({
    root: {
        '& .MuiButton-text': {
            backgroundColor: 'white',
        },
    },
}))
export default withTheme(DataGridProduct)

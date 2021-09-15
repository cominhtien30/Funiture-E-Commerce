import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Title from '../../component/admin/title'
import DataGridManagerProduct from '../../component/admin/manageProducts/dataGrid'
import FormAdd from '../../component/admin/manageProducts/formAdd'
import Modal from '@material-ui/core/Modal'

export default function Dashboard({
    products,
    requestListProducts,
    categorys,
    requestListCategorys,
    addProducts,
    requestDetailProduct,
    updateProduct,
    deleteProduct,
}) {
    //requestListProducts
    useEffect(() => {
        requestListProducts()
        requestListCategorys()
    }, [requestListProducts])
    const [checked, setChecked] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev)
    }
    // modal
    const handleChangeModal = (open) => {
        setOpenModal(open)
    }

    return (
        <>
            <Grid container spacing={3} alignItems="center">
                {/* Chart */}
                <Grid item xs={12} md={12} lg={12}>
                    <Paper>
                        <Grid
                            container
                            justifyContent="space-between"
                        >
                            <Title>Products Manage</Title>
                            <FormControlLabel
                                control={
                                    <Switch
                                        size="medium"
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                }
                                label="Add New Product"
                            />
                        </Grid>
                        <DataGridManagerProduct
                            requestDetailProduct={
                                requestDetailProduct
                            }
                            handleChangeModal={handleChangeModal}
                            products={products}
                            deleteProduct={deleteProduct}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Collapse in={checked}>
                        <Paper>
                            <Title>Add New Product</Title>
                            <Grid container>
                                <FormAdd
                                    action="add"
                                    colors={products?.colors}
                                    categorys={categorys}
                                    addProducts={addProducts}
                                    handleChangeSwitch={handleChange}
                                />
                            </Grid>
                        </Paper>
                    </Collapse>
                </Grid>
            </Grid>
            <Modal
                open={openModal}
                onClose={() => handleChangeModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper
                    style={{
                        width: '60%',
                        margin: 'auto',
                    }}
                >
                    <Grid item xs={12} md={12} lg={12}>
                        <FormAdd
                            // handleModal={handleModal}
                            handleChangeModal={handleChangeModal}
                            action="edit"
                            colors={products?.colors}
                            categorys={categorys}
                            product={products?.detail}
                            updateProduct={updateProduct}
                        />
                    </Grid>
                </Paper>
            </Modal>
        </>
    )
}

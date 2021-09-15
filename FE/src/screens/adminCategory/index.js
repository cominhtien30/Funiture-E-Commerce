import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Title from '../../component/admin/title'
import DataGridManagerCategory from '../../component/admin/manageCategory/dataGrid'
import FormAdd from '../../component/admin/manageCategory/formAdd'
import Modal from '@material-ui/core/Modal'

export default function AdminCategory({
    categorys,
    requestListCategorys,
    addCategorys,
    requestDetailCategory,
    deleteCategory,
    updateCategory,
}) {
    //requestListProducts
    useEffect(() => {
        requestListCategorys()
    }, [requestListCategorys])
    const [checked, setChecked] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    // const [detail, setDetail] = React.useState({})
    const handleChange = (open) => {
        setChecked(open)
    }
    // modal
    const handleChangeModal = (open, idCat) => {
        setOpenModal(open)
        open && requestDetailCategory(idCat)
    }
    const handleModal = (open) => {
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
                            <Title>Categorys Manage</Title>
                            <FormControlLabel
                                control={
                                    <Switch
                                        size="medium"
                                        checked={checked}
                                        onChange={() =>
                                            handleChange(!checked)
                                        }
                                    />
                                }
                                label="Add New Category"
                            />
                        </Grid>
                        <DataGridManagerCategory
                            handleChangeModal={handleChangeModal}
                            categorys={categorys.listCategory}
                            deleteCategory={deleteCategory}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Collapse in={checked}>
                        <Paper>
                            <Title>Add New Category</Title>
                            <Grid container>
                                <FormAdd
                                    action="add"
                                    addCategorys={addCategorys}
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
                        margin: '8% auto',
                    }}
                >
                    <Grid item xs={12} md={12} lg={12}>
                        <FormAdd
                            action="edit"
                            handleModal={handleModal}
                            category={categorys?.detail}
                            updateCategory={updateCategory}
                        />
                    </Grid>
                </Paper>
            </Modal>
        </>
    )
}

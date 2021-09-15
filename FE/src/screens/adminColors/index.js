import React, { useState, useEffect, useCallback } from 'react'
// import Box from '@material-ui/core/Box'
import { Button, Paper, Grid } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import AddIcon from '@material-ui/icons/Add'
import styles from './adminColors.style'
import api from '../../utils/api'
import { useDispatch } from 'react-redux'
import { loadingChange } from '../../redux/actions/loadingAction'
import { alertChange } from '../../redux/actions/alertAction'
import authService from '../../utils/AuthService'
// import Collapse from '@material-ui/core/Collapse'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Switch from '@material-ui/core/Switch'
// import Title from '../../component/admin/title'
// import DataGridManagerCategory from '../../component/admin/manageCategory/dataGrid'
// import FormAdd from '../../component/admin/manageCategory/formAdd'
// import Modal from '@material-ui/core/Modal'

export default function AdminColor() {
    //requestListProducts
    const dispatch = useDispatch()
    const classes = styles()
    const [oldColors, setOldColors] = useState([])
    const [newColors, setNewColors] = useState([])
    const [products, setProduct] = useState([])
    useEffect(() => {
        getAllColors()
        getAllProduct()
    }, [])
    const getAllColors = useCallback(() => {
        dispatch(loadingChange(true))
        api.get('color/get-all-color')
            .then((res) => setOldColors(res.data))
            .then(() => dispatch(loadingChange(false)))
    }, [oldColors])
    const getAllProduct = () => {
        api.get('product/get-all-products').then((res) =>
            setProduct(res.data),
        )
    }

    console.log(products, 'getAllProduct')
    const addNewColor = () => {
        setNewColors([
            ...newColors,
            {
                nameColor: '',
                colorCode: '#fff',
            },
        ])
    }
    const onChangeOldColor = (e, index) => {
        const { name, value } = e.target //name
        let newArray = [...oldColors]
        newArray[index] = { ...newArray[index], [name]: value }
        setOldColors(newArray)
    }
    const onChangeNewColor = (e, index) => {
        const { name, value } = e.target //name
        let newArray = [...newColors]
        newArray[index] = { ...newArray[index], [name]: value }
        setNewColors(newArray)
    }
    const deleteNewColor = (index) => {
        let newArray = [...newColors]
        newArray.splice(index, 1)
        setNewColors(newArray)
    }
    const deleteOldColor = (index) => {
        let newArray = [...oldColors]
        newArray.splice(index, 1)
        setOldColors(newArray)
    }
    const submitHandle = () => {
        let check = true
        const checkNew =
            newColors.length > 0
                ? !newColors.every(
                      (item) =>
                          item.nameColor === '' ||
                          item.colorCode === '',
                  )
                : true
        const checkOld = !oldColors.every(
            (item) => item.nameColor === '' || item.colorCode === '',
        )
        if (!checkNew || !checkOld) {
            check = false
        }

        if (!check) {
            dispatch(
                alertChange({
                    open: true,
                    notice: false,
                    patch: '',
                    status: 'handle',
                    message:
                        'không được bỏ trống,  kiểm tra lại thẻ !',
                }),
            )
        } else {
            api.post(
                'color/create-update-multiple-color',
                { oldColors, newColors },
                authService.headerToken(),
            ).then((res) => res.status === 200 && getAllColors())
        }
    }
    return (
        <>
            <Grid container>
                <Paper style={{ width: '100%', overflowX: 'hidden' }}>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        alignItems="center"
                        style={{
                            maxHeight: '420px',
                            padding: '4px',
                        }}
                    >
                        <Grid
                            container
                            spacing={4}
                            wrap="wrap"
                            alignItems="center"
                        >
                            {oldColors.map((color, index) => {
                                return (
                                    <Grid
                                        key={index}
                                        item
                                        xs={6}
                                        md={4}
                                        lg={2}
                                        alignItems="center"
                                        style={{ height: '62px' }}
                                    >
                                        <Grid
                                            container
                                            alignItems="center"
                                        >
                                            <div
                                                className={`${classes.itemColor} d-flex justify-content-between align-items-center item__color`}
                                            >
                                                <input
                                                    required
                                                    placeholder="Name Color"
                                                    type="text"
                                                    value={
                                                        color?.nameColor
                                                    }
                                                    onChange={(e) =>
                                                        onChangeOldColor(
                                                            e,
                                                            index,
                                                        )
                                                    }
                                                    name="nameColor"
                                                    className="item__input item__color__name"
                                                />
                                                <input
                                                    required
                                                    onChange={(e) =>
                                                        onChangeOldColor(
                                                            e,
                                                            index,
                                                        )
                                                    }
                                                    name="colorCode"
                                                    type="color"
                                                    value={
                                                        color?.colorCode
                                                    }
                                                    className="item__input item__color__input"
                                                />
                                            </div>

                                            {products.some(
                                                (item) =>
                                                    item?.colorProductsID ===
                                                    color?.id,
                                            ) ? (
                                                <i
                                                    className={`fa fa-check-circle  ${classes.iconChecked}`}
                                                ></i>
                                            ) : (
                                                <i
                                                    onClick={() =>
                                                        deleteOldColor(
                                                            index,
                                                        )
                                                    }
                                                    className={`fa fa-minus-circle ${classes.iconDelete}`}
                                                ></i>
                                            )}
                                        </Grid>
                                    </Grid>
                                )
                            })}
                            {newColors.map((item, index) => {
                                return (
                                    <Grid
                                        key={index}
                                        item
                                        xs={6}
                                        md={4}
                                        lg={2}
                                        alignItems="center"
                                        style={{ height: '62px' }}
                                    >
                                        <Grid
                                            container
                                            alignItems="center"
                                        >
                                            <div
                                                className={`${classes.itemColor} d-flex justify-content-between align-items-center item__color`}
                                            >
                                                <input
                                                    required
                                                    onChange={(e) =>
                                                        onChangeNewColor(
                                                            e,
                                                            index,
                                                        )
                                                    }
                                                    name="nameColor"
                                                    placeholder="Name Color"
                                                    type="text"
                                                    value={
                                                        item?.nameColor
                                                    }
                                                    className="item__input item__color__name"
                                                />
                                                <input
                                                    required
                                                    onChange={(e) =>
                                                        onChangeNewColor(
                                                            e,
                                                            index,
                                                        )
                                                    }
                                                    name="colorCode"
                                                    type="color"
                                                    value={
                                                        item?.colorCode
                                                    }
                                                    className="item__input item__color__input"
                                                />
                                            </div>
                                            <i
                                                onClick={() =>
                                                    deleteNewColor(
                                                        index,
                                                    )
                                                }
                                                className={`fa fa-minus-circle ${classes.iconDelete}`}
                                            ></i>
                                        </Grid>
                                    </Grid>
                                )
                            })}

                            <Grid
                                item
                                xs={1}
                                md={1}
                                lg={1}
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <Button
                                    startIcon={<AddIcon />}
                                    onClick={addNewColor}
                                >
                                    Color
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid
                    container
                    justifyContent="flex-end"
                    alignItems="center"
                    style={{
                        margin: '10px 0',
                        transition: 'all .3s',
                    }}
                >
                    <Button
                        onClick={submitHandle}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

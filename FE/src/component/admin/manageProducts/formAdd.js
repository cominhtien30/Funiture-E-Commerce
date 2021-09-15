import React, { useRef, useEffect, useState } from 'react' //useEffect, useState
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Avatar from '@material-ui/core/Avatar'

import Select from '@material-ui/core/Select'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Title from '../../admin/title'
import { withTheme } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import { useFormik } from 'formik'
import {
    validationAddProduct,
    validationUpdateProduct,
} from '../../../utils/validation'

function FormAdd({
    action,
    categorys,
    addProducts,
    handleChangeSwitch,
    colors,
    product,
    theme,
    updateProduct,
    handleChangeModal,
}) {
    //addProducts
    const [image, setImage] = useState(null)
    const [openColor, setOpenColor] = React.useState(false)
    const [openCategory, setOpenCategory] = React.useState(false)
    const formik = useFormik({
        initialValues: {
            nameProduct: ``,
            image: '',
            description: '',
            productFlowTypeID: '',
            price: '',
            colorProductsID: '',
            quantityProducts: '',
        },
        validationSchema:
            action === 'edit'
                ? validationUpdateProduct
                : validationAddProduct,
        onSubmit: (values) => {
            const formData = new FormData()
            formData.append('nameProduct', values.nameProduct)
            formData.append('products', values.image)
            formData.append('description', values.description)
            formData.append('price', values.price)
            formData.append(
                'quantityProducts',
                values.quantityProducts,
            )

            formData.append(
                'productFlowTypeID',
                values.productFlowTypeID,
            )
            formData.append('colorProductsID', values.colorProductsID)
            formData.append('color', '#76ff03')
            handleSubmit(formData)
        },
    })
    useEffect(() => {
        if (action === 'edit') {
            //render iamge
            setImage(product?.pictures)
            //set nameTypeProduct from state category to formik value
            formik.setFieldValue('nameProduct', product.nameProduct)
            formik.setFieldValue('image', product.pictures)
            formik.setFieldValue('description', product.description)
            formik.setFieldValue(
                'productFlowTypeID',
                product.productFlowTypeID,
            )
            formik.setFieldValue('price', product.price)
            formik.setFieldValue(
                'colorProductsID',
                product.colorProductsID,
            )
            formik.setFieldValue(
                'quantityProducts',
                product.quantityProducts,
            )
        }
    }, [product])

    const ref = useRef() //use ref to reset input

    const handleSubmit = async (formData) => {
        ref.current.value = null
        formik.resetForm()
        if (action === 'edit') {
            await updateProduct(product?.id, formData) //action add update
            // handleModal(false)
            handleChangeModal(false)
        } else {
            await addProducts(formData) //action add category
            handleChangeSwitch(false)
        }
        // reset
    }
    const handleChange = (name, file) => {
        // load image when change
        var loadImage = window.URL.createObjectURL(file)
        setImage(loadImage)
        // set
        formik.setFieldValue(name, file) //set formik image
    }

    return (
        <>
            {action === 'edit' ? (
                <Grid xs={12} sm={6} md={3} item>
                    <Title>Update Product</Title>
                </Grid>
            ) : (
                ''
            )}
            <form
                onSubmit={formik.handleSubmit}
                className="d-flex justify-content-center align-items-center w-100 p-5 border border-1 mt-3"
            >
                <div className="d-flex flex-wrap">
                    <Avatar
                        src={image}
                        style={{
                            color: 'white',
                            backgroundColor:
                                theme.palette.primary.main,
                            width: '120px',
                            height: '120px',
                            margin: 'auto',
                        }}
                    >
                        N
                    </Avatar>
                    <TextField
                        fullWidth
                        id="standard-basic"
                        label="Name"
                        margin="normal"
                        name="nameProduct"
                        onChange={formik.handleChange}
                        value={formik.values.nameProduct}
                        error={
                            formik.touched.nameProduct &&
                            formik.errors.nameProduct
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.nameProduct &&
                            formik.errors.nameProduct
                                ? formik.errors.nameProduct
                                : ''
                        }
                    />
                    <TextField
                        fullWidth
                        id="standard-basic"
                        label="Discription"
                        margin="normal"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        error={
                            formik.touched.description &&
                            formik.errors.description
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.description &&
                            formik.errors.description
                                ? formik.errors.description
                                : ''
                        }
                    />
                    <Grid container>
                        <Grid xs={12} sm={6} md={6} item>
                            <TextField
                                fullWidth
                                id="standard-basic"
                                label="Quantity"
                                type="number"
                                margin="normal"
                                name="quantityProducts"
                                onChange={formik.handleChange}
                                value={formik.values.quantityProducts}
                                error={
                                    formik.touched.quantityProducts &&
                                    formik.errors.quantityProducts
                                        ? true
                                        : false
                                }
                                helperText={
                                    formik.touched.quantityProducts &&
                                    formik.errors.quantityProducts
                                        ? formik.errors
                                              .quantityProducts
                                        : ''
                                }
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={6} item>
                            <TextField
                                fullWidth
                                id="standard-basic"
                                label="Price"
                                type="number"
                                margin="normal"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                error={
                                    formik.touched.price &&
                                    formik.errors.price
                                        ? true
                                        : false
                                }
                                helperText={
                                    formik.touched.price &&
                                    formik.errors.price
                                        ? formik.errors.price
                                        : ''
                                }
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={6} item>
                            <FormControl
                                margin="normal"
                                style={{
                                    width: '100%',
                                }}
                            >
                                <InputLabel id="demo-controlled-open-select-label">
                                    Colors
                                </InputLabel>
                                <Select
                                    style={{
                                        height: '32px',
                                    }}
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={openColor}
                                    onClose={() =>
                                        setOpenColor(false)
                                    }
                                    onOpen={() => setOpenColor(true)}
                                    name="colorProductsID"
                                    onChange={formik.handleChange}
                                    value={
                                        formik.values.colorProductsID
                                    }
                                    error={
                                        formik.touched
                                            .colorProductsID &&
                                        formik.errors.colorProductsID
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        formik.touched
                                            .colorProductsID &&
                                        formik.errors.colorProductsID
                                            ? formik.errors
                                                  .colorProductsID
                                            : ''
                                    }
                                    MenuProps={MenuProps}
                                >
                                    {colors.map((item, index) => {
                                        return (
                                            <MenuItem
                                                value={item?.id}
                                                key={index}
                                            >
                                                <em>
                                                    {item?.nameColor}
                                                </em>
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={6} item>
                            <FormControl
                                margin="normal"
                                style={{
                                    width: '100%',
                                }}
                            >
                                <InputLabel id="demo-controlled-open-select-label">
                                    Category
                                </InputLabel>
                                <Select
                                    style={{
                                        height: '32px',
                                    }}
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={openCategory}
                                    onClose={() =>
                                        setOpenCategory(false)
                                    }
                                    onOpen={() =>
                                        setOpenCategory(true)
                                    }
                                    name="productFlowTypeID"
                                    onChange={formik.handleChange}
                                    value={
                                        formik.values
                                            .productFlowTypeID
                                    }
                                    error={
                                        formik.touched
                                            .productFlowTypeID &&
                                        formik.errors
                                            .productFlowTypeID
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        formik.touched
                                            .productFlowTypeID &&
                                        formik.errors
                                            .productFlowTypeID
                                            ? formik.errors
                                                  .productFlowTypeID
                                            : ''
                                    }
                                    MenuProps={MenuProps}
                                >
                                    {categorys.map((item, index) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                            >
                                                <em>
                                                    {
                                                        item.nameTypeProduct
                                                    }
                                                </em>
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <TextField
                        inputProps={{
                            style: {
                                minHeight: '40px',
                                lineHeight: '26px',
                            },
                        }}
                        fullWidth
                        id="standard-basic"
                        label="Address"
                        type="file"
                        name="image"
                        innerRef={ref}
                        onChange={(e) =>
                            handleChange(
                                e.target.name,
                                e.target.files[0],
                            )
                        }
                        error={
                            formik.touched.image &&
                            formik.errors.image
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.image &&
                            formik.errors.image
                                ? formik.errors.image
                                : ''
                        }
                        margin="normal"
                    />
                    <div className="m-auto mt-3 mb-3">
                        {action === 'edit' ? (
                            <Button
                                type="submit"
                                startIcon={<EditIcon />}
                            >
                                Update
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                startIcon={<AddCircleOutlineIcon />}
                            >
                                Insert
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </>
    )
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}
export default withTheme(FormAdd)

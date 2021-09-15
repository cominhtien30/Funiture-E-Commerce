import React, { useRef, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Title from '../../admin/title'
import EditIcon from '@material-ui/icons/Edit'
import { withTheme } from '@material-ui/core/styles'
import {
    validationAddCategory,
    validationUpdateCategory,
} from '../../../utils/validation'
import { useFormik } from 'formik'

function FormAdd({
    action,
    addCategorys,
    theme,
    category,
    handleChangeSwitch,
    updateCategory,
    handleModal,
}) {
    const [image, setImage] = useState(null)
    const ref = useRef() //use ref to reset input
    const formik = useFormik({
        initialValues: {
            name: ``,
            image: '',
        },
        validationSchema:
            action === 'edit'
                ? validationUpdateCategory
                : validationAddCategory,
        onSubmit: (values) => {
            const formData = new FormData()
            formData.append('typeproducts', values.image)
            formData.append('nameTypeProduct', values.name)
            // send all formData to action function handleSubmit
            handleSubmit(formData)
        },
    })
    useEffect(() => {
        if (action === 'edit') {
            //render iamge
            setImage(category?.imagesTypeProduct)
            //set nameTypeProduct from state category to formik value
            formik.setFieldValue('name', category.nameTypeProduct)
            formik.setFieldValue('image', category.imagesTypeProduct)
        }
    }, [category])

    //on change input
    const handleChange = (name, file) => {
        // load image when change
        var loadImage = window.URL.createObjectURL(file)
        setImage(loadImage)
        // set
        formik.setFieldValue(name, file) //set formik image
    }
    const handleSubmit = async (formData) => {
        if (action === 'edit') {
            await updateCategory(category?.id, formData) //action add update
            handleModal(false)
        } else {
            await addCategorys(formData) //action add category
        }
        // reset
        handleChangeSwitch(false) //turn off switch
        formik.resetForm()
        setImage(null)
        ref.current.value = null //reset input file
    }
    return (
        <>
            {action === 'edit' ? (
                <Grid xs={12} sm={6} md={3} item>
                    <Title>Update Category</Title>
                </Grid>
            ) : (
                ''
            )}

            <form
                onSubmit={formik.handleSubmit}
                className="d-flex justify-content-center align-items-center w-100 p-5 border border-1 mt-3"
            >
                <div className="d-flex flex-wrap justify-content-center">
                    <Avatar
                        src={image}
                        style={{
                            color: 'white',
                            backgroundColor:
                                theme.palette.primary.main,
                            width: '80px',
                            height: '80px',
                        }}
                    >
                        N
                    </Avatar>
                    <TextField
                        fullWidth
                        id="standard-basic"
                        label="Name"
                        margin="normal"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={
                            formik.touched.name && formik.errors.name
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.name && formik.errors.name
                                ? formik.errors.name
                                : ''
                        }
                    />

                    <TextField
                        inputRef={ref}
                        onChange={(e) =>
                            handleChange(
                                e.target.name,
                                e.target.files[0],
                            )
                        }
                        // value={formik.values.image}
                        inputProps={{
                            style: {
                                minHeight: '40px',
                                lineHeight: '26px',
                            },
                        }}
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
                        name="image"
                        fullWidth
                        id="standard-basic"
                        label="Image"
                        type="file"
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
export default withTheme(FormAdd)

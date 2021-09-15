// @flow
import React, { useState, useEffect } from 'react'
import styles from './detail.style'
import { withTheme } from '@material-ui/core/styles'
import NavPages from '../../component/user/navPages/navPage'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Thumbail from '../../component/user/detail/thumbail/listThumbail'
import { Button, Typography, Grid } from '@material-ui/core'
import ColorFilter from '../../component/user/products/filter/colors/colors'
import CarouselDetail from '../../component/user/detail/carousel'
import FeatureProducts from '../../component/user/featureProducts/featureProduct'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/actions/cartAction'

const Detail = ({ product, requestDetailProduct, theme }) => {
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        requestDetailProduct(id)
    }, [])
    let listImg = [
        product?.picturesZero,
        product?.picturesZero,
        product?.picturesZero,
        product?.picturesZero,
    ]
    const classes = styles()

    const [chooseThumbail, setChooseThumbail] = useState(0)
    const [touch, setTouch] = useState(false)
    const changeimg = (index) => {
        setChooseThumbail(index)
    }
    return (
        <>
            <div
                className={`${classes.root} container-detail width-layout mt-4 mb-4`}
            >
                <NavPages />
                <div className="d-flex justify-content-center mb-4">
                    <Typography variant="caption">
                        Explore Our Furniture Range
                    </Typography>
                </div>
                <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    style={{
                        overflow: `${touch ? 'hidden' : 'unset'},`,
                        marginBottom: '10px',
                    }}
                >
                    <Grid item xs={7}>
                        <Grid
                            container
                            style={{
                                overflow: `${
                                    touch ? 'unset' : 'hidden'
                                }`,
                            }}
                            onMouseMove={() => setTouch(true)}
                            onMouseOut={() => setTouch(false)}
                        >
                            <CarouselDetail
                                listImg={listImg}
                                chooseThumbail={chooseThumbail}
                            />
                        </Grid>
                        <Grid container alignItems="center">
                            <span
                                className="m-3"
                                style={{
                                    fontSize: '13px',
                                    color: theme.palette.primary
                                        .bolid,
                                }}
                            >
                                Zoom :
                            </span>
                        </Grid>
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                        >
                            <Thumbail
                                listImg={listImg}
                                changeimg={changeimg}
                                chooseThumbail={chooseThumbail}
                            />
                        </Grid>
                    </Grid>
                    <Grid xs={5} item>
                        <div className="detail-info d-flex flex-column justify-content-between h-100">
                            <div className="d-flex info-price justify-content-center ">
                                <span className="text-price ">
                                    {product?.price}
                                </span>
                            </div>
                            <div className="d-flex info-product  flex-column justify-content-start align-items-start mt-3 mb-3">
                                <div className="info info-category">
                                    Category :{' '}
                                    <b>
                                        {' '}
                                        {
                                            product?.flowTypeProducts
                                                ?.nameTypeProduct
                                        }
                                    </b>{' '}
                                </div>
                                <div className="info info-id">
                                    Product-id : <b>{product?.id}</b>{' '}
                                </div>
                            </div>

                            <div className="d-flex info-product flex-column justify-content-start align-items-start mt-3 mb-3">
                                <Grid item xs={8}>
                                    <ColorFilter
                                        color={
                                            product?.colorFlowProducts
                                                ?.colorCode
                                        }
                                    />
                                </Grid>
                            </div>
                            <div className="d-flex btn-add-cart justify-content-between  mt-3">
                                <Button
                                    classes={{
                                        root: classes.btnAddCart,
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            addCart({ ...product }),
                                        )
                                    }
                                >
                                    Add To Cart
                                </Button>
                                <Button
                                    classes={{
                                        root: classes.btnAddCart,
                                        // label: classes.labelAddCart
                                    }}
                                    endIcon={<FavoriteBorderIcon />}
                                >
                                    Add WishList
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* list product noi bat */}
                <FeatureProducts />
            </div>
        </>
    )
}
export default withTheme(Detail)

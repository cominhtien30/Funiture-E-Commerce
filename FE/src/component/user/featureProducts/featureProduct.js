// @flow
import React, { useEffect, useState } from 'react'
import { styles, responsive } from './featureProduct.style'
import { withTheme } from '@material-ui/core/styles'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CardProduct from '../products/products/card'
import api from '../../../utils/api'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../redux/actions/cartAction'

const featureProduct = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    useEffect(() => {
        api.get('product/get-all-products').then((res) => {
            setProducts(res.data)
        })
    }, [])
    const addToCart = (product) => {
        dispatch(addCart(product))
    }
    const classes = styles()
    return (
        <>
            <div className={`${classes.title} mt-5 pt-3`}>
                Feature Product
            </div>
            <Carousel
                responsive={responsive}
                containerClass={classes.styleCarousel}
            >
                {products.map((product, index) => {
                    return (
                        <CardProduct
                            key={index}
                            id={product?.id}
                            color={
                                product?.colorFlowProducts?.colorCode
                            }
                            price={product?.price}
                            nameProduct={product?.nameProduct}
                            description={product?.description}
                            pictures={product?.picturesZero}
                            addToCart={addToCart}
                            action="feature"
                        />
                    )
                })}
            </Carousel>
            ;
        </>
    )
}
export default withTheme(featureProduct)

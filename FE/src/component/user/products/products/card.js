// @flow
import React, { useState } from 'react'
import styles from './product.style'
import { withTheme } from '@material-ui/core/styles'
import rocket from '../../../../assets/images/logo/rocket.png'
import Overlay from '../../../../commons/overlay/overlay'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const Products = ({
    id,
    color,
    price,
    nameProduct,
    description,
    pictures,
    addToCart,
    action,
}) => {
    const navigate = useNavigate()

    const [animation, setAnimation] = useState(false)
    const classes = styles({ animation })
    const onClickhandle = () => {
        setAnimation(true)
        setTimeout(() => {
            setAnimation(false)
            addToCart({
                id,
                color,
                price,
                nameProduct,
                description,
                picturesZero: pictures,
            })
        }, 1000)
    }
    return (
        <>
            {action ? '' : animation ? <Overlay /> : ''}
            <div className={classes.card}>
                <Card>
                    <CardActionArea
                        onClick={() => navigate(`/product/${id}`)}
                    >
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={pictures}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                noWrap
                                component="h2"
                            >
                                {nameProduct}
                            </Typography>
                            <Typography
                                align="justify"
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        classes={{
                            root: classes.CardActions,
                        }}
                    >
                        <Typography
                            variant="button"
                            noWrap={true}
                            color="primary"
                            style={{
                                marginBottom: '5px',
                            }}
                        >
                            {price}
                        </Typography>
                        <Button fullWidth onClick={onClickhandle}>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>

                <img
                    className={`card-animation ${
                        animation ? classes.addCart : ''
                    } `}
                    src={rocket}
                    alt=""
                />
            </div>
        </>
    )
}
export default withTheme(Products)

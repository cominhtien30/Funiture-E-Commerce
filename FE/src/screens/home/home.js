//
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../../component/user/home/carousel/carousel'
import { Grid, Typography } from '@material-ui/core'
import styles from './home.style'
import all from '../../assets/images/category/all.png'
import Loading from '../../commons/loading'

const Home = ({ categorys, requestListCategorys }) => {
    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            requestListCategorys()
        }, 1500)
    }, [])
    const classes = styles()
    return (
        <>
            {loading ? <Loading /> : ''}
            <Carousel />
            <section
                className={`${classes.categorySection} ${classes.section} width-layout category-section`}
            >
                <Grid
                    container
                    style={{
                        marginBottom: '40px',
                    }}
                    justifyContent="center"
                >
                    <Typography variant="caption">
                        Explore Our Furniture Range
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid container spacing={3}>
                        {categorys?.listCategory.map(
                            (item, index) => {
                                return (
                                    <Grid
                                        xs={2}
                                        item
                                        key={index}
                                        onClick={() =>
                                            navigate(
                                                `/products?api=get-flow-type-product/${item?.id}/page/&page=0`,
                                            )
                                        }
                                    >
                                        <div className="item-category d-flex align-items-center flex-column">
                                            <img
                                                src={
                                                    item?.imagesTypeProduct
                                                }
                                                alt=""
                                            />
                                            <span className="d-flex">
                                                {
                                                    item?.nameTypeProduct
                                                }
                                            </span>
                                        </div>
                                    </Grid>
                                )
                            },
                        )}

                        <Grid xs={2} item>
                            <div
                                onClick={() => navigate('/products')}
                                className="item-category d-flex align-items-center flex-column"
                            >
                                <img src={all} alt="" />
                                <span className="d-flex">all</span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <section
                className={` ${classes.contentSeo} ${classes.section} width-layout content-seo`}
            >
                <div className="title-content">
                    Buy Furniture Online At Urban Ladder - India&aposs
                    Favourite Destination For All Things Home!
                </div>
                <div className="content-body">
                    Furniture is amongst the most crucial elements of
                    a home and more often than not a true reflection
                    of the people living in it. From the style of bed
                    to the colour of the chairs, every little detail
                    makes a massive impact, which is why choosing the
                    right furniture for your home is essential. Tired
                    of searching for furniture shop near me in the
                    search engine of your choice and not finding
                    substantial results? We have just the solution for
                    you. Urban Ladder, an online furniture store, is
                    home to exceptional furniture options for every
                    part of your home including the bedroom, living
                    room, dining room, and more. Trust Urban Ladder
                    with your home furniture needs and enjoy access to
                    premium furniture made from the highest quality
                    materials. When you shop for furniture online from
                    Urban Ladder, you’re assured of a durable product
                    that’ll add immense value to your interior decor.
                    At Urban Ladder, we take our customers’ needs very
                    seriously. A team of furniture designers work
                    tirelessly to craft fresh new furniture designs
                    that cater to the requirements of today’s
                    homeowner flawlessly. We take design aesthetics
                    equally seriously which is why we have furniture
                    options available in different aesthetics
                    including classic, modern, mid-century, boho chic,
                    Scandanavian, industrial, and many more. Buy
                    high-quality furniture for your home without
                    worrying about overspending since our prices can
                    be best described as reasonable. If you’re setting
                    up a home office, you can find the perfect option
                    in our range of study tables. Need a coffee table
                    for your living room? Urban Ladder has got you
                    covered.
                </div>
            </section>
        </>
    )
}
export default Home

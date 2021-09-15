// @flow
import React from 'react'
import styles from './carousel.style'
import { withTheme } from '@material-ui/core/styles'
import ReactImageMagnify from 'react-image-magnify'

const Carousel = (props) => {
    const { chooseThumbail, listImg } = props
    // const check = { chooseThumbail, listImg }
    const classes = styles({
        chooseThumbail,
        listImg,
    })
    return (
        <>
            <div className={classes.carousel}>
                {listImg.map((item, index) => {
                    return (
                        <ReactImageMagnify
                            key={index}
                            //
                            {...{
                                smallImage: {
                                    isFluidWidth: true,
                                    src: item,
                                },
                                largeImage: {
                                    src: item,
                                    width: 1200,
                                    height: 1800,
                                },
                                imageStyle: {
                                    width: '100%',
                                    minHeight: '430px',
                                    objectFit: 'cover',
                                },
                                style: {
                                    minWidth: '100%',
                                    visibility: `${
                                        chooseThumbail === index
                                            ? 'unset'
                                            : 'hidden'
                                    }`,
                                },
                                //   enlargedImageContainerClassName: "m-0"
                                enlargedImageContainerStyle: {
                                    marginLeft: 0,
                                    minWidth: '500px ',
                                    objectFit: 'cover',
                                    zIndex: 2,
                                },
                            }}
                        />
                    )
                })}
            </div>
        </>
    )
}
export default withTheme(Carousel)

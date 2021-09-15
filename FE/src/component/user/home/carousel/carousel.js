// @flow
import React from 'react'
import styles from './carousel.style'
import slider1 from '../../../../assets/images/slider/slider1.jpg'
import slider2 from '../../../../assets/images/slider/slider2.jpg'
import slider3 from '../../../../assets/images/slider/slider3.jpg'

const Carousel = () => {
    const classes = styles()
    return (
        <>
            <section className={`${classes.root} carolsel-slider`}>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={slider1}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={slider2}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={slider3}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">
                            Previous
                        </span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}
export default Carousel

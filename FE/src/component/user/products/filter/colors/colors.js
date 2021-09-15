// @flow
import React from 'react'
import styles from './color.style'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'

const color = ({ colors, color }) => {
    //products
    const navigate = useNavigate()
    let location = useLocation()
    const handleChange = (colorID) => {
        navigate({
            search: `?api=/get-filter-color/${colorID}/page/&page=0`,
        })
    }
    console.log(color, 'color')
    let colorList = colors || ['#556D87']
    const classes = styles()
    console.log(location.search.split('/')[2], 'hehe')
    return (
        <>
            <div
                className={`${classes.root} row lineBottom filter-color mb-4 mt-3`}
            >
                <div className="title-filter">Colors:</div>
                <div className="list-color row d-flex justify-content-star mt-4">
                    {color ? (
                        <div className="col-3">
                            <div
                                className={`item-color`} //active
                                style={{
                                    backgroundColor: color,
                                }}
                            >
                                <i className="fa fa-check"></i>
                            </div>
                        </div>
                    ) : (
                        colorList.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div
                                        onClick={() =>
                                            handleChange(item.id)
                                        }
                                        className={`item-color ${
                                            parseInt(
                                                location.search.split(
                                                    '/',
                                                )[2],
                                            ) === item.id && 'active'
                                        }`} //active
                                        style={{
                                            backgroundColor:
                                                item?.colorCode,
                                        }}
                                    >
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}
export default withTheme(color)

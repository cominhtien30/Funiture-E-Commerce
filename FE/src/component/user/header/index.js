// @flow
import React, { useState, useContext } from 'react' //useState
import styles from './header.style'
import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { CustomThemeContext } from '../../../App'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Cart from './cart/cart'
import Heart from './heart/heart'
import logo1 from '../../../assets/images/logo/logo1.png'
import Navigation from './navigation/navigation'
import DropDownUser from './dropdown/dropdownUser'
import { Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { clearSearchProduct } from '../../../redux/actions/productsAction'

import { usePrompt } from 'react-router-dom'

const Header = ({
    handleOpenSignIn,
    searchProduct,
    requestSearch,
}) => {
    const dispatch = useDispatch()
    const [prompt, setPrompt] = useState(false)
    const handleChange = (e) => {
        const { value } = e.target
        value !== ''
            ? requestSearch(value)
            : dispatch(clearSearchProduct())

        value !== '' ? setPrompt(true) : setPrompt(false)
    }
    const classes = styles({ prompt }) //style
    usePrompt('Are you sure you want to leave?', prompt)
    ///
    console.log(searchProduct, 'searchProduct')
    const themes = [
        { value: 'theme1', label: 'Orange' },
        { value: 'theme2', label: 'Green' },
        { value: 'theme3', label: 'Red' },
        { value: 'theme4', label: 'Blue' },
        { value: 'theme5', label: 'Pink' },
    ]
    const { currentTheme, setTheme } = useContext(CustomThemeContext)

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleChooseTheme = (theme) => {
        setTheme(theme)
        setAnchorEl(null)
    }
    return (
        <>
            <header className={`${classes.root} header`}>
                {/* funitureListBars */}
                <section
                    className={`${classes.row} lineBottom  funitureListBars`}
                >
                    <div
                        className={`${classes.row}  ${classes.content} width-layout funitureListBars__content`}
                    >
                        <div
                            className={`${classes.row}  featuredLinksBar__links`}
                        >
                            <a
                                href=""
                                className={`${classes.row} featuredLinksBar__link`}
                            >
                                <i className="fa fa-question-circle-o"></i>
                                Help
                            </a>
                            <a
                                href=""
                                className={`${classes.row} featuredLinksBar__link`}
                            >
                                <i className="fa fa-cart-plus"></i>
                                Track Order
                            </a>
                        </div>
                        <div
                            className={`${classes.row}  featuredLinksBar__links`}
                        >
                            <span
                                className={`${classes.row} featuredLinksBar__link`}
                            >
                                Store
                            </span>
                            <span
                                className={`${classes.row} featuredLinksBar__link`}
                            >
                                Bulk Order
                            </span>
                            <span
                                className={`${classes.row} featuredLinksBar__link`}
                            >
                                Giift Cards
                            </span>
                            <span
                                className={`${classes.row} featuredLinksBar__link`}
                            >
                                <ColorLensIcon
                                    onClick={handleClick}
                                    fontSize="large"
                                    style={{
                                        cursor: 'pointer',
                                        color: 'black',
                                    }}
                                />
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    style={{ zIndex: 99999 }}
                                    open={Boolean(anchorEl)}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    {themes.map((item, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                selected={
                                                    item.value ===
                                                    currentTheme
                                                        ? true
                                                        : false
                                                }
                                                onClick={() =>
                                                    handleChooseTheme(
                                                        item.value,
                                                    )
                                                }
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    })}
                                </Menu>
                            </span>
                        </div>
                    </div>
                </section>
                {/* end fybitureListBars */}
                {/* ----------------------- */}
                {/* top_bars */}
                <section
                    className={`${classes.row} lineBottom top_bars`}
                >
                    <div
                        className={`${classes.row}  ${classes.content} width-layout top_bars_content`}
                    >
                        <div
                            className={`${classes.row} top_bar_left`}
                        >
                            <img
                                className="title_logo"
                                src={logo1}
                                alt=""
                            />
                            {/* <h2 className="title_logo">Funtiture</h2> */}
                        </div>
                        <div
                            className={`${classes.row} top_bar_center`}
                        >
                            <div
                                className={`${classes.row} input_search`}
                            >
                                <div className="icon">
                                    {' '}
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search"
                                    inputProps={{
                                        'aria-label': 'search',
                                    }}
                                    onChange={handleChange}
                                />
                                {searchProduct.length > 0 && (
                                    <div className="result_search">
                                        <div className="result_search_content p-2">
                                            <div className="d-flex w-100 justify-content-between align-items-center  result_search_content_header">
                                                <span>
                                                    Search Result :
                                                </span>
                                                <i
                                                    onClick={() =>
                                                        dispatch(
                                                            clearSearchProduct(),
                                                        )
                                                    }
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    className="fa fa-times"
                                                ></i>
                                            </div>
                                            <div className=" w-100   mt-2 result_search_content_body">
                                                {searchProduct.map(
                                                    (
                                                        product,
                                                        index,
                                                    ) => {
                                                        return (
                                                            <div
                                                                key={
                                                                    index
                                                                }
                                                                className="d-flex result_search_content_body_item"
                                                            >
                                                                <div className="image-product p-2">
                                                                    <img
                                                                        className="flex-grow-1"
                                                                        src={
                                                                            product?.picturesZero
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="d-flex justify-content-center flex-grow-1 flex-column info-product">
                                                                    <Typography variant="h6">
                                                                        {
                                                                            product?.nameProduct
                                                                        }
                                                                    </Typography>
                                                                    <Typography variant="subtitle1">
                                                                        {
                                                                            product?.price
                                                                        }{' '}
                                                                        VND
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        )
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            className={`${classes.row}  top_bar_right`}
                        >
                            <div
                                className={` ${classes.row} ${classes.content} top_bar-listIcon`}
                            >
                                <div className="item-icon">
                                    <a href="">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </a>
                                </div>
                                <div className="item-icon icon-user">
                                    <a href="">
                                        <i className="fa fa-user-o"></i>
                                    </a>
                                    <div className="dropdown-user">
                                        {/* dropdown user */}
                                        <DropDownUser
                                            classes={classes}
                                            handleOpenSignIn={
                                                handleOpenSignIn
                                            }
                                        />
                                        {/* {dropDownUser()} */}
                                        {/* <div className={`${classes.row} lineBottom dropdown-option`}>
                                            <a href="">Order</a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="item-icon  icon-heart">
                                    <Heart />
                                </div>
                                <div className="item-icon icon-cart">
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end top_bars */}
                {/* navigation-header */}
            </header>
            <Navigation classes={classes} />
        </>
    )
}
export default Header

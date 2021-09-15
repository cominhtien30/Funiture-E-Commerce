import React, { useContext } from 'react' //
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
// import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
// import NotificationsIcon from '@material-ui/icons/Notifications'
// import WbSunnyIcon from '@material-ui/icons/WbSunny'
import { CustomThemeContext } from '../../../App'
import useTheme from '@material-ui/core/styles/useTheme'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        backgroundColor: useTheme().palette.primary.main,
        minHeight: 'auto ! important',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        color: 'white',
    },
}))
export default function Header(props) {
    const classes = useStyles()
    const { open, handleDrawerOpen } = props
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
        <AppBar
            position="absolute"
            className={clsx(
                classes.appBar,
                open && classes.appBarShift,
            )}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(
                        classes.menuButton,
                        open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    T-Funiture Dashboard
                </Typography>
                {/* <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton> */}
                <ColorLensIcon
                    onClick={handleClick}
                    fontSize="large"
                    style={{ cursor: 'pointer', color: 'white' }}
                />

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    {themes.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                selected={
                                    item.value === currentTheme
                                        ? true
                                        : false
                                }
                                onClick={() =>
                                    handleChooseTheme(item.value)
                                }
                            >
                                {item.label}
                            </MenuItem>
                        )
                    })}
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

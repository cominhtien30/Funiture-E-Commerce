import React from 'react'
import '../App.css'
import GlobalCss from '../global.styles'
// -----
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import 'material-design-icons/iconfont/material-icons.css'
// material
import Container from '@material-ui/core/Container'
// --------
import { Outlet } from 'react-router-dom'
// conponennt
import Header from '../component/admin/header'
import Footer from '../component/admin/footer/'
import Navigation from '../component/admin/drawerNavigation/index'
import AlertAdmin from '../commons/alert/alterAdmin'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        minHeight: '70vh',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))
function App({ openAlert }) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true) //allow open Drawer
    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }
    return (
        <React.Fragment>
            <GlobalCss />
            <div className="d-flex">
                <Header
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                />
                <Navigation
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container
                        maxWidth="lg"
                        className={`${classes.container} d-flex align-items-center`}
                    >
                        <Outlet />
                    </Container>
                    <Footer />
                </main>
            </div>
            {openAlert?.open && <AlertAdmin />}
        </React.Fragment>
    )
}

export default App

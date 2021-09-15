import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'

import { withTheme } from '@material-ui/core/styles'

function DialogDelete({
    openDialog,
    handleOpenDialog,
    deleteProduct,
}) {
    const handleConfirm = () => {
        deleteProduct(openDialog.id) //action delete category
        handleOpenDialog(false) //turn off dialog
    }
    return (
        <>
            <Dialog
                open={openDialog.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleOpenDialog(false)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {'Are you sure you want to delete it?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Warning : Data will be lost forever ! now! you
                        check, please
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleOpenDialog(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})
export default withTheme(DialogDelete)

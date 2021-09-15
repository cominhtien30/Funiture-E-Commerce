import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navigation - stiky
    root: {
        boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        zIndex: '99999',
        cursor: 'pointer',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        fontSize: '25px ! important',
        '& .icon': {
            height: '100%',
            width: '100%',
            display: 'flex',
            '& i': {
                margin: 'auto',
                color: 'white',
            },
        },
    },
}))
export default styles

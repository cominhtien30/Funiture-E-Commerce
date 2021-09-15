import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    '@keyframes popupOpen': {
        '0%': {
            opacity: 0,
            marginTop: '-20%',
        },
        '75%': { marginTop: '5%' },
        '100%': { opacity: 1 },
    },
    '@keyframes popupClose': {
        '0%': {
            opacity: 1,
        },
        '75%': { opacity: 1, marginTop: '-20%' },
        '100%': { opacity: 0, marginTop: '40%' },
    },
    root: {
        position: 'fixed',
        zIndex: theme.zIndex.tooltip,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: (props) =>
            props.success
                ? 'rgb(67,182,73,0.6)'
                : 'rgb(150, 53, 40,0.6)',
    },
    alert: {
        transform: 'translate(-50% ,-50%)',
    },
    alertNone: {
        animation: ` $popupClose  1s `,
        opacity: 0,
        // display: ({ test }) => test ? "none" : ""
    },
    alertShow: {
        animation: `$popupOpen  1s `,
    },
    btnOk: {
        cursor: 'pointer',
        backgroundColor: (props) =>
            props.success ? '#3da743' : '#d63f2a',
        height: '20%',
        '&:hover': {
            backgroundColor: (props) =>
                props.success ? '#4fbe55' : '#d86959',
        },
    },
}))
export default styles

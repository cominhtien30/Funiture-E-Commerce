import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    '@keyframes myEffect': {
        '20%': {
            width: '60px',
            height: '60px',
            opacity: 1,
            left: '75%',
            top: '75%',
            background: theme.palette.primary.title,
            // top: 'initial',
        },
        '40%': {
            width: '58px',
            height: '58px',
            left: '60%',
            top: '60%',
            opacity: 1,
            background: 'green',
        },
        '50%': {
            width: '56px',
            height: '56px',
            left: '50%',
            top: '55%',
            opacity: 1,
            background: 'green',
        },
        '60%': {
            width: '52px',
            height: '52px',
            left: '40%',
            top: '60%',
            opacity: 1,
            background: 'red',
        },
        '80%': {
            width: '50px',
            height: '50px',
            left: '20%',
            top: '70%',
            opacity: 1,
            background: 'red',
        },
        to: {
            top: '75%',
            left: '0',
            opacity: 0,
        },
    },
    // navPage - stiky
    CardActions: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    card: {
        '& .card-animation': {
            // opacity: ({ animation }) => (animation ? 1 : 0),
            // left: ({ animation }) => animation && 0,
            // top: ({ animation }) => `${animation && '70%'}`,
            padding: '8px',
            borderRadius: '50%',
            transform: 'rotate(-130deg)',
            width: '62px',
            height: '62px',
            border: `5px ${theme.palette.primary.main} solid`,
            // opacity: 0,
            position: 'fixed',
            zIndex: 9999999,
            transition: 'all .4s .2s ease-in, top 1ms, right 1ms',
        },
    },

    addCart: {
        animation: `$myEffect 1000ms linear`,
    },
}))
export default styles

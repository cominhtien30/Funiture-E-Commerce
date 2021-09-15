import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    thumbail: {
        cursor: 'pointer',
        '& img': {
            width: '65px',
            maxHeight: '35px',
            minHeight: '35px',
        },
        '& .active': {
            border: `3px solid ${theme.palette.primary.title}`,
        },
    },
}))
export default styles

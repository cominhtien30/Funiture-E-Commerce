import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    root: {
        '& .title-filter': {
            color: theme.palette.primary.title,
            textTransform: 'uppercase',
            fontSize: '22px',
            fontWeight: 500,
        },
    },
}))
export default styles

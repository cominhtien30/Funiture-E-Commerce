import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    sectionUpdate: {
        minWidth: '120px',
        maxWidth: '120px',
        border: `1px ${theme.palette.primary.main} solid`,
        '& .btnUpdate': {
            backgroundColor: theme.palette.primary.main,
            fontWeight: 600,
            color: 'white',
            padding: '1px 12px',
            borderRadius: '10px',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.palette.primary.title,
            },
        },
    },
}))
export default styles

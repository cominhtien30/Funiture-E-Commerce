import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    sectionUpdate: {
        '& .btnUpdate': {
            height: '20px',
            width: '30px',
            backgroundColor: theme.palette.primary.main,
            fontWeight: 500,
            color: 'white',
            padding: '1px 4px',
            borderRadius: '10px',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.palette.secondary.main,
            },
        },
    },
}))
export default styles

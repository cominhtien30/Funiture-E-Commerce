import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    root: {
        //position: "relartive",
        '& .item-step': {
            cursor: 'default',
            fontSize: '25px',
            color: theme.palette.primary.bolid,
            textTransform: 'uppercase',
            fontWeight: 500,
        },
        '& .item-step + .item-step': {
            '&:before': {
                content: '">"',
                padding: '0 10px',
                '&:hover': {
                    color: theme.palette.primary.bolid,
                },
            },
        },
        '& .avtive': {
            color: theme.palette.primary.main,
            cursor: 'pointer',
            '&:hover': {
                color: theme.palette.primary.main,
            },
        },
    },
}))
export default styles

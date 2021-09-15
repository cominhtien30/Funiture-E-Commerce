import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    navPage: {
        '& .item-patch': {
            fontSize: '13px',
            whiteSpace: 'nowrap',
            color: theme.palette.primary.bolid,
        },
        '& .item-patch + .item-patch': {
            paddingLeft: '10px',
            '&:before': {
                content: '">"',
                marginRight: '10px',
                color: theme.palette.primary.bolid,
            },
        },
        '& .active': {
            color: theme.palette.primary.title,
            fontWeight: 500,
        },
        // endNavPage
    },
}))
export default styles

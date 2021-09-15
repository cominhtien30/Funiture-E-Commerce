import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    root: {
        '& .list-color': {
            '& .item-color': {
                marginBottom: '10px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: `1px ${theme.palette.primary.title} solid`,
                cursor: 'pointer',
                lineHeight: '32px',
                '& i': {
                    transform: 'translateY(21%)',
                    color: 'white',
                    display: 'none',
                },
                '&:hover': {
                    '& i': {
                        display: 'block ! important',
                    },
                },
            },
            '& .active': {
                '& i': {
                    display: 'block ! important',
                },
            },
        },
    },
}))
export default styles

import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    root: {
        '& .list-filter': {
            '& .option-price': {
                cursor: 'pointer',
                '& .price': {
                    fontSize: '15px',
                    color: theme.palette.primary.bolid,
                },
                '& .count-price': {
                    fontSize: '14px',
                    fontWeight: 600,
                    width: '24px',
                    height: '24px',
                    lineHeight: '24px',
                    borderRadius: '50%',
                    textAlign: 'center',
                },
                '&:hover': {
                    '& .count-price': {
                        color: 'white',
                        backgroundColor: 'black',
                    },
                },
            },
        },
    },
}))
export default styles

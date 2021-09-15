import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    itemColor: {
        height: '36px',
        width: '132px',
        // border: `1px ${theme.palette.primary.main} solid`,
        // position: 'absolute',
        // top: '5px',
        // margin: '10px 0',
        // transform: 'translateY(-50%)',
        boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        '& .item__input ': {
            minHeight: '34px',
            height: '100%',
        },
        '& .item__color__name': {
            width: '70%',
            border: 'none',
            lineHeight: '40px',
            padding: '2px 6px',
            color: theme.palette.primary.title,
            fontWeight: 700,
        },

        '& .item__color__input': { width: '30%' },
        '&:hover': {
            // width: '200px',
            // height: '42px',
            //  transition: 'width .3s, height .3s ',
            boxShadow: ` rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px`,
            transform: 'scale(1.1)',
            transition: 'all .3s',
        },
    },
    iconDelete: {
        color: 'red',
        cursor: 'pointer',
        marginLeft: '8px',
    },
    iconChecked: {
        color: 'green',
        cursor: 'pointer',
        marginLeft: '8px',
    },
}))
export default styles

import { makeStyles } from '@material-ui/core/styles'
import bg from '../../assets/images/banner/bglist.jpg'
const styles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        padding: '10px 0',
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})`,
        backgroundSize: 'cover',
        '& .path-page': {
            marginTop: '0',
        },
    },
    paper: {
        overflow: 'unset',
        padding: '16px 16px',
    },
}))
export default styles

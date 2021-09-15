import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles(() => ({
    // navPage - stiky
    carousel: (props) => ({
        display: 'flex',
        transition: 'all 1s ease 0s',
        width: `${props.listImg.length * 100}%`,
        transform: `translateX(-${props.chooseThumbail * 100}%)`,
        zIndex: 2,
    }),
}))
export default styles

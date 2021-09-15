import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles(() => ({
    // sectionBanner
    root: {
        display: 'block',
        '& .carousel-inner': {
            '& img': {
                maxHeight: '80vh',
                objectFit: 'cover',
            },
        },
    },
}))
export default styles

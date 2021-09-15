import { makeStyles } from '@material-ui/core/styles'
export const styles = makeStyles((theme) => ({
    // navPage - stiky
    title: {
        position: 'relative',
        textTransform: 'uppercase',
        fontSize: '19px',
        fontWeight: 600,
        color: theme.palette.primary.title,
        paddingBottom: 10,
        '&:after': {
            position: 'absolute',
            content: '" "',
            width: '100%',
            bottom: 0,
            left: 0,
            borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
    },
    styleCarousel: {
        margin: '10px -12px',
        marginTop: '50px',
    },
}))
export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

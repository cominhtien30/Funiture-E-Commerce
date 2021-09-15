import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // sectionBanner
    categorySection: {
        '& .item-category': {
            '& img': {
                objectFit: 'contain',
            },
            '& span': {
                textTransform: 'capitalize',
                paddingTop: '5px',
                lineHeight: '16px',
                fontWeight: '700',
            },
        },
        '& .item-category:hover': {
            cursor: 'pointer',
            '& span': {
                color: theme.palette.primary.main,
            },
        },
    },
    contentSeo: {
        '& .title-content': {
            fontSize: '24px',
            color: theme.palette.primary.title,
            textTransform: 'capitalize',
            lineHeight: '40px',
            padding: '0 0 12px 0',
        },
        '& .content-body': {
            opacity: 1,
            fontSize: '15px',
            color: theme.palette.primary.bolid,
            textAlign: 'justify',
        },
    },
    section: {
        paddingTop: '40px',
        paddingBottom: '60px',
    },
}))
export default styles

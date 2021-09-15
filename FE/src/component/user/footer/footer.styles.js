import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navigation - stiky
    footer: {
        // secction email
        '& .section-mail': {
            '& .title-mail': {
                letterSpacing: '4px',
                textTransform: 'uppercase',
                fontSize: '14px',
                marginBottom: '15px',
            },
        },
        // end section email
        '& .section-contact': {
            '& .app-mobile-contact': {
                '& img': {
                    marginRight: '4px',
                    height: '38px',
                    width: '125px',
                    objectFit: 'cover',
                },
            },
        },
        // -------------------
        // section infor
        '& .section-info': {
            paddingBottom: 0,
            '& .info-content': {
                lineHeight: '25px',
                fontSize: '13px',
                '& a': {
                    color: theme.palette.primary.title,
                },
                '& a:hover': {
                    color: theme.palette.primary.main,
                },
            },
            '& .info-content,.title-info': {
                textTransform: 'capitalize',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                '& .address-info': {
                    color: theme.palette.primary.title,
                    whiteSpace: 'break-spaces',
                    textAlign: 'left',
                },
            },
        },
        // end section info]
        // -------------------------------
        // section contact
    },
    // styles common footer
    // ------------------------------
    section: {
        paddingTop: '40px',
        paddingBottom: '60px',
    },
    title: {
        padding: '16px 0 8px 0',
        fontSize: '18px',
        lineHeight: '24px',
        position: 'relative',
        marginBottom: '10px',
        '&:before': {
            position: 'absolute',
            content: '" "',
            borderBottom: `1px solid ${theme.palette.primary.main}`,
            width: '30px',
            left: 0,
            bottom: 0,
        },
    },
    InputBase: {
        width: '280px',
    },
}))
export default styles

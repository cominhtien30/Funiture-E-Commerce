import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navigation - stiky
    navigation: {
        boxShadow:
            ' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
        zIndex: 10,
        backgroundColor: 'white',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        },
        '& a:hover': {
            color: theme.palette.primary.main,
        },
        top: 0,
        // position: '-webkit - sticky',
        position: 'sticky',
        padding: '0',
        '& .navigation_wrapper': {
            position: 'relative',

            '& .navigation-item': {
                padding: '12px 11px 12px 0',
                '& .item': {
                    padding: '12px 12px 10px 12px',
                    borderBottom: `2px solid white`,
                },
                ' & a:hover': {
                    borderColor: `${theme.palette.primary.main}`,
                },
                '& .subnavlist': {
                    display: 'none',
                    position: 'absolute',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    width: '60%',
                    background: 'white',
                    left: '0',
                    top: '100%',
                    '& .subnavlist-content': {
                        flexDirection: 'column',
                        alignItems: 'start',
                        margin: '15px 20px',
                        '& a': {
                            whiteSpace: 'nowrap',
                            maxWidth: '100%',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        },
                        '& .title-content': {
                            color: theme.palette.primary.title,
                            fontSize: '15px',
                            fontWeight: 600,
                            padding: '2px 0',
                            margin: ' 15px 0',
                            letterSpacing: '1px',
                            borderBottom: `2px solid white`,
                        },

                        '& .link-content': {
                            fontSize: '14px',
                            padding: '4px 0',
                            letterSpacing: 1.5,
                            whiteSpace: 'nowrap',
                            lineHeight: 1.5,
                        },
                        '& .title-content:hover': {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                },
                // hover link
            },
            '& .item-sale:hover': {
                '& .subnavlist-sale': {
                    display: 'block',
                },
            },
        },
    },
}))
export default styles

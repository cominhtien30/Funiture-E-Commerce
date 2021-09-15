import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    root: {
        '& .detail-info': {
            // height: "100%",
            // width: "100%",
            '& .info-price': {
                paddingBottom: '20px',
                borderBottom: `3px solid ${theme.palette.primary.line}`,
                '& .text-price ': {
                    fontSize: '30px',
                    lineHeight: '30px',
                    fontWeight: 900,
                    color: theme.palette.primary.main,
                },
            },
            '& .info-product': {
                paddingBottom: '20px',
                borderBottom: `3px solid ${theme.palette.primary.line}`,

                '& .info': {
                    fontSize: '18px',
                    textTransform: 'uppercase',
                },
                '& .filter-color': {
                    border: 'none',
                    margin: '-5px 0 ! important',
                    '& .title-filter': {
                        width: 'auto',
                        fontSize: '18px',
                        textTransform: 'uppercase',
                        paddingLeft: 0,
                    },
                    '& .list-color': {
                        '& .item-color': {
                            width: '40px',
                            height: '40px',
                            '& i': {
                                lineHeight: '30px',
                                zIndex: '0',
                            },
                        },
                    },
                },
            },
        },
    },
    btnAddCart: {
        width: '45%',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    hidden: {
        overflow: 'hidden',
    },

    test: {
        marginLeft: 0,
    },
}))
export default styles

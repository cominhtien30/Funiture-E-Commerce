import { withStyles } from '@material-ui/core/styles'

const GlobalCss = withStyles({
    '@global': {
        '.width-layout': {
            width: '100%',
            maxWidth: '990px',
            minWidth: '768px',
            margin: 'auto',
        },
        ' .lineBottom': {
            color: 'black',
            borderBottom: `1px solid #EEE`,
            padding: '20px 0',
        },
        /* styles mặc định cho web */
        i: {
            fontSize: '21px ! important',
            fontWeight: 100,
        },
        a: {
            color: 'black',
            textDecoration: 'none',
        },
        // 'a:hover': {
        //     color: '#ff9800',
        // },
        // 'i:hover': {
        //     color: '#ff9800',
        // },
        img: {
            objectFit: 'cover ! important',
        },
        input: {
            minHeight: '40px',
        },
    },
})(() => null)
export default GlobalCss

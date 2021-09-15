import { globalStyles } from './globalStyles'
import { createTheme } from '@material-ui/core/styles'

const themeOptions = {
    palette: {
        primary: {
            main: '#ff9800',
            line: '#EEE',
            bolid: '#989696',
            title: '#2F4858',
        },
        secondary: {
            main: '#ED7745',
        },
        inherit: {
            main: '#e53935',
        },
        header: {
            main: '#f57f17',
        },
    },
    ...globalStyles('#ff9800', '#ED7745'),
}

const theme = createTheme(themeOptions)
export default theme

import { globalStyles } from './globalStyles'
import { createTheme } from '@material-ui/core/styles'

const themeOptions = {
    palette: {
        primary: {
            main: '#d81b60',
            line: '#EEE',
            bolid: '#989696',
            title: '#2F4858',
        },
        secondary: {
            main: '#e91e63',
        },
        inherit: {
            main: '#e53935',
        },
        header: {
            main: '#f57f17',
        },
    },
    ...globalStyles('#d81b60', '#e91e63'),
}

const theme = createTheme(themeOptions)
export default theme

import { globalStyles } from './globalStyles'
import { createTheme } from '@material-ui/core/styles'

const themeOptions = {
    palette: {
        primary: {
            main: '#b71c1c',
            line: '#EEE',
            bolid: '#989696',
            title: '#2F4858',
        },
        secondary: {
            main: '#c62828',
        },
        inherit: {
            main: '#e53935',
        },
        header: {
            main: '#f57f17',
        },
    },
    ...globalStyles('#b71c1c', '#c62828'),
}

const theme = createTheme(themeOptions)
export default theme

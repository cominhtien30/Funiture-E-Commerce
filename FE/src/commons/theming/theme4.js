import { globalStyles } from './globalStyles'
import { createTheme } from '@material-ui/core/styles'

const themeOptions = {
    palette: {
        primary: {
            main: '#0d47a1',
            line: '#EEE',
            bolid: '#989696',
            title: '#2F4858',
        },
        secondary: {
            main: '#1565c0',
        },
        inherit: {
            main: '#e53935',
        },
        header: {
            main: '#f57f17',
        },
    },
    ...globalStyles('#0d47a1', '#1565c0'),
}

const theme = createTheme(themeOptions)
export default theme

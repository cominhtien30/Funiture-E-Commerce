import { globalStyles } from './globalStyles'

import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    // styles theming for project
    palette: {
        primary: {
            main: '#4caf50',
            line: '#EEE',
            bolid: '#989696',
            title: '#2F4858',
        },
        secondary: {
            main: '#6fbf73',
        },
        inherit: {
            main: '#e53935',
        },
        header: {
            main: '#f57f17',
        },
    },
    ...globalStyles('#4caf50', '#6fbf73'),
})
export default theme

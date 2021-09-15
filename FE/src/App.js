import React, { useState } from 'react'
// csss base line
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// router
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
// ---------------------
// redux
import { Provider } from 'react-redux'
import store from './redux/store'
// component
import ScrollToTop from './component/scrollToTop'
import Loading from './container/loadingContainer'
// import theme from './commons/theming/theme'
import getTheme from './commons/theming/getTheme'

export const CustomThemeContext = React.createContext({
    currentTheme: '',
    setTheme: null,
})
function App() {
    // Read current theme from localStorage or maybe from an api
    const currentTheme = localStorage.getItem('appTheme') || 'theme2'

    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState(currentTheme)
    // Retrieve the theme object by theme name
    let theme = getTheme(themeName)
    // Wrap _setThemeName to store new theme names in localStorage
    const setThemeName = (name) => {
        localStorage.setItem('appTheme', name)
        _setThemeName(name)
    }
    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName,
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <CustomThemeContext.Provider value={contextValue}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ScrollToTop />
                        <Router />
                        <Loading />
                    </ThemeProvider>
                </CustomThemeContext.Provider>
            </BrowserRouter>
        </Provider>
    )
}

export default App

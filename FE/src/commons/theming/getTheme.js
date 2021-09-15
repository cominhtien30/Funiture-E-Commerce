import theme1 from './theme'
import theme2 from './theme2'
import theme3 from './theme3'
import theme4 from './theme4'
import theme5 from './theme5'

const themes = {
    theme1,
    theme2,
    theme3,
    theme4,
    theme5,
}

export default function getTheme(theme) {
    return themes[theme]
}

export const globalStyles = (colorTheme, colorHover) => ({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'i:hover': {
                    color: colorTheme,
                },
                'a:hover': {
                    color: colorTheme,
                },
                '.width-layout': {
                    width: '100%',
                    maxWidth: '990px',
                    minWidth: '768px',
                    margin: 'auto',
                },
                '.lineBottom': {
                    color: 'black',
                    borderBottom: `1px solid #EEE`,
                    padding: '20px 0',
                },
                /* styles mặc định cho web */
                i: {
                    fontSize: '22px !important',
                    fontWeight: 100,
                },
                a: {
                    color: 'black',
                    textDecoration: 'none',
                },
            },
        },
        // Style my buttom ⚛️
        MuiButton: {
            // Name of the rule
            root: {
                maxHeight: '40px',
                minWidth: '90px',
            },
            text: {
                // Some CSS
                letterSpacing: '2px',
                fontSize: '12px',
                lineHeight: '28px',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
                color: 'white',
                backgroundColor: colorTheme,
                '&:hover': {
                    backgroundColor: colorHover,
                },
            },
            label: {
                padding: '0 2px',
            },
        },
        // style MuiTypography
        MuiTypography: {
            root: {
                textTransform: 'capitalize',
            },
            caption: {
                position: 'relative',
                color: '#2F4858',
                fontSize: '28px',
                textTransform: 'capitalize',
                padding: '20px 0 10px 0',
                lineHeight: '32px',

                '&:before': {
                    content: '""',
                    width: '90px',
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    margin: '0 auto',
                    borderBottom: `1px solid #ff9800`,
                },
            },
            body1: {
                color: '#989696',
            },
        },
        // inpur
        MuiInputBase: {
            root: {
                marginRight: '10px',
                maxHeight: '40px',
            },
        },
        // paper
        MuiPaper: {
            root: {
                padding: '8px',
                display: 'flex',
                overflow: 'auto',
                flexDirection: 'column',
                minHeight: 240,
            },
        },
    },
})

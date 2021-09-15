import React, { useState } from 'react'
import { useDencrypt } from 'use-dencrypt-effect'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'

const values = ['404', '404 ERROR', 'not found !']

const Error = ({ theme }) => {
    const navigate = useNavigate()
    const { result, dencrypt } = useDencrypt()
    const [textE, setTextE] = useState('ERROR 404')
    React.useEffect(() => {
        let i = 0

        const action = setInterval(() => {
            dencrypt(values[i])

            i = i === values.length - 1 ? 0 : i + 1
        }, 2000)
        const action2 = setTimeout(() => {
            setTextE(null)
        }, 1500)
        const clear = () => {
            clearInterval(action)
            clearTimeout(action2)
        }
        return clear
    }, [])

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 999999,
                backgroundColor: theme.palette.primary.title,
                maxHeight: '100vh',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '45%',
                    transform: 'translateY(-50%) translateX(-50%)',
                }}
            >
                <h1
                    style={{
                        color: 'white',
                        fontSize: '80px',
                    }}
                >
                    {!textE ? result : textE}
                </h1>
            </div>
            <Button
                style={{
                    position: 'absolute',
                    top: '55%',
                    left: '50%',
                    transform: ' translateX(-50%)',
                }}
                onClick={() => navigate(-1)}
            >
                Go Back
            </Button>
        </div>
    )
}
export default withTheme(Error)

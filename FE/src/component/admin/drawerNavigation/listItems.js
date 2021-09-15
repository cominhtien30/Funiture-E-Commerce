import React, { useState, useEffect } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import { useNavigate } from 'react-router-dom'
import useTheme from '@material-ui/core/styles/useTheme'
import { useLocation } from 'react-router-dom'

const items = [
    {
        label: 'Dashboard',
        component: 'dashboard',
        patch: 'dashboard',
    },
    {
        label: 'Products',
        component: 'business_center',
        patch: 'products',
    },
    {
        label: 'Categorys',
        component: 'class',
        patch: 'categorys',
    },
    {
        label: 'Orders',
        component: 'shopping_cart',
        patch: '',
    },
    {
        label: 'Color',
        component: 'format_paint',
        patch: 'colors',
    },
    {
        label: 'Reports',
        component: ' report',
        patch: '',
    },
]
export const MainListItems = () => {
    let navigate = useNavigate()
    let location = useLocation()
    const [nameIcon, setNameIcon] = useState('')
    //location.search.split('/')[2]
    const handleChange = (patch) => {
        navigate(patch)
    }
    useEffect(() => {
        setNameIcon(location.pathname.split('/')[2])
    }, [location.pathname])

    console.log(nameIcon, 'nameIcon')
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <ListItem
                        button
                        key={index}
                        onClick={() => handleChange(item.patch)}
                    >
                        <ListItemIcon>
                            <Icon
                                style={{
                                    color:
                                        item.patch == nameIcon &&
                                        useTheme().palette.primary
                                            .main,
                                }}
                            >
                                {item.component}
                            </Icon>
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem>
                )
            })}
        </div>
    )
}

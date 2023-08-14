import React from 'react'
import { Toolbar, AppBar, Typography, styled } from '@mui/material'
import { Logo } from '../../utils/constant'

const Text = styled(Typography)({
    color: 'InfoText',
    fontFamily: 'fantasy',
    marginRight: 'auto'
})

const Navbar = () => {
    

    return (
        <AppBar position='sticky' style={{background: '#f0f5f5'}}>
            <Toolbar>
                <Text variant='h4'>SpaceX</Text>
                <img src={Logo} alt="logo" style={{width: 130, color: '#FFF'}} />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

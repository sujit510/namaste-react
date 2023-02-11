import React from 'react'
import Logo from '../../assets/logo.jpeg'

export const Title = () => (
    <img src={Logo}
    data-testid="logo"
    alt="Food Villa Logo"
    className='h-36'
    />
)
import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

export const Footer = () => {
    const user = useContext(UserContext);
    return (<h5 className='h-10 bg-amber-100'>Footer - Current visitor: {user.user.name || 'Guest'} | {user.user.email || ''}</h5>);
}


import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import UserContext from '../utils/UserContext';

export const Footer = () => {
    const user = useContext(UserContext);
    const dispatch = useDispatch();
    const clearCartHandler = () => {
        dispatch(clearCart());
    }
    return (<div>
        <h5 className='h-10 bg-amber-100'>Footer - Current visitor: {user.user.name || 'Guest'} | {user.user.email || ''}</h5>
        <button className='p-2 m-5 bg-red-500 border-x-blue-100' onClick={clearCartHandler}>Clear Cart</button>
    </div>);
}


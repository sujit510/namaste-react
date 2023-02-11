import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'
import { Title } from './Title'

export const Header = () => {
    const isOnline = useOnline();
    const { user, setUser } = useContext(UserContext);
    const [ userLocal, setLocalUser ] = useState({});
    const cartItems = useSelector(store => store.cart.items);

    return (
    <div className='flex bg-pink-100'>
        <Title />
        <div className='flex text-re'>
            <div data-testid="online-status">{isOnline
                ? <>✅ Online</>
                : <>🔴 Offline, please check internet!!</>}</div>
            <ul className='ml-20 flex items-center space-x-2'>
                <li>
                    <Link to="/" >
                    Home
                    </Link></li>
                <li>
                    <Link to="/about" >
                    About Us
                    </Link>
                </li>
                <li>
                    <Link to="/instamart" >
                    Instamart
                    </Link>
                </li>
                <li>Contact</li>
                <li>
                <Link to="/cart" >
                    Cart
                </Link> - <span data-testid="cart-count">{cartItems?.length ?? 0} items</span>
                </li>
            </ul>
        </div>
        <div className='ml-auto'>
            <div>Welcome {user.name || 'guest, please login.'}</div>
            {
                user.email
                ? <></>
                : <>
                <input type="text" value={userLocal.name} placeholder="Name" onChange={(e) => {setLocalUser({ ...userLocal, name: e.target.value })}}/>
                <input type="text" value={userLocal.email} placeholder="Email" onChange={(e) => {setLocalUser({ ...userLocal, email: e.target.value })}}/>
            </>
            }
            <div className='cursor-pointer bg-slate-500' onClick={() => setUser(user.email ? {} : userLocal)}>{user.email ? 'Logout' : 'Login'}</div>
        </div>
    </div>
)}

import React from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import { Title } from './Title'

export const Header = () => {
    const isOnline = useOnline();
    return (
    <div className='flex bg-pink-100'>
        <Title />
        <div className='flex text-re'>
            {isOnline ? '' : <>🔴 Offline, please check internet!!</>}
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
                <li>Cart</li>
            </ul>
        </div>
    </div>
)}

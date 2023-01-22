import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from './Title'

export const Header = () => (
    <div className='header'>
        <Title />
        <div className='nav-items'>
            <ul>
                <li>
                    <Link to="/" >
                    Home
                    </Link></li>
                <li>
                    <Link to="/about" >
                    About Us
                    </Link>
                </li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

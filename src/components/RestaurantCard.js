import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_BASE_URL } from '../utils/const';

export const RestaurantCard = ({ restautrant }) => {
    return (
    <Link to={`/restaurant/${restautrant.id}`}>
    <div className='m-1 w-56 h-52 border-2'>
    <img className='restaurant-image' src={`${IMAGE_BASE_URL}${restautrant.cloudinaryImageId}`} />
    <h2 data-testid="restaurant-name" className='restaurant-title'>{restautrant.name}</h2>
    <h3 className='restaurant-cusines'>{restautrant.cusines?.join(", ")}</h3>
    <h4 className='restaurant-rating'>{restautrant.rating} stars</h4>
</div>
</Link>
)
    }

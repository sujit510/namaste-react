import React from 'react'
// import { Link } from 'react-router-dom'
import { IMAGE_BASE_URL } from '../utils/const';

export const ItemCard = ({ item }) => {
    return (
    // <Link to={`/restaurant/${restautrant.id}`}>
    <div className='m-1 w-52 h-50 border-2'>
    <img className='restaurant-image' src={`${IMAGE_BASE_URL}${item.cloudinaryImageId}`} />
    <h2 className='restaurant-title'>{item.name}</h2>
    {/* <h3 className='restaurant-cusines'>{item.cusines?.join(", ")}</h3> */}
    <h4 className='restaurant-rating'>{item.rating} stars</h4>
</div>
// </Link>
)
    }

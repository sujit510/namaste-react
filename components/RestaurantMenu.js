import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRestautantInfo } from '../service/restaurants';
import { IMAGE_BASE_URL } from '../utils/const';
import { Shimmer } from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

export const RestaurantMenu = () => {
    const params = useParams();

    const restrauntInfo = useRestaurant(params.id);

    if (!restrauntInfo.data) {
        return <Shimmer />
    }
  return (
    <div className='restaurant-info'>
        <div className='restaurant-info-left'>
            <h1>Restaurant id: {params.id}</h1>
            <h2>{restrauntInfo.name}</h2>
            <img src={`${IMAGE_BASE_URL}/${restrauntInfo?.data?.cloudinaryImageId}`} />
        </div>
        <div className='restaurant-info-right'>
            <h3>Menu:</h3>
            <>{Object.values(restrauntInfo.data.menu.items).map(d => <li key={d.id} className="restaurant-menu-item">
                <span>{d.name}</span>
                <span>Rs. {d.price / 100}</span>
            </li>)}</>
        </div>
    </div>
  )
}

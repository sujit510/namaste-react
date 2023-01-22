import React, { useEffect, useState } from 'react'
import { getRestautants } from '../service/restaurants';
import { RestaurantCardList } from './RestaurantCardList';

export const Body = () => {
    const [restData, setRestData] = useState([]);
    useEffect(() => {
        getRestautants().then(setRestData);
    }, []);
    return (
    <div className='restaurant-cards'>
        <RestaurantCardList restautrants={restData}/>
    </div>
)};
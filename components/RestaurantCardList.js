import React from 'react';
import { RestaurantCard } from './RestaurantCard';

export const RestaurantCardList = ({ restautrants }) => {
    return (
        restautrants?.data?.cards?.filter(d => d.cardType === "seeAllRestaurants")?.[0]
        ?.data?.data?.cards?.map(restautrant => <RestaurantCard key={restautrant.id} restautrant={restautrant.data} />)
    )
}


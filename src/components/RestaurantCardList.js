import React from 'react';
import { RestaurantCard } from './RestaurantCard';

export const RestaurantCardList = ({ restautrants, searchText }) => {
    return (
        restautrants?.data?.cards?.filter(d => d.cardType === "seeAllRestaurants")?.[0]
        ?.data?.data?.cards?.filter(restautrant => !searchText || ((`${restautrant?.data?.name ?? ''}`).toLowerCase().includes(`${searchText}`.toLowerCase())))
        .map(restautrant => <RestaurantCard key={restautrant.data.id} restautrant={restautrant.data} />)
    )
}


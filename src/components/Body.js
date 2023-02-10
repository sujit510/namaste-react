import React, { useEffect, useState } from 'react'
import { getRestautants } from '../service/restaurants';
import { RestaurantCardList } from './RestaurantCardList';
import { Shimmer } from './Shimmer';

export const Body = () => {
    const [ restData, setRestData ] = useState( [] );
    const [ searchText, setSearchText ] = useState( "" );
    const [ searchTextInput, setSearchTextInput ] = useState( "" );
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect( () => {
        getRestautants().then((data) => {
            setRestData(data);
            setIsLoading(false);
        });
        
    }, [] );
    return (
        <div>
            <input type="text" className='bg-blue-200 p-1 mr-2' value={ searchTextInput } onChange={ ( e ) => setSearchTextInput( e.target.value ) } />
            <button data-testid="search-btn" className='p-1 bg-blue-700' onClick={ () => { setSearchText( searchTextInput ) } }>Search</button>
            <div className='flex flex-wrap'>
                <RestaurantCardList restautrants={ restData } searchText={ searchText } />
            </div>
            {
                isLoading && <div className='flex flex-wrap'>
                {Array(8).fill(1).map((_, i) => <Shimmer classNames="w-52 h-52 m-2" key={i} />)}
                </div>
            }
        </div>
    )
};
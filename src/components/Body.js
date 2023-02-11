import React, { useEffect, useState } from 'react'
import { getRestautants } from '../service/restaurants';
import { DEFAULT_RESTAURANT_SHIMMER_COUNT } from '../utils/const';
import { RestaurantCardList } from './RestaurantCardList';
import { Shimmer } from './Shimmer';

export const Body = () => {
    const [ restData, setRestData ] = useState( [] );
    const [ searchText, setSearchText ] = useState( "" );
    const [ searchTextInput, setSearchTextInput ] = useState( "" );
    const [ isLoading, setIsLoading ] = useState( true );
    useEffect( () => {
        getRestautants().then( ( data ) => {
            setRestData( data );
            setIsLoading( false );
        } );

    }, [] );
    return (
        <div>
            <input type="text" data-testid="search-input" className='bg-blue-200 p-1 mr-2' value={ searchTextInput } onChange={ ( e ) => setSearchTextInput( e.target.value ) } />
            <button data-testid="search-btn" className='p-1 bg-blue-700' onClick={ () => { setSearchText( searchTextInput ) } }>Search</button>
            <div className='flex flex-wrap' data-testid="restaurants">
                <RestaurantCardList restautrants={ restData } searchText={ searchText } />
            </div>
            {
                isLoading && <div className='flex flex-wrap'>
                    { Array( DEFAULT_RESTAURANT_SHIMMER_COUNT ).fill( 1 ).map( ( _, i ) => (
                        <Shimmer classNames="w-52 h-52 m-2" key={ i } /> )
                    ) }
                </div>
            }
        </div>
    )
};
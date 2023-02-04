import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Error } from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';
import { Shimmer } from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import { Cart } from './components/Cart';

const InstaMart = lazy( () => import( './components/InstaMart' ) );

const AppLayout = () => {
    const [ user, setUser ] = useState( {
        name: 'Sujit',
        email: 'sujit510@gmail.com'
    } );
    return (
        <Provider store={ store }>
            <UserContext.Provider value={ { user, setUser } }>
                <div className='flex flex-col h-screen'>
                    <Header />
                    <div className='flex-grow'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter( [
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [ {
            path: '/',
            element: <Body />
        }, {
            path: '/about',
            element: <AboutUs />
        }, {
            path: '/restaurant/:id',
            element: <RestaurantMenu />
        }, {
            // Lazily loaded route, component
            path: '/instamart',
            element: <Suspense fallback={ <Shimmer /> }><InstaMart /></Suspense>
        }, {
            path: '/cart',
            element: <Cart />
        } ]
    },
] )

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render( <RouterProvider router={ appRouter } /> );
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Error } from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';
import { Shimmer } from './components/Shimmer';

const InstaMart = lazy(() => import('./components/InstaMart'));

const AppLayout = () => (
    <>
        <Header />
        {/* <Body /> */}
        <Outlet />
        <Footer />
    </>
)
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [{
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
            element: <Suspense fallback={<Shimmer />}><InstaMart /></Suspense>
        }]
    },
])

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render( <RouterProvider router={appRouter} /> );
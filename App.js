import React from "react";
import ReactDOM  from "react-dom/client";
import { AppLayout } from "./src/components/AppLayout";
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { RestaurantMenu } from "./src/components/RestaurantMenu";
import { Body } from "./src/components/Body";
import Cart from "./src/components/Cart";

const AppRouter=createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <Body/>,
            },
            {
                path:'restaurant/:resId',
                element: <RestaurantMenu/>,
            },
        ]
    },
    {
        path:'/restaurant/:resId',
        element: <RestaurantMenu/>,
    },
    {
        path:'/cart',
        element: <Cart/>,
    }

    
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={AppRouter} />);

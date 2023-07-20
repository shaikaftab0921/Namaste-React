import React from "react";
import ReactDOM  from "react-dom/client";
import { AppLayout } from "./src/components/AppLayout";
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { RestaurantMenu } from "./src/components/RestaurantMenu";
import { Body } from "./src/components/Body";

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
        path:'restaurant',
        element: <RestaurantMenu/>,
    }

    
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={AppRouter} />);

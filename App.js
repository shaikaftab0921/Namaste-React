import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
// import { AppLayout } from "./src/components/AppLayout";
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
// import { RestaurantMenu } from "./src/components/RestaurantMenu";
import { Body } from "./src/components/Body";
import Cart from "./src/components/Cart";

const RestaurantMenu = lazy(()=> import('./src/components/RestaurantMenu'));
const AppLayout=lazy(()=>import("./src/components/AppLayout"));
const AppRouter=createBrowserRouter([
    {
        path:'/',
        element:(<Suspense fallback={<h1> Loading1</h1>} ><AppLayout/></Suspense>),
        children:[
            {
                path:'/',
                element: <Body/>,
            },
            {
                path:'restaurant/:resId',
                element: (<Suspense fallback={<h1> Loading1</h1>} ><RestaurantMenu/></Suspense>),
            },
        ]
    },
    {
        path:'/restaurant/:resId',
        element: (<Suspense fallback={<h1> Loading1</h1>} ><RestaurantMenu/></Suspense>),
    },
    {
        path:'/cart',
        element: <Cart/>,
    }

    
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={AppRouter} />);

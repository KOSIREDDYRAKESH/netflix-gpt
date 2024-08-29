import React, { useEffect } from 'react'
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

    const approuter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browser />
        }
    ]);


    return (
        <RouterProvider router={approuter} />
    );
}

export default Body;
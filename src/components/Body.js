import React, { useEffect } from 'react'
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../untils/userSlice";
import { auth } from '../untils/firebase';
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
    const dispatch = useDispatch();

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
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            } else {
                // User is signed out
                dispatch(removeUser());

            }
        });
    }, []);

    return (
        <RouterProvider router={approuter} />
    );
}

export default Body;
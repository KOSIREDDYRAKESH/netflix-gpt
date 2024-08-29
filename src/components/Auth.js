import React from 'react'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../untils/firebase";
import { addUser, removeUser } from "../untils/userSlice";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browser");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");

            }
        });
        return () => unsubscribe();
    }, []);
    return (
        <div></div>
    )
}

export default Auth
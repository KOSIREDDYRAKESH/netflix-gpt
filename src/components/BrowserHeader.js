import React from 'react';
import { auth } from '../untils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Auth from './Auth';
import { defaultAvatar, netflixLogo } from '../untils/constants';

const BrowserHeader = () => {
    const navigate = useNavigate();


    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }
    return (
        <div className=' ' >
            <Auth />
            <div className='px-32 bg-black fixed from-black  flex justify-between '>
                <img className='w-[14%]'
                    src={netflixLogo}
                    alt='LOGO'
                />
                <div className='flex'>
                    <img className='w-10 h-10 m-2' src={defaultAvatar} />
                    <button className='bg-red-600 w-24 h-10 m-2 rounded-md text-white' onClick={handleSignout}>Sign-Out</button>
                </div>
            </div>
        </div>
    )
}

export default BrowserHeader
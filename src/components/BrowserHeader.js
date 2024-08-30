import React from 'react';
import { auth } from '../untils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Auth from './Auth';
import { defaultAvatar, netflixLogo } from '../untils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toogleGptSearchView } from '../untils/gptSlice';
import { supportedLanguages } from '../untils/constants';
import { chnageLanguage } from '../untils/configSlice';

const BrowserHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    const handleGptSearch = () => {
        //toggle gpt search
        dispatch(toogleGptSearchView());
    }
    const handleLanguageChnage = (e) => {
        dispatch(chnageLanguage(e.target.value));
    }
    return (
        <div>
            <Auth />
            <div className='px-32 bg-black fixed from-black  flex justify-between '>
                <div className='flex w-[50%]'>
                    <img className='w-[26%]'
                        src={netflixLogo}
                        alt='LOGO'
                    />
                </div>
                <div className='flex w-[40%]'>
                    <button className='bg-purple-600 mx-6 px-6 h-10 p-2 mt-2 rounded-lg text-white' onClick={handleGptSearch}>{showGptSearch ? "Home Page" : "GPT | Search Movies"}</button>
                    {showGptSearch &&
                        <select onChange={handleLanguageChnage} className='bg-transparent text-white h-10 mt-2 rounded-xl p-1'>
                            {supportedLanguages.map(lang =>
                                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>}
                    <img className='w-10 h-10 m-2' src={defaultAvatar} alt='avatar' />
                    <button className='bg-red-600 w-24 h-10 m-2 rounded-md text-white' onClick={handleSignout}>Sign-Out</button>
                </div>
            </div>
        </div>
    )
}

export default BrowserHeader
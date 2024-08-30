import React, { useRef, useState } from 'react'
import Header from "./Header";
import { Validate } from "../untils/Validate";
import { auth } from "../untils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../untils/userSlice";
import { useDispatch } from 'react-redux';
import { defaultAvatar, netflixBgImg } from '../untils/constants';


const Login = () => {

    const [errorMsg, setErrorMsg] = useState();
    const [signInToggle, setSignInToggle] = useState(true);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const Password = useRef(null);

    const handleValidation = () => {
        const message = Validate(email.current.value, Password.current.value);
        setErrorMsg(message);
        if (message) return;

        if (!signInToggle) {
            //sign Up
            createUserWithEmailAndPassword(auth, email.current.value, Password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: defaultAvatar
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser(
                                { uid: uid, email: email, displayName: displayName, photoURL: photoURL }
                            ));
                    }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        } else {
            //sign In
            signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        }


    }

    const toggleSignIn = () => {
        setSignInToggle(!signInToggle)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>


                <div className=' bg-black h-screen w-screen'>
                    <img className='h-screen w-screen bg-blend-lighten hover:bg-blend-darken opacity-50'
                        src={netflixBgImg}
                        alt='BG-img'
                    />
                </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='absolute w-[30%] h-[87.1%] p-[65px] bg-black   flex flex-col text-white m-auto left-0 right-0 my-[100px] bg-opacity-70'>
                <h1 className='text-3xl'>Sign {signInToggle ? "In" : "up"}</h1>
                {signInToggle ? "" : <input type='text' ref={name} className='rounded-lg mt-4 p-4 h-[50px] bg-transparent border border-gray-500' placeholder='Full Name' />}
                <input type='text' ref={email} className='rounded-lg mt-6 p-4 h-[50px] bg-transparent border border-gray-500' placeholder='Email ' />
                <input type='password' ref={Password} className='rounded-lg mt-4 p-4 h-[50px] bg-transparent border border-gray-500' placeholder='Password' />
                <p className='text-red-600'>{errorMsg}</p>
                <button className='bg-red-600 mt-5 text-white h-[40px] rounded-md' onClick={handleValidation}>Sign {signInToggle ? "In" : "up"}</button>
                <span className='mt-3 text-center text-lg text-slate-400'>OR</span>
                {signInToggle ? <button className='mt-3 bg-transparent border border-slate-700 h-10 rounded-md'>Use a sign-in code</button> : ""}
                <span className='mt-3 text-center hover:underline'>{signInToggle ? "Forgot Password?" : ""}</span>

                <span className='mt-3 '><input type="checkbox" className="accent-slate-500" />
                    <label className="  cursor-pointer ml-5" htmlFor="check">
                        Remember Me
                    </label></span>
                {signInToggle ? <span className='mt-5'><span className='text-zinc-400'>New to Netflix?</span><span className='hover:underline' onClick={toggleSignIn}> Sign up now.</span></span>
                    : <span className='mt-5'><span className='text-zinc-400'>Already have account?</span><span className='hover:underline cursor-pointer' onClick={toggleSignIn}> Sign In now.</span></span>
                }
                <span className='mt-5 text-[12px] text-zinc-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-700 hover:underline'>Learn more.</span></span>
            </form>
        </div >
    )
}

export default Login
import React from 'react';
import { auth } from '../untils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Browser = () => {
    const navigate = useNavigate();

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });

    }
    return (
        <div >

            <div className='px-32  flex justify-between'>
                <img className='w-[14%]'
                    src='https://res.cloudinary.com/dc6fwvmjh/image/upload/v1724824657/React-usage/kp3v9ipfc2ekmwfwaaxu.png'
                    alt='LOGO'
                />
                <div className='flex'>
                    <img className='w-10 h-10 m-2' src='https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' />
                    <button className='bg-red-600 w-24 h-10 m-2 rounded-md text-white' onClick={handleSignout}>Sign-Out</button>
                </div>
            </div>
        </div>
    )
}

export default Browser;
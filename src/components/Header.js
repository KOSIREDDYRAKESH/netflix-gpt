import React from 'react'
import Auth from './Auth'
import { netflixLogo } from '../untils/constants'

const Header = () => {
    return (
        <div className='absolute px-32 bg-gradient-to-b w-screen from-black  to-transparent z-10'>
            <Auth />
            <img className='w-[14%]'
                src={netflixLogo}
                alt='LOGO'
            />

        </div>
    )
}

export default Header
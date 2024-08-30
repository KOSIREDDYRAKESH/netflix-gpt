import React from 'react'
import { img_CDN_URL } from '../untils/constants'

const MovieCrad = ({ posterPath }) => {
    return (
        <div className='w-[10vw] m-2 bg-slate-300'>
            <img className='w-96'
                src={img_CDN_URL + posterPath}
                alt='poster' />
        </div>
    )
}

export default MovieCrad
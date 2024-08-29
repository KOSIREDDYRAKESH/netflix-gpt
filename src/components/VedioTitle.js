import React from 'react'

const VedioTitle = ({ title, overview }) => {

    return (
        <div className='px-28 mt-72 w-6/12  rounded-full absolute text-white'>
            <h1 className='font-bold text-6xl p-2'>{title}</h1>
            <p className='p-2'>{overview}</p>
            <div>
                <button className='bg-white text-lg text-black w-32 m-2 p-3 rounded-md'>▶ Play</button>
                <button className='text-white bg-gray-500 w-32 m-2 p-3 rounded-md opacity-80'> ⓘ More info</button>
            </div>
        </div>
    )
}

export default VedioTitle
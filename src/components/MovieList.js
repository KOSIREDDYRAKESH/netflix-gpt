import React from 'react'
import MovieCrad from './MovieCrad'

const MovieList = ({ title, movies }) => {
    return (
        <div className='bg-black text-white py-2 px-6'>
            <h1 className='text-3xl my-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>

                <div className='flex '>
                    {movies?.map(movie =>
                        < MovieCrad key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
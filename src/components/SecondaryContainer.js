import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    return (
        movies.nowPlayingMovies && (
            <div className='-mt-48'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Most Popular"} movies={movies.popularMovies} />
            </div>)
    )
}

export default SecondaryContainer
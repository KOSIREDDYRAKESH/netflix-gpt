import React from 'react'
import { useDispatch } from 'react-redux';
import { API_GET } from '../untils/constants';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../untils/movieSlice';

const useTopRated = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_GET);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));

    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
    return (
        <div>useNowPlayingMovies</div>
    )
}

export default useTopRated;
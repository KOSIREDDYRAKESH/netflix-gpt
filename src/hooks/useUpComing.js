import React from 'react'
import { useDispatch } from 'react-redux';
import { API_GET } from '../untils/constants';
import { useEffect } from 'react';
import { addUpComingMovies } from '../untils/movieSlice';

const useUpComing = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_GET);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));

    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
    return (
        <div>useNowPlayingMovies</div>
    )
}

export default useUpComing;
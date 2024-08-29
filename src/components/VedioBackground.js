import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VedioBackground = ({ movieId }) => {
    const trailer = useSelector(store => store.movies?.trailerVedio);
    useMovieTrailer(movieId);
    return (

        <iframe className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"}
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>

    )
}

export default VedioBackground;
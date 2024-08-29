import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VedioBackground = ({ movieId }) => {
    const trailer = useSelector(store => store.movies?.trailerVedio);
    useMovieTrailer(movieId);
    return (
        <div>
            <div className='absolute mt-[5vh] w-screen h-[99vh]'></div>
            <iframe className='w-screen aspect-video'
                allowFullScreen=""
                src={"https://www.youtube-nocookie.com/embed/" + trailer?.key + "?&loop=1&autoplay=1&mute=1"}
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>

        </div>
    )
}

export default VedioBackground;
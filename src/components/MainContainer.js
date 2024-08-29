import React from 'react';
import VedioBackground from './VedioBackground';
import VedioTitle from './VedioTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return;
    const mainMovie = movies[1];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VedioTitle title={original_title} overview={overview} />
            <VedioBackground movieId={id} />
        </div>
    )
}

export default MainContainer
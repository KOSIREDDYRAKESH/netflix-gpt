
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComing from '../hooks/useUpComing';
import BrowserHeader from './BrowserHeader';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRated from "../hooks/useTopRated";

const Browser = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useUpComing();
    useTopRated();

    return (
        <div>
            <BrowserHeader />
            {/*
             * main container
                - background vedio
                - title 
             * secondary container
                - movies list * n
                    - cards * n 
             */}
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browser;
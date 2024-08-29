
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import BrowserHeader from './BrowserHeader';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {

    useNowPlayingMovies();

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
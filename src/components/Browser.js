
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComing from '../hooks/useUpComing';
import BrowserHeader from './BrowserHeader';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRated from "../hooks/useTopRated";
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browser = () => {
    const showGptPage = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useUpComing();
    useTopRated();

    return (
        <div>
            <BrowserHeader />
            {
                showGptPage ? <GptSearch /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>}


        </div>
    )
}

export default Browser;
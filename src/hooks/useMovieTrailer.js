import { API_GET } from "../untils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVedio } from "../untils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVedio = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_GET)
        const json = await data.json();
        const filterdTrailer = json.results.filter((vedio) => vedio.type === "Trailer");
        const trailer = filterdTrailer.length ? filterdTrailer[0] : json.results[0];
        dispatch(addTrailerVedio(trailer));
    }
    useEffect(() => {
        getMovieVedio();
    }, []);


}
export default useMovieTrailer;
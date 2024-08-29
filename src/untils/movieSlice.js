import { createSlice } from "@reduxjs/toolkit"
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVedio: null,
        popularMovies: null,
        upComingMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVedio: (state, action) => {
            state.trailerVedio = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        }
    }
})

export default movieSlice.reducer;
export const { addTopRatedMovies, addUpComingMovies, addNowPlayingMovies, addTrailerVedio, addPopularMovies } = movieSlice.actions;
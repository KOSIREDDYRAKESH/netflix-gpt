import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "../untils/movieSlice";
import gptReducer from "../untils/gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieReducer,
        gpt: gptReducer,
        config: configReducer
    },
});

export default appStore;
import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
      nowPlayingMovies: null,
      popularMovies : null,
      trailerVideo : null,
      topRatedMovies : null,
      upcomingMovies : null,
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
        //console.log("Now Playing Movies updated:", action.payload);
      },
      addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
        //console.log("Now Playing Movies updated:", action.payload);
      },
      addTopRatedMovies: (state, action) => {
        state.topRatedMovies = action.payload;
       
      },
      addUpcomingMovies: (state, action) => {
        state.upcomingMovies = action.payload;
       
      },

      addTrailer: (state, action) => {
        state.trailerVideo = action.payload; 
      }
    },
  });
  

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailer} = moviesSlice.actions;

export default moviesSlice.reducer
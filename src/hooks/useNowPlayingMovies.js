import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/config";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  
  const getNoWPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options)
    const json = await data.json();
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNoWPlayingMovies()
  },[])
}

export default useNowPlayingMovies;
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/config";

const usePopularMovies = () => {
    const dispatch = useDispatch()
  
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', api_options)
    const json = await data.json();
    console.log(json.results)
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    getPopularMovies()
  },[])
}

export default usePopularMovies;
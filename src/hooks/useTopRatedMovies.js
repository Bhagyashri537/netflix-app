import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/config";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
  
  const gettopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', api_options)
    const json = await data.json();
    console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    gettopRatedMovies()
  },[])
}

export default useTopRatedMovies;
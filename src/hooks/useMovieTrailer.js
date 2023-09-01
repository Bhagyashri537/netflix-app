import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/config";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch()
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",
      api_options
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0]
    console.log(trailer);
    dispatch(addTrailer(trailer))
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  
}

export default useMovieTrailer
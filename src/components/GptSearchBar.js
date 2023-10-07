import React, { useRef } from "react";
import openai from "../utils/openai";
import language from "../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../utils/config";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch()

  
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      api_options
    );
    const json = await data.json()
    return json.results;
  };

  const handlegptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      " . only gives me name of 5 movies comma seperated like the example given ahead. Example Sholay, Anadaj apna apna etc ";

    //api call to get movie result
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    //for each movie will seach in tmdb api
    const promiseArry = gptMovies.map((movie) => searchMovieTmdb(movie))
    //[1,2,3,4,5]
    //waiting for all 5 promises to resolve

    const tmdbResult = await Promise.all(promiseArry)
    console.log(tmdbResult)
    dispatch(addGptMovieResult({movieNames : gptMovies, movieResult: tmdbResult}))
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder={language[languageKey].searchPlaceholder}
        />
        <button
          className="bg-red-800 text-white col-span-4 m-4 rounded-lg"
          onClick={handlegptSearchClick}
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

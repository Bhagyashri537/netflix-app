import React from "react";
import MovieCard from "./MovieCard";
import "./index.css"

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll scroll-m-5">
        <div className="flex" style={{ overflowX: "scroll" }}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;


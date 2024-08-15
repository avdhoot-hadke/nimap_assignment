import React from "react";
import MovieCard from "./movieCard";

export default function MovieList({ movieArray }) {
  // console.log(movieArray);
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3 bg-neutral-950 pt-4 pb-16 place-items-center ">
      {movieArray.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

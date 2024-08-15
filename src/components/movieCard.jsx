import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  function getImageUrl() {
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${movie.id}`);
  };
  getImageUrl();
  return (
    <div className="w-3/4" onClick={handleClick}>
      <div className=" flex flex-col items-center font-light font-[Open Sans] z-10 ease-in-out duration-200  hover:scale-105 cursor-pointer">
        <img className="h-80 rounded-xl" src={getImageUrl()} />
        <h1 className="text-white  w-52">
          <span className="text-white/50">Name:</span> {movie.title}
        </h1>
        <p className="text-white  w-52 text-sm">
          <span className="text-white/50">Rating: </span>
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
}

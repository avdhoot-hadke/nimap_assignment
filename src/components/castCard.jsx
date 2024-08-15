import React from "react";

export default function CastCard({ cast }) {
  console.log(cast);
  function getImageUrl(path) {
    // console.log(`https://image.tmdb.org/t/p/w500${path}`);
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  return (
    <div className="text-white py-2  w-44 flex flex-col items-center">
      <img className="h-100" src={getImageUrl(cast?.profile_path)} />
      <div className="text-xs md:text-base w-full">{cast?.name}</div>
      <div className="text-xs w-full md:text-sm text-gray-300">
        <span className="font-thin text-gray-300">Character:</span>
        {cast?.character}
      </div>
    </div>
  );
}

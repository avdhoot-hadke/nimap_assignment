import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState();

  function getImageUrl(path) {
    // console.log(`https://image.tmdb.org/t/p/w500${path}`);
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  async function getMovieDetail() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url_movieDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    // console.log("url : ", url_movieDetail);
    const result = await axios(url_movieDetail);
    setMovieDetail(result.data);
    // console.log(" getMovieDetail", result.data);
  }

  useEffect(() => {
    getMovieDetail();
  }, [id]);
  return (
    <div className="text-white flex  overflow-hidden">
      <div
        className=" w-full h-full py-2 px-10 flex flex-col  bg-contain font-[Open Sans]  bg-no-repeat bg-right"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%), url(${getImageUrl(
            movieDetail?.backdrop_path
          )})`,
        }}
      >
        <div className="flex py-2">
          <img
            className="h-60 border-[0.5px]"
            src={getImageUrl(movieDetail?.poster_path)}
          />
          <div className="px-4">
            <h1 className="text-3xl font-[ui-serif]  ">{movieDetail?.title}</h1>
            <p className="py-2">
              <span className="font-thin">Rating : </span>
              {movieDetail?.vote_average.toFixed(1)}
            </p>
            <div className="text-white flex gap-x-3 py-2">
              {movieDetail?.genres.map((genre) => {
                return (
                  <p key={genre?.id} className="text-blue-400">
                    {genre?.name}
                  </p>
                );
              })}
            </div>
            <p className="font-thin my-2 border-[0.5px] inline-block rounded-lg p-2">
              {movieDetail?.runtime} mins
            </p>
            <p className="py-2 font-light">
              <span className="font-thin">Release date : </span>
              {movieDetail?.release_date}
            </p>
          </div>
        </div>
        <h2 className="font-bold text-xl py-2">Overview : </h2>
        <p className=" font-light w-1/2">{movieDetail?.overview}</p>
      </div>
    </div>
  );
}

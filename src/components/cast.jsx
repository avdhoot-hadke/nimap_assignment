import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastCard from "./castCard";

export default function Cast() {
  const { id } = useParams();
  const [castObj, setCastObj] = useState();
  //   console.log("id", id);

  async function getCast() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url_cast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
    const result = await axios(url_cast);
    setCastObj(result.data);
    // console.log(" getCast", result.data);
  }
  useEffect(() => {
    getCast();
  }, [id]);

  return (
    <div className="text-white px-10 bg-neutral-950 py-4 h-full">
      <h1 className="text-xl font-bold">Cast</h1>
      <div className="grid grid-cols-2 place-items-center md:grid-cols-4 lg:grid-cols-6">
        {castObj?.cast.map((cast) => {
          return <CastCard cast={cast} key={cast?.id} />;
        })}
      </div>
    </div>
  );
}

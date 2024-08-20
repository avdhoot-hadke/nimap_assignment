import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MovieList from "./movieList";

export default function GetAll() {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    // console.log("handlePageRun selected ", data.selected + 1);
  };

  async function getAll() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url_getAll = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
    const result = await axios(url_getAll);
    setMovieData(result.data.results);
    setMaxPage(result.data.total_pages);
    // console.log(" getAll run");
  }
  //   console.log("RENDER START, rerender before effect");

  useEffect(() => {
    // console.log("start of useEffect");
    getAll();
    // console.log("movieData in useEffect", movieData);
    // console.log("end of useEffect");
  }, [page]);

  //   console.log(
  //     "RENDER END,  before return movieData: ",
  //     movieData,
  //     " page : ",
  //     page
  //   );
  return (
    <div>
      <MovieList movieArray={movieData} />
      <ReactPaginate
        className=" flex  gap-x-5 justify-center   backdrop-blur-3xl bg-gradient-to-r from-neutral-950 via-neutral-700/30 to-neutral-950 py-2 sticky bottom-0"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={".  .  ."}
        pageCount={500}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        pageClassName=" rounded-lg bg-neutral-900 text-white hover:bg-gray-300 w-10 h-10  hover:bg-neutral-600 "
        pageLinkClassName="w-full h-full flex justify-center items-center"
        previousClassName=" rounded-lg bg-neutral-900 text-white hover:bg-gray-300 w-20 h-10 flex justify-center items-center hover:bg-neutral-600 "
        nextClassName=" rounded-lg bg-neutral-900 text-white hover:bg-gray-300 px-3 py-2 hover:bg-neutral-600 "
        breakClassName=" rounded-lg bg-neutral-900 text-white hover:bg-gray-300 w-20 h-10 flex justify-center items-center hover:bg-neutral-600 "
        activeClassName=" bg-neutral-700 text-white  pointer-events-none "
      />
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    navigate(`/?search=${search}`);
  };

  return (
    <div className="flex flex-col z-50 sticky top-0 md:flex-row px-4 py-2 backdrop-blur-3xl bg-gradient-to-r from-neutral-950 via-neutral-700/30 to-neutral-950 text-white items-center font-[Open Sans]">
      <div className="pt-2 md:pt-0">
        <Link to="/">
          <h1 className="font-[Oswald] text-3xl">MovieDB</h1>
        </Link>
      </div>
      <div className="flex  flex-col pt-2 md:pt-0  md:flex-row md:ms-auto items-center gap-x-3">
        <div className="flex gap-x-3">
          <Link to="/">Popular</Link>
          <Link to="/top-rated">Top rated</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div className="w-80 pt-2 md:pt-0 flex relative items-center">
          <img
            className="absolute w-6 ms-2"
            src={searchIcon}
            alt="searchIcon"
          />

          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search user"
            className="w-full h-10 
        ps-10 focus:outline-none text-black border border-neutral-400 rounded-lg "
          />
          <button
            onClick={handleSearch}
            className="ms-2 px-2 bg-neutral-600 text-black h-10 w-20 rounded-lg hover:bg-neutral-700 ease-in-out hover:scale-95 text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

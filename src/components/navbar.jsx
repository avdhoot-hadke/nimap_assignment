import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("hamburger", isOpen);
  return (
    <div
      className={` overflow-hidden flex z-50 text-white sticky top-0 px-4 py-2 transition-height duration-300 backdrop-blur-3xl bg-gradient-to-r from-neutral-950 via-neutral-700/30 to-neutral-950  font-[Open Sans]
        ${isMobile && `  flex-col ${isOpen ? "h-[150px]" : "h-[56px]"} `}
        `}
    >
      <div className="flex items-center">
        <Link to="/">
          <h1 className="font-[Oswald] text-3xl">MovieDB</h1>
        </Link>
        {isMobile && (
          <div className="ms-auto" onClick={() => {}}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        )}
      </div>
      <div
        className={`flex flex-col pt-2 md:pt-0 md:flex-row md:ms-auto
      items-center gap-x-3 `}
      >
        <NavbarLinks />
      </div>
    </div>
  );
}

export function NavbarLinks() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    navigate(`/?search=${search}`);
  };

  return (
    <>
      <div className="flex gap-x-3">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <div className="w-80 pt-2 md:pt-0 flex relative items-center">
        <img className="absolute w-6 ms-2" src={searchIcon} alt="searchIcon" />

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
    </>
  );
}

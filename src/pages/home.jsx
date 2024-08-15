import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GetAll from "../components/getAll";
import Search from "../components/search";

export default function Home() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  return searchQuery != null ? <Search /> : <GetAll />;
}

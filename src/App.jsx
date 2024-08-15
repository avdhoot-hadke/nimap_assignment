import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import FilterMovies from "./components/filter";

import SingleMoviePage from "./pages/singleMoviePage";

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/top-rated"
            element={<FilterMovies type="top_rated" />}
          />
          <Route path="/upcoming" element={<FilterMovies type="upcoming" />} />
          <Route path="/:id" element={<SingleMoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

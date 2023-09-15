import React, { useEffect, useState } from "react";
import Main from "./Main";
import AddFavourites from "./AddFavourites";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"; // Corrected icon name

function Home() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=767a7cc8de7d102579d3d1cf9acd65e8";
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=767a7cc8de7d102579d3d1cf9acd65e8&query=";

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const first10Movies = data.results.slice(0, 10);
        setMovies(first10Movies);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="App bg-custom-blue p-5">
      <div className="flex search_nav items-center justify-between">
        <div className="flex mr-12 gap-4 items-center">
          <a href="{App/}" className="flex mr-12 gap-2 items-center">
            <img src="/images/moviebox_logo.png" alt="logo" />
            <h1 className="text-white text-3xl">MovieBox</h1>
          </a>
        </div>

        <div className="bg-white py-1 px-2 rounded-md">
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              placeholder="What do you want to watch?"
              className="border border-transparent focus:outline-none focus:ring-0 text-xm"
            />
            <button
              type="submit"
              className="ml-12 p-1 rounded-md hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faSearch} /> {/* Corrected icon name */}
            </button>
          </form>
        </div>

        <div className="text-white items-center mr-2">
          <a href="/" className="mr-2 ">
            Sign in
          </a>
          <FontAwesomeIcon
            icon={faBars}
            className="p-2 bg-orange-600 rounded-full"
          />
        </div>

        <div className="mt-4">
          <Main />
        </div>

        <div className="movies grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              favouriteComponent={AddFavourites}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

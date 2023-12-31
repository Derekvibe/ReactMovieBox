import React, { useEffect, useState } from "react";
import Main from "./Main";
import MovieCard from "./MovieCard";
import { Link} from "react-router-dom"
import AddFavourite from "./AddFavourite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

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
        
        <Link to="/" className="flex gap-1 items-center">
        <img src="/images/moviebox_logo.png" alt="logo"/>
            <h1 className="text-white text-2xl hidden sm:block">MovieBox</h1>
        </Link>        
        </div>

        <div className="bg-white py-1 px-2 rounded-md">
  <form onSubmit={handleSearch} className="flex">
    <input
      onChange={(e) => setTerm(e.target.value)}
      value={term}
      placeholder="Search Movies"
      className="border border-transparent focus:outline-none focus:ring-0 text-xm md:text-sm lg:text-base flex-grow"
    />
    <button
      type="submit"
      className="p-1 rounded-md hover:bg-black hover:text-white ml-2"
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
</div>


        <div className="text-white items-center mr-2 hidden md:flex">
        <a href="/" className="mr-2">
          Sign in
        </a>
        <FontAwesomeIcon
          icon={faBars}
          className="p-2 bg-orange-600 rounded-full"
        />
      </div>


      </div>

      <div className="mt-4">
        <Main />
      </div>

      {movies.length > 0 && (
        <div className="movies grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

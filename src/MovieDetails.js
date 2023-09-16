import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHome, faTv, faVideo } from '@fortawesome/free-solid-svg-icons';

function MovieDetails({ match }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const movieId = match.params.id;
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=767a7cc8de7d102579d3d1cf9acd65e8`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [match.params.id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <p className='p-2 bg-orange-400 rounded-md'>
          <FontAwesomeIcon icon={faHome} />
          Home
        </p>
        <p className='p-2 bg-orange-400 rounded-md'>
          <FontAwesomeIcon icon={faVideo} />
          Movie
        </p>
        <p className='p-2 bg-orange-400 rounded-md'>
          <FontAwesomeIcon icon={faTv} />
          TV Series
        </p>
        <p className='p-2 bg-orange-400 rounded-md'>
=======
import AddFavourites from "./AddFavourites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHome,
  faTv,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=767a7cc8de7d102579d3d1cf9acd65e8`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setDetails(res?.data);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [url]);

  return (
    <div>
      <div>
        <Link to="/">
          <p className="p-2 bg-orange-400 rounded-md">
            <FontAwesomeIcon icon={faHome} />
            Home
          </p>
        </Link>
        <p className="p-2 bg-orange-400 rounded-md">
          <FontAwesomeIcon icon={faVideo} />
          Movie
        </p>
        <p className="p-2 bg-orange-400 rounded-md">
          <FontAwesomeIcon icon={faTv} />
          TV Series
        </p>
        <p className="p-2 bg-orange-400 rounded-md">
>>>>>>> edcf314e4049c1fe5d97faf496682a47d3cc4e88
          <FontAwesomeIcon icon={faCalendar} />
          Upcoming
        </p>
      </div>
<<<<<<< HEAD
      <div>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        <p>Release Date (UTC): {movieDetails.release_date}</p>
      </div>
    </div>
  );
}
=======
      {loading && <p>Loading......</p>}
      {error && <p>{error}</p>}
      {details && <h1>{details.original_title}</h1>}
    </div>
  );
};
>>>>>>> edcf314e4049c1fe5d97faf496682a47d3cc4e88

export default MovieDetails;

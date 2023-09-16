import React, { useEffect, useState } from "react";
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
          <FontAwesomeIcon icon={faCalendar} />
          Upcoming
        </p>
      </div>
      <div>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        <p>Release Date (UTC): {movieDetails.release_date}</p>
      </div>
    </div>
  );
}

export default MovieDetails;

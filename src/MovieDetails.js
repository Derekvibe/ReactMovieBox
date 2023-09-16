import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faHome, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'

const MovieDetails = () => {
  const [details, setDetails] = useState(null); // Initialize as null or an object
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

  console.log(details);

  return (
    <div className='grid grid-row-3 grid-flow-col gap-1 m-4'>
      <div className='p-4 bg-orange-400 rounded-md'>

        <div className='flex items-center gap-2'>
          <img src="/images/moviebox_logo.png" alt="logo" className='pl-4'/>
          <h1 className="text-white text-2xl">MovieBox</h1>
        </div>
        

        <Link to="/">
          <p className='mt-8'>
            <FontAwesomeIcon icon={faHome} className='pl-2 pr-2'/>
            Home
          </p>
        </Link>
        <p className='border-l-4 border-l-red-700 mt-8'>
          <FontAwesomeIcon icon={faVideo} className='pl-2 pr-2'/>
          Movie
        </p>
        <p className='mt-8'>
          <FontAwesomeIcon icon={faTv} className='pl-2 pr-2'/>
          Tv Series
        </p>
        <p className='mt-8'>
          <FontAwesomeIcon icon={faCalendar} className='pl-2 pr-2'/>
          Upcoming
        </p>
      </div>

      <div className="col-span-2">
        
        {loading && <p>Loading........</p>}
        {error && <p>{error}</p>}
        
        {details && (
          <div>
            <img className='rounded-md'
              src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
              alt={details.original_title}
            />
            <h1 className='text-xl mt-2'>{details.original_title}</h1>

            <p>{new Date(details.release_date).toUTCString()}</p>

            <p>{Math.floor(details.runtime / 60)}h {details.runtime % 60}m</p>

            <p data-testid="movie-overview" className='mt-4'>{details.overview}</p>
          
          </div>
          
        )}


      </div>

    </div>
  );
};

export default MovieDetails;

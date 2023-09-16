import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCalendar, faHome, faTv, faVideoCamera } from '@fortawesome/free-solid-svg-icons'


const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=767a7cc8de7d102579d3d1cf9acd65e8`;
  
  useEffect(() =>{
    setLoading(true);
    axios
      .get(url)
      .then((res)=>{
        setLoading(false);
        setDetails(res?.data)
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
        <p className='p-2 bg-orange-400 rounded-md'>
          <FontAwesomeIcon icon={faHome}/>
            Home
        </p>
      </Link>
        <p className='p-2 bg-orange-400 rounded-md'>
          <FontAwesomeIcon icon={faVideoCamera}/>
            Movie
        </p>
        <p className='p-2 bg-orange-400 rounded-md'>
          <FontAwesomeIcon icon={faTv}/>
            Tv Series
        </p>
        <p className='p-2 bg-orange-400 rounded-md'>
          <FontAwesomeIcon icon={faCalendar}/>
            Upcoming
        </p>
      </div>

      {loading && <p>Loading........</p>}
      {error && <p>{error}</p>}
      {details && <h1>{details.original_title}</h1>}
  </div>
  );
};

export default MovieDetails;
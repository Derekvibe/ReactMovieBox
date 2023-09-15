import React from 'react'
import AddFavourites from './AddFavourites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHome, faTv, faVideo } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = () => {
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

    </div>
  )
}

export default MovieDetails
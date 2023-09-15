import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from './FavoritesContext';

const AddFavourites = ({ movie }) => {
  const { favorites } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <>
      <span className='mr-2'>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        <FontAwesomeIcon icon={faHeart} color={isFavorite ? 'red' : 'gray'} className='ml-2' />
      </span>
    </>
  );
};

export default AddFavourites;

import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./Request";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    axios
      .get(requests.requestTrending)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str;
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };

  return (
    <div className="w-full h-550 text-white relative">
      <Slider {...settings}>
        {movies.map((movie, i) => (
          <div key={i} className="w-full h-full relative">
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie?.title} />
            <div className="absolute left-0 p-4 md:p-8 bg-gradient-to-t from-black w-2/3 top-1/2 transform -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-center">{movie?.title}</h1>
              <p className="w-full md:max-w-70 lg:max-w-35 text-gray-200">
                {truncateString(movie?.overview, 150)}
              </p>
              <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
              
              <div className="my-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-4">Play</button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">Watch Later</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Main;

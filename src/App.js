import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import MovieCard from './MovieCard';
import Main from './Main';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/movie-card" element={<MovieCard />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

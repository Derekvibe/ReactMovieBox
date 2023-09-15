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
        <Route path="/" element={<Main />} />
        <Route path="/home/*" element={<Home />}/>
        <Route path="/movie-card" element={<MovieCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
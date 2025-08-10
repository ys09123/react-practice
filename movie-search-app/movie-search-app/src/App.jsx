import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=4b41312&s=batman'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("batman");

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <>
      <div className='app'>
        <h1>Movie Search</h1>

        <div>
          <input  />
        </div>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react';
import MovieForm from './components/MovieForms';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleMovieSubmission = (movieData) => {
    // Add the submitted movie data to the movies array
    setMovies([...movies, movieData]);
  };

  return (
    <div>
      <h1 className='title'>Movie App</h1>
      <MovieForm onSubmitMovie={handleMovieSubmission} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

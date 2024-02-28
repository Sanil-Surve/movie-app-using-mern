import React, { useState } from 'react';
import "./MovieForm.css";

const MovieForms = ({ onSubmitMovie }) => {
  // State variables for form fields
  const [name, setMovieName] = useState('');
  const [ratings, setRatings] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a movie object with the entered data
    const movieData = {
      name: name,
      ratings: parseInt(ratings), // Convert ratings to an integer
      duration: parseInt(duration), // Convert duration to an integer
    };

    // Pass the movie data to the parent component (or another handler)
    onSubmitMovie(movieData);

    // Reset form fields after submission if needed
    setMovieName('');
    setRatings('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setMovieName(e.target.value)}
          required
        />
      </label>

      <label>
        Ratings:
        <input
          type="text"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
          required
        />
      </label>

      <label>
        Duration:
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForms;


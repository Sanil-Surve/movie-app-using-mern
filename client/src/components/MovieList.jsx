import "./MovieList.css";
const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>Name:</strong> {movie.name},{' '}
            <strong>Ratings:</strong> {movie.ratings}/100,{' '}
            <strong>Duration:</strong> {movie.duration / 60} hrs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;


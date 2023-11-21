import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';

function MoviesList({movies}) {
  const renderMovies = movies.map((movie) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ));
  return (
    // <div>MovieList
      <ul>{renderMovies}</ul>
    // </div>
  )
}

export default MoviesList
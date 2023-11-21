import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

function MovieShow({movies}) {
    const params= useParams();
//
const movie= movies.find(movie=> movie.id===parseInt(params.movieId))

  return (
    <div>MovieShow
        <h3>{movie.title}</h3>
    </div>
  )
}

export default MovieShow
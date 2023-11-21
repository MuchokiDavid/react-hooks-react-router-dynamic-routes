import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";

function MoviesPage({ movies }) {
  const match= useRouteMatch();
  return (
    <div>
      <MoviesList movies={movies} />
      <Route  exact path= {match.url}>
        {/* Adding code to show a message to the user to select a movie if they haven't yet */}
        <h3>Chose movie from the list</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}
        <MovieShow movies = {movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;

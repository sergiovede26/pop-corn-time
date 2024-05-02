/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import movies from "../data/movies.json";
import { useState } from "react";
import "./MovieList.css";
import MovieSummary from "./MovieSummary";

function MovieList() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => movie.id !== movieId);
    setMoviesToDisplay(newList);
  };

  let title;
  if (moviesToDisplay.length > 0) {
    title = <h1>Number of movies: {moviesToDisplay.length}</h1>;
  } else {
    title = <h1>Sorry, no movies to display</h1>;
  }

  return (
    <>
      <section className="MovieList">
        {title}

        {moviesToDisplay.map((movie) => {
          return (
            <MovieSummary
              key={movie.id}
              movieDetails={movie}
              callbackToDelete={deleteMovie}
            />
          );
        })}
      </section>
    </>
  );
}

export default MovieList;

import { useParams } from "react-router-dom";
import moviesArr from "../data/movies.json";
import { Link } from "react-router-dom";

function MovieDetails() {
  const { movieId } = useParams();

  const movie = moviesArr.find((movieObj) => movieObj.id === parseInt(movieId));

  return (
    <div className="MovieDetails">

      <h1>{movie.title}</h1>

      {movie.imgURL ? (
        <img src={movie.imgURL} alt="movie-poster" />
      ) : (
        <img src="https://dummyimage.com/182x268/ffffff/000000" />
      )}

      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>

      <div>
      <p>Genres: {movie.genres.map(genre => <span key={movie.id} className="badge"> {genre} </span>)}</p>
      </div>


      <Link to="/">Back to HomePage</Link>


    </div>
  );
}

export default MovieDetails;

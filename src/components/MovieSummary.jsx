/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <div className="card" key={props.movieDetails.index}>
      {props.movieDetails.imgURL ? ( //!== undefined
        <img src={props.movieDetails.imgURL} alt="movie-poster" />
      ) : (
        <img src="https://dummyimage.com/182x268/ffffff/000000" />
      )}

      <p>Title: {props.movieDetails.title}</p>

      {props.movieDetails.rating >= 8 && <p>RECOMMENDED!</p>}


      <Link to={`/movies/${props.movieDetails.id}`}>More Details</Link>

      <button
        className="DeleteButton"
        onClick={() => {
          props.callbackToDelete(props.movieDetails.id);
        }}
      >
        Delete
      </button>


    </div>
  );
}

export default Movie;

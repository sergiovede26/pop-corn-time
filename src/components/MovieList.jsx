/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import movies from "../data/movies.json"
import { useState } from "react";
import "./MovieList.css";

function MovieList(){

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        console.log(`deleting movie... ${movieId}`);
        
        const newList = moviesToDisplay.filter(movie => movie.id !== movieId)
            // if(movie.id === movieId) {
            //     return false;
            // } else {
            //     return true;
            // }
        

        

        setMoviesToDisplay(newList)
    }

    return (
    <>
    <section className="MovieList">

        <h1>Number of Movies: {moviesToDisplay.length}</h1>

        {moviesToDisplay.map((movie, index) => {
            return (
                <div className="card" key={index}>
                    <p>Title: {movie.title}</p>
                    <p>Rating: {movie.rating}</p>
                    
                    <button className="DeleteButton" onClick={() => {deleteMovie(movie.id)}}>Delete</button>
                </div>
            )
        })}
    </section>
    </>
    )
}

export default MovieList;
/* eslint-disable react/jsx-key */

import movies from "../data/movies.json"

function MovieList(){

    console.log(movies)

    return (
    <>
    <section className="MovieList">
        {movies.map((movie) => {
            return (
                <div className="card">
                    <p>Title: {movie.title}</p>
                    <p>Rating: {movie.rating}</p>
                </div>
            )
        })}
    </section>
    </>
    )
}

export default MovieList;
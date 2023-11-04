    import React from "react";
    import Moviecard from "./moviecard"; 

    function MovieList({ movies }) {
    return (
        <div className="movie-list">
        {movies.map((movie, index) => (
            <moviecard key={index} {...movie} />
        ))}
        </div>
    );
    }

    export default MovieList;
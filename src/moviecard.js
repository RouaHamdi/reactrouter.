import React from "react";

function moviecard({ title, description, posterURL, rating }) {
    return (
    <div className="movie-card">
        <img src={posterURL} alt={title} />
        <div className="movie-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        </div>
    </div>
);
}

export default moviecard;
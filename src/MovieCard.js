import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="movie-card">
      <Link
        to={`/movies/${movie.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;

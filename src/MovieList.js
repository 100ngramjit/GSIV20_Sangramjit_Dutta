import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, handleSearch }) {
  const [query, setQuery] = useState("");

  const handleFormSearch = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <>
      <form onSubmit={handleFormSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// adult
// :
// false
// backdrop_path
// :
// "/9RJjixeI023s5UilkD7rSMFd1Yh.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 100000000
// genres
// :
// (5) [{…}, {…}, {…}, {…}, {…}]
// homepage
// :
// "https://www.thesupermariobros.movie"
// id
// :
// 502356
// imdb_id
// :
// "tt6718170"
// original_language
// :
// "en"
// original_title
// :
// "The Super Mario Bros. Movie"
// overview
// :
// "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi."
// popularity
// :
// 7184.937
// poster_path
// :
// "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
// production_companies
// :
// (3) [{…}, {…}, {…}]
// production_countries
// :
// (2) [{…}, {…}]
// release_date
// :
// "2023-04-05"
// revenue
// :
// 58000000
// runtime
// :
// 92
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// ""
// title
// :
// "The Super Mario Bros. Movie"
// video
// :
// false
// vote_average
// :
// 7.566
// vote_count
// :
// 351
const API_URL = `https://api.themoviedb.org/3/movie/`;

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((resp) => setMovie(resp.data));
    axios
      .get(`${API_URL}${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        console.log(response.data.cast);
        setCast(response.data.cast);
      });
  }, [id]);

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h2>{movie.original_title}</h2>
        <p>Rating: {movie.vote_average}</p>
        <p>Year: {movie.release_date}</p>
        <p>Length: {movie.runtime} min</p>
        <p>{movie.overview}</p>
        <div>
          cast-
          <p>
            {cast.map(({ name }) => (
              <>
                {name}
                {" , "}
              </>
            ))}
          </p>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default MovieDetails;

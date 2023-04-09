import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response.data.results);

        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      );
      setMovies(response.data.results);
      setLoading(false);
      setSearchQuery(query);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleReset = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovies(response.data.results);
      setLoading(false);
      setSearchQuery("");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                searchQuery={searchQuery}
                loading={loading}
                error={error}
                handleSearch={handleSearch}
                handleReset={handleReset}
              />
            }
          />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

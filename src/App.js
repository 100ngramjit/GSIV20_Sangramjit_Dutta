import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Latest from "./components/Latest";
import Details from "./components/Details";
import Header from "./components/header";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response.data);
        if (url.includes("query")) {
          setData(response?.data?.results);
        } else {
          setData([...data, ...response?.data?.results]);
        }
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page, url]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Latest data={data} loading={loading} />}
              exact
            />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router";
import Loader from "react-js-loader";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [erro, setErro] = useState(null);
  const [load, setLoad] = useState(true);
  const [cred, setCred] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const responsecred = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        console.log(response.data);
        console.log(responsecred.data);
        setCred(responsecred.data);
        setItem(response.data);
      } catch (err) {
        setErro(err.message);
        setItem(null);
      } finally {
        setLoad(false);
      }
    };

    getDetail();
  }, [id]);

  console.log(item?.poster_path);
  return load ? (
    <Loader
      type="spinner-default"
      bgColor={"#00235B"}
      title={"loading"}
      color={"#00235B"}
      size={100}
    />
  ) : (
    <>
      <div className="det">
        <div className="line1">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`}
            alt={item?.title}
          />
        </div>

        <div className="line2">
          <h3>
            {item?.title}({item?.vote_average})
          </h3>
          <p>
            {item?.release_date}|{item?.runtime}mins|
          </p>
          <p>cast : {cred?.cast?.map((c) => c.name + " , ")}</p>
          <p>Description:{item?.overview}</p>
        </div>
      </div>
    </>
  );
}

export default Details;

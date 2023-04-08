import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Cards({ id, poster, title, rating, desc }) {
  return (
    <div className="media">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w300/${poster}`}
        alt={title}
      />
      <div className="card-content">
        <div className="flex-space-between">
          <h5 className="title">
            {" "}
            <Link
              className="cards"
              to={{ pathname: `details/${id}`, query: { id } }}
            >
              {title}
            </Link>
          </h5>
          <h5 className="rating">{rating}</h5>
        </div>
        <p className="two-line-container">{desc}</p>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import "./style.css";
import Cards from "./Cards";
import Loader from "react-js-loader";

function Latest({ data, loading }) {
  return (
    <>
      <div className="Latest">
        {loading && (
          <Loader
            type="spinner-default"
            bgColor={"#00235B"}
            title={"loading"}
            color={"#00235B"}
            size={100}
          />
        )}
        {data &&
          data?.map((c) => (
            <Cards
              key={c?.id}
              id={c?.id}
              poster={c?.poster_path}
              title={c?.title}
              rating={c?.vote_average}
              desc={c?.overview}
            />
          ))}
      </div>
    </>
  );
}

export default Latest;

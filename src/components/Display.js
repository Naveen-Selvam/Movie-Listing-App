import React from "react";
import { useSelector } from "react-redux";
import EachItem from "./EachItem";

const Display = (props) => {
  const { value } = props;
  const movies = useSelector((state) => state.movies);

  return (
    <div className="card">
      {movies
        .filter((movie) => {
          return movie.movieName.toLowerCase().includes(value);
        })
        .map((data) => {
          return (
            <div>
              <EachItem
                id={data.id}
                name={data.movieName}
                rating={data.ranking}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Display;

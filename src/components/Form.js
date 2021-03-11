import React, { useState } from "react";
import { startAddData, startEditData } from "../action/formAction";
import { useDispatch, useSelector } from "react-redux";

const Form = (props) => {
  const [movieName, setMovieName] = useState(props.name ? props.name : "");
  const [ranking, setRanking] = useState(props.ranking ? props.ranking : "");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const result = movies.sort((a, b) => Number(a.ranking) - Number(b.ranking));
  const final = result[0];

  const handleChange = (e) => {
    if (e.target.name === "movieName") {
      setMovieName(e.target.value);
    } else if (e.target.name === "ranking") {
      setRanking(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: props.id ? props.id : Math.random(),
      movieName,
      ranking,
    };
    if (props.id) {
      dispatch(startEditData(data));
      props.handleEdit();
    } else {
      dispatch(startAddData(data));
      setMovieName("");
      setRanking("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Movie Name</label>
        <br />
        <input
          type="text"
          value={movieName}
          name="movieName"
          onChange={handleChange}
          required
        />
        <br />
        <label>Ranking</label>
        <br />
        <input
          type="number"
          value={ranking}
          name="ranking"
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value={props.name ? "save" : "Add"} />
      </form>
      {final && !props.id && (
        <div>
          <h1> Name={final.movieName} </h1>
          <h1> Rating={final.ranking} </h1>
        </div>
      )}
    </div>
  );
};

export default Form;

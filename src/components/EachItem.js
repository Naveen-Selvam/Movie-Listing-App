import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startDeleteData } from "../action/formAction";
import Form from "./Form";
const EachItem = (props) => {
  const { id, name, rating } = props;
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const handleDelete = (id) => {
    dispatch(startDeleteData(id));
  };
  const handleEdit = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1> Name : {name}</h1>
      <h1> Ranking : {rating}</h1>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleEdit(id)}>Edit</button>
      {toggle && (
        <Form name={name} ranking={rating} id={id} handleEdit={handleEdit} />
      )}
    </div>
  );
};

export default EachItem;

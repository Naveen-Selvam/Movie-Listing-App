import React, { useState } from "react";
import Form from "./Form";
import Search from "./Search";
import Display from "./Display";

const Container = (props) => {
  const [value, setValue] = useState("");
  const searchFunction = (data) => {
    setValue(data);
  };
  return (
    <div>
      <Search className="search" searchFunction={searchFunction} />
      <div className="alignment">
        <Display value={value} />
        <Form />
      </div>
    </div>
  );
};

export default Container;

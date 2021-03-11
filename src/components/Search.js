import React, { useState } from "react";

const Search = (props) => {
  const { searchFunction } = props;
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    searchFunction(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;

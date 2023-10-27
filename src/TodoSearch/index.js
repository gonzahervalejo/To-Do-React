import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <div className="contenedorInput">
      <input
        className="TodoSearch"
        placeholder="Estudiar React"
        event={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
};

export default TodoSearch;

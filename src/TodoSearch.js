import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  return (
    <div className="contenedorInput">
      <input
        className="TodoSearch"
        placeholder="Estudiar React"
        onChange={(event) => {
          console.log("escribiste en el todo");
          console.log(event);
          console.log(event.target);
          console.log(event.target.value);
        }}
      />
    </div>
  );
};

export default TodoSearch;

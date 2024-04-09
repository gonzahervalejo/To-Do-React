import React from "react";
import "./TodoForm.css";

const TodoForm = () => {
  return (
    <form className="form">
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Escribe tu tarea pendiente" />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

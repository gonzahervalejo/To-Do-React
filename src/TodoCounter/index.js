import "./TodoCounter.css";

const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className="TodoCounter">
      Has completado {completed} de {total} TODOS
    </h1>
  );
};
export default TodoCounter;

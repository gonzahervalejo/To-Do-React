import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "tomar curso react", completed: false },
  { text: "Cagar a piñas a menendez", completed: false },
  { text: "Echar a menendez", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={5} total={10} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

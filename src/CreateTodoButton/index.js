import "./CreateTodoButton.css";

const CreateTodoButton = (setIsModalOpen) => {
  return (
    <button className="CreateTodoButton" onClick={() => setIsModalOpen(true)}>
      +
    </button>
  );
};

export default CreateTodoButton;

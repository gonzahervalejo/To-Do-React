import "./CreateTodoButton.css";

const CreateTodoButton = ({ setIsModalOpen })  => {

  
  function handleClick() { setIsModalOpen(true)}
  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
};

export default CreateTodoButton;

import React from "react";
import { TiDelete } from "react-icons/ti";
import TodoForm from "../TodoForm";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div>
      <TiDelete onClick={closeModal} size={30} cursor={"pointer"} />
      <TodoForm />
    </div>
  );
};

export default Modal;

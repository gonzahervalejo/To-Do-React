import React from "react";
import { TiDelete } from "react-icons/ti";
import casco1jpg from "../casco1jpg.jpg";


const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div>
      <img src={casco1jpg} alt="foto" />
      <TiDelete onClick={closeModal} size={30} cursor={"pointer"} />
    </div>
  );
};

export default Modal;

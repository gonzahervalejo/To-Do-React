import React from "react";
import { TiDelete } from "react-icons/ti";

const DeleteIcon = (props) => {
  const { className, onClick } = props;
  return <TiDelete className={className} onClick={onClick} />;
};

export default DeleteIcon;

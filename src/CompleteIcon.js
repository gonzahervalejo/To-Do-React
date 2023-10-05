import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CompleteIcon = (props) => {
  const { className, onClick } = props;
  return <FaCheckCircle className={className} onClick={onClick} />;
};

export default CompleteIcon;

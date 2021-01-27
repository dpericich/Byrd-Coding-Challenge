import React from "react";
import "./button.css";

const Button = ({ message = "", color = "", confirmSubmitForm }) => {
  return (
    <div className={`button ${color}`} onClick={confirmSubmitForm}>
      {message}
    </div>
  );
};

export default Button;

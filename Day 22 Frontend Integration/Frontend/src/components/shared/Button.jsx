import React from "react";
import "./styles/Button.scss";
const Button = ({ content, isDisabled }) => {
  return <button disabled={isDisabled}>{content}</button>;
};

export default Button;

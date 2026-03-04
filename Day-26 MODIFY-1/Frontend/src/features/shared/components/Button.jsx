import React from "react";
import "../styles/Button.scss";

const Button = ({ content, isLoading = true, isDisabled = false }) => {
  return (
    <button disabled={isDisabled || isLoading}>
      {isLoading ? (
      
          <i className="ri-loader-2-line loader"></i>
      
      ) : (
        content
      )}
    </button>
  );
};

export default Button;

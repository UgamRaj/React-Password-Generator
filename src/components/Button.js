import React from "react";

const Button = ({ title, onPassGenerate }) => {
  return (
    <div className="btnContainer">
      <button className="generateBtn" onClick={onPassGenerate}>
        {title}
      </button>
    </div>
  );
};

export default Button;

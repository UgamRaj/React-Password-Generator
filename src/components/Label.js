import React from "react";

const Label = ({ htmlFor, title }) => {
  return <label htmlFor={htmlFor}>{title}</label>;
};

export default Label;

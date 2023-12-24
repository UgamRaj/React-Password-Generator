import React from "react";

const Input = ({ type, name, id, checked, onChangeFun }) => {
  const onChangeHandler = () => {
    onChangeFun();
  };
  return (
    <>
      <input
        className="inputCheck"
        type={type}
        onChange={onChangeHandler}
        name={name}
        checked={checked || false}
        id={id}
      />
    </>
  );
};

export default Input;

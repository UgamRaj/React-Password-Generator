import React, { useState } from "react";

const Extra = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);
  const [isUpperCase, setUpperCase] = useState(false);
  const [isLowerCase, setLowerCase] = useState(false);
  const [isNumbers, setNumbers] = useState(false);
  const [isSymbols, setSymbols] = useState(false);

  const onPasswordGenertorHandler = () => {
    // console.log("password");
    let mixPassChar = "";
    let updatePassword = "";
    if (isUpperCase) {
      mixPassChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (isLowerCase) {
      mixPassChar += "abcdefghijklmnopqrstuvwxyz";
    }
    if (isNumbers) {
      mixPassChar += "0123456789";
    }
    if (isSymbols) {
      mixPassChar += "~|/<>?!@#$%^&*()[]{}";
    }
    // console.log(mixPassChar);
    const newArr = mixPassChar.split("");
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * mixPassChar.length);
      updatePassword += newArr[randomIndex];
    }
    // console.log(updatePassword);

    setPassword(updatePassword);
  };
  const onLengthChangeHandler = (e) => {
    setPassLength(e.target.value);
  };
  const onUpperCaseHander = (e) => {
    // console.log(e.target.checked);
    setUpperCase(!isUpperCase);
  };
  const onLowerCaseHandler = (e) => {
    setLowerCase(!isLowerCase);
  };
  const onNumberHandler = (e) => {
    setNumbers(!isNumbers);
  };
  const onSymbolHandler = (e) => {
    setSymbols(!isSymbols);
  };

  return (
    <div className="main">
      <h1>Password Generator</h1>
      <div className="resultConatiner">
        <p>{password}</p>
        <p>copy</p>
      </div>
      <div className="inputContainer">
        <p>Select Password length(**8-50 characters**)</p>
        <input
          type="number"
          value={passLength}
          onChange={onLengthChangeHandler}
        />
      </div>
      <div className="conditionContainer">
        <input
          type="checkbox"
          onChange={onUpperCaseHander}
          name="upperCase"
          id=""
        />

        <label htmlFor="upperCase">Include upper case</label>
        <br />
        <input
          type="checkbox"
          onChange={onLowerCaseHandler}
          name="lowerCase"
          id=""
        />
        <label htmlFor="lowerCase">Include lower case</label>
        <br />
        <input type="checkbox" onChange={onNumberHandler} name="number" id="" />
        <label htmlFor="number">Include numbers</label>
        <br />
        <input type="checkbox" onChange={onSymbolHandler} name="symbol" id="" />
        <label htmlFor="symbol">Include symbols</label>
      </div>
      <button onClick={onPasswordGenertorHandler}>Generate Password</button>
    </div>
  );
};

export default Extra;

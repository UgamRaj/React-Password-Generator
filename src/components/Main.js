import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);
  const [isUpperCase, setUpperCase] = useState(true);
  const [isLowerCase, setLowerCase] = useState(true);
  const [isNumbers, setNumbers] = useState(true);
  const [isSymbols, setSymbols] = useState(true);

  const onPasswordGenertorHandler = () => {
    // console.log("password");
    if (passLength < 8 || passLength > 50) {
      toast.error("Length out of mentioned range");
      setPassword("");
      return;
    }
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
    if (mixPassChar === "") {
      toast.error("--All checks are empty--");
      setPassword("");
      return;
    }
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

  const onCpoyhandler = () => {
    if (password) {
      toast.success("copied to clipboard");
    } else {
      return toast.error("Password field is empty,nothing to copy!");
    }
    navigator.clipboard
      .writeText(password)
      .then(() => console.log("Text copied successfully"))

      .catch((err) => console.error("Error copying text: ", err));
  };

  return (
    <div className="main">
      <h1>Password Generator</h1>
      <div className="resultConatiner">
        <p className="result">{password}</p>

        <div className="copyBtn" onClick={onCpoyhandler}>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <img title="copy" src="/copyIcon.svg" alt="copy" />
        </div>
      </div>

      <div className="inputContainer">
        <p className="condition">Select Password length(**8-50 characters**)</p>
        <input
          className="inpuNum"
          type="number"
          value={passLength}
          onChange={onLengthChangeHandler}
          min={8}
          max={50}
        />
      </div>
      <div className="conditionContainer">
        <div className="inputLabelContainer">
          <Input
            type="checkbox"
            name="upperCase"
            checked={isUpperCase}
            onChangeFun={onUpperCaseHander}
            id="upperCase"
          />

          <Label htmlFor="upperCase" title="Include upper case" />
        </div>

        <div className="inputLabelContainer">
          <Input
            type="checkbox"
            name="lowerCase"
            checked={isLowerCase}
            onChangeFun={onLowerCaseHandler}
            id="lowerCase"
          />
          <Label htmlFor="lowerCase" title="Include lower case" />
        </div>

        <div className="inputLabelContainer">
          <Input
            type="checkbox"
            name="number"
            checked={isNumbers}
            onChangeFun={onNumberHandler}
            id="number"
          />

          <Label htmlFor="number" title="Include numbers" />
        </div>

        <div className="inputLabelContainer">
          <Input
            type="checkbox"
            name="symbol"
            checked={isSymbols}
            onChangeFun={onSymbolHandler}
            id="symbol"
          />

          <Label htmlFor="symbol" title="Include symbols" />
        </div>
      </div>

      <Button
        title="Generate Password"
        onPassGenerate={onPasswordGenertorHandler}
      />
    </div>
  );
};

export default Main;

import React from "react";
import "../todo.css";

const InputField = ({ placeholder, Title, setTitle }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setTitle(e.target.value)}
        value={Title}
        className="textField"
      />
      .
    </>
  );
};

export default InputField;

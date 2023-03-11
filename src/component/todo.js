import "./todo.css";
import React, { useState } from "react";

const Todo = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputTitle || !inputDescription) {
      alert("Please fill both Title and Description!");
    } else {
      setItems([...items, inputDescription]);

      setInputTitle("");
      setInputDescription("");
    }
  };
  const deleteAll = ()=>{
    setItems([]);
  }
  return (
    <>
      <div className="mainContiner">
        <div className="childContainer flex">
          <div className="appHeading flex">
            <h1>Aaj Ka Kaam</h1>
          </div>
          <div className="addItems flex">
            <div className="inputTextWrapper flex ">
              <input
                type="text"
                className="textField"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                placeholder="Add Title"
              />
              <textarea
                rows="4"
                className="textField"
                placeholder="Add Description"
                value={inputDescription}
                onChange={(e) => setInputDescription(e.target.value)}
              />
            </div>
            <div className="buttonWrapper flex">
              <button onClick={addItem}>Add</button>
              <button onClick={deleteAll}>Delete All</button>
            </div>
          </div>
          <div className="showItems flex">
            {}
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <span className="deleteItem">X</span>
                  <h2>{elem}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

import "./todo.css";
import React, { useState, useEffect } from "react";

const Todo = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (items.length === 0) {
    } else {
      alert("Task added successfully!");
    }
  }, [items]);
  const addItem = () => {
    if (!inputTitle || !inputDescription) {
      alert("Please fill both Title and Description!");
    } else {
      let taskObj = {};
      taskObj["Title"] = inputTitle;
      taskObj["Description"] = inputDescription;
      setItems([...items, taskObj]);
      setInputTitle("");
      setInputDescription("");
    }
  };

  const reset =() =>{
    setInputTitle("");
    setInputDescription("");
  }

  const deleteTask = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  const deleteAllTasks = () => {
    setItems([]);
    alert("All tasks have been removed successfully!");
  };
  return (
    <>
      <div className="mainContiner">
        <div className="childContainer flex">
          <div className="appHeading flex">
            <h1>
              <span className="appTitle">Aaj Ka Kaam</span>
            </h1>
          </div>
          <div className="addTasks flex">
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
              <button onClick={reset}>Reset</button>
              <button onClick={deleteAllTasks}>Delete All</button>
            </div>
          </div>
          <div className="showTasks flex">
            {}
            {items.map((obj, ind) => {
              return (
                <div className="eachTask flex" key={ind}>
                  <span className="deleteTask">
                    <i
                      className="fa fa-close"
                      onClick={() => deleteTask(ind)}
                    ></i>
                  </span>
                  <h2>{obj.Title}</h2>
                  <h4>{obj.Description}</h4>
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

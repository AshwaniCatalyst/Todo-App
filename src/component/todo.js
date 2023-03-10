import "./todo.css"
import React from 'react'

const Todo = () => {
  return (
    <>
      <div className="mainContiner">
        <div className="childContainer flex">
            <div className="appHeading flex">
                <h1>Aaj Ka Kaam</h1>
            </div>
            <div  className="addItems flex">
                <div className="inputTextWrapper flex ">
                <input type="text" className="textField" placeholder="Add Title"/> 
                <input type="text" className="textField" placeholder="Add Description"/>
                </div>
                <div className="buttonWrapper flex">
                    <button>Add</button>
                    <button>Delete All</button>
                </div>

            </div>
        </div>

      </div>
    </>
  )
}

export default Todo

import React from 'react'
import '../todo.css'
const TaskCards = ({Task, setTask}) => {
  const deleteTask=(id)=>{
    const updatedTasks = Task.filter((elem, index) => {
      return index !== id;
    });
    setTask(updatedTasks);
  }
  return (
    <>
    {
        Task.map((task,id)=>{
            return(
                <div className="eachTask flex" key={id}>
                  <span className="deleteTask">
                    <i
                      className="fa fa-close"
                      onClick={() => deleteTask(id)}
                    ></i>
                  </span>
                  <h2>{task} <span><input type="checkbox" /></span></h2>
                </div>
            )
        })
    }
      
    </>
  )
}

export default TaskCards

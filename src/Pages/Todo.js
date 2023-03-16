import React ,{useState} from 'react'
import '../component/todo.css'
import TaskForm from '../component/TaskForm'
import TaskCards from '../component/InputField/DisplayTask/TaskCards'
const Todo1 = () => {
    const[Task, setTask] = useState([]);
  return (
    
    <div className='mainContainer'>
      <div className='childContainer flex'>
      <div className="appHeading flex">
            <h1>
              <span className="appTitle">Aaj Ka Kaam</span>
            </h1>
          </div>
          <div className="addTasks flex">
          <div className="inputTextWrapper flex ">
      <TaskForm Task={Task} setTask={setTask} />
      </div>
      </div>
      <div className="showTasks flex">
        <TaskCards Task={Task} setTask={setTask}/>
      </div>
      </div>
    </div>
    
  )
}

export default Todo1

import React,{useState} from 'react'
import InputField from './InputField/InputField'
import '../component/todo.css'
const TaskForm = ({Task, setTask}) => {
    const titleText= "Add Title";
    const[Title, setTitle] = useState('');
    const onFormSubmit=(event)=>{
         event.preventDefault();
         setTask([...Task, Title])
         setTitle('');
    }
  return (
    <form onSubmit={onFormSubmit} className="form flex">
      <InputField placeholder={titleText} Title={Title} setTitle={setTitle}/>
      <div className="buttonWrapper flex">
      <button type='submit'>Add Task</button>
      </div>
    </form>
  )
}

export default TaskForm

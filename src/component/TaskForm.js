import React,{useState} from 'react'
import InputField from './InputField/InputField'
import '../component/todo.css'
const TaskForm = ({Task, setTask}) => {
    const titleText= "Add Title";
    const titleDescription = "Add Description";
    const[Title, setTitle] = useState('');
    const[Description, setDescription]=useState('');
    const onFormSubmit=(event)=>{
         event.preventDefault();
         if(!Title)
         {
          // alert("Please Add data!");
         }
         else{
          let taskObject ={};
          taskObject["Title"] = Title;
          taskObject["Description"] = Description;
         setTask([...Task, taskObject])
         setTitle('');
         }
    }
    const deleteAllTask = ()=>{
      if(Task.length===0)
      {
        alert("No task to Delete");
      }
      else{
      setTask([]);
      }
    }
  return (
    <form onSubmit={onFormSubmit} className="form flex">
      <InputField placeholder={titleText} Title={Title} setTitle={setTitle}/>
      <InputField placeholder={titleDescription} Title={Description} setTitle={setDescription}/>
      <div className="buttonWrapper flex">
      <button type='submit'>Add Task</button>
      <button onClick={()=>deleteAllTask()}>Reset</button>
      </div>
    </form>
  )
}

export default TaskForm

import FormInput from './components/input/FormInput';
import Tasks from './components/input/Tasks';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {
      id : Math.random(), 
      taskName : 'task 1'
    }, 

    {
      id : Math.random(), 
      taskName : 'task 2'
    }, 
  ])


  const onAddItemHandler = enteredText => {
    setTasks([{ id : Math.random(), taskName : enteredText}, ...tasks])
  }

  const onDeleteHandler = id => {
    const updateTaskList = tasks.filter( task => task.id !== id);
    setTasks(updateTaskList);
  }

  const onEditHandler = (id, editTask) => {
    const updateTaskList = [];

    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].id === id){
        updateTaskList.push({ id : tasks[i].id, taskName : editTask});
      }else{
        updateTaskList.push(tasks[i]);
      }
     
    }

    setTasks(updateTaskList);
  }


  return (
    <div className="App">
      <h1>To do List </h1>
      <FormInput onAdd={onAddItemHandler}/>
      <Tasks tasks={tasks} onDelete={onDeleteHandler} onEdit={onEditHandler}/>
    </div>
  );
}

export default App;

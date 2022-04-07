import React, { useState } from 'react';
import './App.css';
import FormHeader from './components/FormHeader/FormHeader';
import SubmitForm from './components/SubmitForm/SubmitForm';
import TasksList from './components/TasksList/TasksList';
import data from './data.json';

function App() {
  const [toDoList, setToDoList] = useState(data);

  // Add todo item
  const addTask = (userInput) => {
    let copyTasks = [...toDoList];
    copyTasks = [...copyTasks, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copyTasks);
  };

  // Toggle todo item between complete and incomplete
  const handleToggle = (id) => {
    let updatedToggle = toDoList.map((task) => {
      if (task.id === Number(id)) {
        task.complete = !task.complete;
      }
      return task;
    });
    setToDoList(updatedToggle);
  };

  // Delete todo item
  const handleDelete = (index) => {
    let copyTasks = [...toDoList];
    console.log(index);
    copyTasks.splice(index, 1);
    setToDoList(copyTasks);
  };

  return (
    <div className='app'>
      <FormHeader />
      <SubmitForm addTask={addTask} />
      <TasksList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

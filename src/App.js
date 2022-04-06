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
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
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

  return (
    <div className='app'>
      <FormHeader />
      <SubmitForm addTask={addTask} />
      <TasksList toDoList={toDoList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;

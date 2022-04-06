import React, { useState } from 'react';
import './App.css';
import FormHeader from './components/FormHeader/FormHeader';
import SubmitForm from './components/SubmitForm/SubmitForm';
import TasksList from './components/TasksList/TasksList';
import data from './data.json';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      if (task.id === Number(id)) {
        task.complete = !task.complete;
      }
      return task;
    });
    setToDoList(mapped);
  };

  return (
    <div className='app'>
      <FormHeader />
      <SubmitForm />
      <TasksList toDoList={toDoList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;

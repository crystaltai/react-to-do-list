import React, { useState } from 'react';
import './App.css';
import FormHeader from './components/FormHeader/FormHeader';
import SubmitForm from './components/SubmitForm/SubmitForm';
import TasksList from './components/TasksList/TasksList';
import data from './data.json';

function App() {
  const [toDoList, setToDoList] = useState(data);

  return (
    <div className='app'>
      <FormHeader />
      <SubmitForm />
      <TasksList toDoList={toDoList} />
    </div>
  );
}

export default App;

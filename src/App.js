import React, { useEffect, useState } from 'react';
import './App.css';
import FormHeader from './components/FormHeader/FormHeader';
import SubmitForm from './components/SubmitForm/SubmitForm';
import TasksList from './components/TasksList/TasksList';

function App() {
  const [toDoList, setToDoList] = useState([]);

  // Fetch API data
  // fetchData makes an API call to fetch the todo's and set those todo's to a local state
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setToDoList(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add todo item
  const addTask = (userInput) => {
    let copyTasks = [...toDoList];
    // Spread the existing array, and add a new task with an incremented id
    copyTasks = [
      ...copyTasks,
      { userId: 1, id: toDoList.length + 1, title: userInput, completed: false },
    ];
    setToDoList(copyTasks);
  };

  // Toggle todo item between complete and incomplete
  const handleToggle = (index) => {
    let copyTasks = [...toDoList];
    // Pull the index of the clicked task, and toggle the 'complete' property
    copyTasks[index].completed = !copyTasks[index].completed;
    setToDoList(copyTasks);
  };

  // Delete todo item
  const handleDelete = (index) => {
    let copyTasks = [...toDoList];
    // Pull the index of the clicked task, and splice it
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

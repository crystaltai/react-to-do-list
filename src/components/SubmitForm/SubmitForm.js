import React, { useState } from 'react';
import 'typeface-roboto';
import './SubmitForm.css';

const SubmitForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  // Handles the local state's change (every time user types in the input box, the state will change to reflect the most recent input)
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      addTask(userInput);
      setUserInput('');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          className='input-field'
          placeholder='Add Task'
          type='text'
          value={userInput}
          onChange={handleChange}
        />
        <button className='add-button' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;

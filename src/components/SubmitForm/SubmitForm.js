import React from 'react';
import 'typeface-roboto';
import './SubmitForm.css';

const SubmitForm = () => {
  return (
    <div className='form'>
      <form>
        <input className='input' placeholder='Add Task' />
        <button className='add-button' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;

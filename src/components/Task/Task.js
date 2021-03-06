import './Task.css';

const Task = ({ todo, handleToggle, handleDelete, index }) => {
  return (
    <div className='task-item'>
      {/* Left side of task item */}
      <div
        className={`task-left ${todo.completed ? 'task-item-complete' : 'task-item-incomplete'}`}
        onClick={() => handleToggle(index)}
      >
        <div className='complete-button'>
          <i
            className={`${todo.completed ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}`}
          ></i>
        </div>
        {/* Task name */}
        <div>{todo.title}</div>
      </div>
      {/* Right side of task item */}
      <div className='task-right'>
        <i className='fa-solid fa-circle-xmark' onClick={() => handleDelete(index)}></i>
      </div>
    </div>
  );
};

export default Task;

import './Task.css';

const Task = ({ todo, handleToggle, handleDelete, index }) => {
  const handleToggleClick = (e) => {
    handleToggle(e.currentTarget.id);
  };

  return (
    <div className='task-item' id={todo.id} value={todo.id} onClick={handleToggleClick}>
      {/* Left side of task item */}
      <div className={`task-left ${todo.complete ? 'task-item-complete' : 'task-item-incomplete'}`}>
        <div className='complete-button'>
          <i
            className={`${todo.complete ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}`}
          ></i>
        </div>
        {/* Task name */}
        <div>{todo.task}</div>
      </div>

      {/* Right side of task item */}
      <div className='task-right'>
        <i className='fa-solid fa-circle-xmark' onClick={() => handleDelete(index)}></i>
      </div>
    </div>
  );
};

export default Task;

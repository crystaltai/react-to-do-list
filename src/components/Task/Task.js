import './Task.css';

const Task = ({ todo }) => {
  return (
    // Add task-item class by default and then add class depending on task status
    <div className={`task-item ${todo.complete ? 'task-item-complete' : 'task-item-incomplete'}`}>
      {todo.task}
      {/* <div className='task-item-btns'>
        <button>v</button>
        <button>x</button>
      </div> */}
    </div>
  );
};

export default Task;

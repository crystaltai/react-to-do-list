import './Task.css';

const Task = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    handleToggle(e.currentTarget.id);
    console.log(todo);
  };

  return (
    <div className='task-item'>
      <div
        id={todo.id}
        value={todo.id}
        className={` ${todo.complete ? 'task-item-complete' : 'task-item-incomplete'}`}
        onClick={handleClick}
      >
        <div className='task-left'>
          <div className='complete-button'>
            <i
              className={`${todo.complete ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}`}
            ></i>
          </div>
          <div>{todo.task}</div>
        </div>
      </div>
      <div className='task-right'>
        <i className='fa-solid fa-circle-xmark'></i>
      </div>
    </div>
  );
};

export default Task;

import Task from '../Task/Task';
import './TasksList.css';

const TasksList = ({ toDoList, handleToggle }) => {
  return (
    <div className='task-list'>
      {toDoList.map((todo) => {
        return <Task todo={todo} key={todo.id + todo.task} handleToggle={handleToggle} />;
      })}
    </div>
  );
};

export default TasksList;

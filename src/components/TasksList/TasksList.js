import Task from '../Task/Task';
import './TasksList.css';

const TasksList = ({ toDoList }) => {
  return (
    <div className='task-list'>
      {toDoList.map((todo) => {
        return <Task todo={todo} />;
      })}
    </div>
  );
};

export default TasksList;

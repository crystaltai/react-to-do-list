import Task from '../Task/Task';
import './TasksList.css';

const TasksList = ({ toDoList, handleToggle, handleDelete }) => {
  return (
    <div className='task-list'>
      {toDoList.map((todo, index) => {
        return (
          <Task
            todo={todo}
            index={index}
            key={todo.id + todo.title}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TasksList;

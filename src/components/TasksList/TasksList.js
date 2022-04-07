import Task from '../Task/Task';
import './TasksList.css';

const TasksList = ({ toDoList, handleToggle, handleDelete }) => {
  return (
    <div className='task-list'>
      {toDoList.map((todo, index) => {
        return (
          <Task
            todo={todo}
            key={todo.id + todo.task}
            index={index}
            handleToggle={handleToggle}
            toDoList={toDoList}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TasksList;

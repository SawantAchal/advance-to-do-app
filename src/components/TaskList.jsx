import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../features/tasks/Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const weather = useSelector((state) => state.tasks.weather);

  const getPriorityValue = (priority) => {
    switch (priority) {
      case 'High':
        return 3;
      case 'Medium':
        return 2;
      case 'Low':
        return 1;
      default:
        return 0;
    }
  };

  const sortedTasks = tasks.slice().sort((a, b) => getPriorityValue(b.priority) - getPriorityValue(a.priority));

  return (
    <div className="p-4 ">
      {sortedTasks.map((task, index) => (
        <div key={index}>
          <Task task={task} index={index} />
          {task.location && weather.name?.toLowerCase() === task.location.toLowerCase() && (
            <div className="mt-2 p-2 border bg-gray-100">
              <p>Weather in {weather.name}:</p>
              <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );

};

export default TaskList;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, fetchWeatherData } from '../features/tasks/tasksSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === '') {
      setError('Task cannot be empty.');
      return;
    }

    dispatch(addTask({ task, priority, location }));
    if (location) {
      dispatch(fetchWeatherData(location));
    }
    setTask('');
    setLocation('');
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="p-4">
      <div className='flex flex-col justify-center items-center gap-4 sm:flex-row'>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter a task" className="border p-2 mr-2 w-56"/>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2 mr-2  w-56">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter location (for outdoor tasks)" className="border p-2 mr-2  w-56"/>
        <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded-md">
          Add Task
        </button>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default TaskInput;
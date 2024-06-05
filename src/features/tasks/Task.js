import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from './tasksSlice';

const Task = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex-1">
      <div className="text-lg">
          {task.task}
        </div>
        <p className="text-sm text-gray-500">Priority: {task.priority}</p>
        {task.location && (
          <p className="text-sm text-gray-500">Location: {task.location}</p>
        )}
      </div>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2 ml-2 rounded-md">
        Delete
      </button>
    </div>
  );
};

export default Task;

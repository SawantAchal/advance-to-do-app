import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { fetchWeatherData } from './features/tasks/tasksSlice';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Logout />
          <hr/>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

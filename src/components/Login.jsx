import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (username && password) {
          dispatch(login({ username }));
        }
      };

  return (
    <div className="p-4 flex justify-center items-center flex-col gap-4">
      <input  type="text"  value={username}  onChange={(e) => setUsername(e.target.value)}  placeholder="Username"  className="border p-2 mr-2"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 mr-2"/>
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded-md">
        Login
      </button>
  </div>
  )
}

export default Login
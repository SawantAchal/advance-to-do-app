import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logout());
    };
    
  return (
    <div className='flex justify-between p-3'>
      <div className='sm:text-2xl text-xl'>
        ADVANCE  TO  DO  APP
      </div>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-md">
        Logout
      </button>
    </div>
  )
}

export default Logout
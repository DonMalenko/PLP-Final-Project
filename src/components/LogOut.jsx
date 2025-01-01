// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);  // Sign the user out of Firebase
      navigate('/login');   // Redirect to the login page after logout
    } catch (error) {
      console.error('Error logging out: ', error.message);
    }
  };

  return (
    
        <button
          onClick={handleLogout}
          className="bg-red-500 px-2 py-2 rounded-md hover:bg-red-600"
        >
          Log Out
        </button>
     
  );
};

export default LogOut;

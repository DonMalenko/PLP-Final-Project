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
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Telemedicine App</Link>
      <div>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default LogOut;

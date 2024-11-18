import React from 'react';
import { useNavigate } from 'react-router-dom';


const GetStart = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  return (
    <button onClick={handleGetStarted} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
        Get Started
      </button>
  )
}

export default GetStart
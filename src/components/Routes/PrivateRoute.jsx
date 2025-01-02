// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';

const PrivateRoute = ({ role, children }) => {
  const [user, loading] = useAuthState(auth);
  const userRole = localStorage.getItem('role');

  // Show a loading state if authentication is still in progress
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's no authenticated user, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user role doesn't match the required role, redirect to an unauthorized page
  if (role && role !== userRole) {
    return <Navigate to="/unauthorized" />;
  }

  // Render the child components if authenticated and authorized
  return children;
};

export default PrivateRoute;

// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  // Show a loading state if authentication is still in progress
  if (loading) return <div>Loading...</div>;

  // If there's no user, redirect to the login page
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

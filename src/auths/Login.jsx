// src/components/Login.jsx
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeMode } from '../Recoil/State';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const themeMode = useRecoilValue(ThemeMode);
  const navigate = useNavigate();
  const [role, setRole] = useState('patient'); // Default role is 'patient'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Assuming you set the role correctly during login, for example:
      localStorage.setItem('role', role); // Save the role to localStorage
      if (role === 'patient') {
        navigate('/dashboard');
      } else {
        navigate('/doctor-dashboard');
      }
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        themeMode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-600'
      }`}
    >
      <div
        className={`${
          themeMode === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-600'
        } w-full max-w-md p-8 space-y-6 shadow-lg rounded-lg`}
      >
        <h2
          className={`text-2xl font-bold text-center ${
            themeMode === 'dark' ? 'text-gray-100' : 'text-blue-600'
          }`}
        >
          Log In
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium">Log in as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full text-gray-900 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-gray-900 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-gray-900 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

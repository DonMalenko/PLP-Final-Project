// src/components/Signup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ThemeMode } from "../Recoil/State";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const themeMode = useRecoilValue(ThemeMode);
  const navigate = useNavigate();
  const [role, setRole] = useState("patient"); // Default role is 'patient'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");

  // Role-specific fields
  const [fullName, setFullName] = useState("");
  const [specialization, setSpecialization] = useState(""); // Doctor-specific field

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(`/${role}-dashboard`); // Redirect to role-specific dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className={`flex py-20 justify-center items-center min-h-screen ${
        themeMode === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-600"
      }`}
    >
      <div
        className={`${
          themeMode === "dark" ? "bg-gray-700 text-gray-100" : "bg-white text-gray-600"
        } p-8 rounded-lg shadow-lg w-full max-w-md`}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Switcher */}
          <div>
            <label className="block text-sm font-medium">Sign up as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full text-gray-900 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full text-gray-900 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Doctor-specific field: Specialization */}
          {role === "doctor" && (
            <div>
              <label className="block text-sm font-medium">Specialization</label>
              <input
                type="text"
                className="w-full text-gray-900 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full text-gray-900 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full text-gray-900 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full text-gray-900 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-blue-500 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

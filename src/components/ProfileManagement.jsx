// src/components/ProfileManagement.jsx
import React, { useState } from 'react';
import Loader from './Spinner'; // Import the Loader component

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  });
     const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call to update profile
    setTimeout(() => {
      setLoading(false); // Hide loader after "update" completes
      alert('Profile updated successfully!');
    }, 2000);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">Manage Your Profile</h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
          Save Changes
        </button>
          </form>
           {/* Show the Loader if loading is true */}
      <Loader loading={loading} />
    </div>
  );
};

export default ProfileManagement;

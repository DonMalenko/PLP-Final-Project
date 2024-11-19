// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import LogOut from './LogOut';
import Loader from './Loader';
import { Link, Outlet } from 'react-router-dom'; // To render nested routes like appointments, profile, etc.
import Lottie from 'lottie-react'
import telemedicineAnimation from '../assets/animations/telemedicine.json';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('null')
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch request for dashboard data
    const fetchData = async () => {
      // Simulate a loading time (e.g., fetching data from an API)
      setTimeout(() => {
        setLoading(false); // Set loading to false after data is fetched
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-500 p-4 text-white">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul className="mt-4">
          <li className={`cursor-pointer py-2 ${activeTab === 'appointments' ? 'bg-blue-600' : ''}`} onClick={() => setActiveTab('appointments')}>
            <Link to="/dashboard/appointments">Appointments</Link>
          </li>
          <li className={`cursor-pointer py-2 ${activeTab === 'doctors' ? 'bg-blue-600' : ''}`} onClick={() => setActiveTab('doctors')}>
            <Link to="/dashboard/doctors">Doctors</Link>
          </li>
          <li className={`cursor-pointer py-2 ${activeTab === 'consultation' ? 'bg-blue-600' : ''}`} onClick={() => setActiveTab('consultation')}>
            <Link to="/dashboard/consultation">Video Consultation</Link>
          </li>
          <li className={`cursor-pointer py-2 ${activeTab === 'offline' ? 'bg-blue-600' : ''}`} onClick={() => setActiveTab('offline')}>
            <Link to="/dashboard/offline">Drop a Message</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
        <LogOut activeTab={activeTab } />

        {/* Render child components based on the selected tab */}
        <Outlet />
        {activeTab === 'null' ? <Lottie animationData={telemedicineAnimation} className="w-full h-auto" /> : ""}
        <Loader loading={loading} />
        
        
      </div>
    </div>
  );
};

export default Dashboard;

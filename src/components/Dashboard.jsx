import React, { useEffect } from 'react';
import LogOut from './LogOut';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ActiveTab, DashboardState, ThemeMode } from '../Recoil/State';

const Dashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useRecoilState(ActiveTab);
  const { appointments, visitHistory, prescriptions } = useRecoilValue(DashboardState);
  const themeMode = useRecoilValue(ThemeMode );

  useEffect(() => {
    // Set active tab based on the URL path
    const currentPath = location.pathname.split('/').pop();
    setActiveTab(currentPath || 'dashboard');
  }, [location.pathname]);

  return (
    <div className={`flex flex-wrap min-h-screen ${themeMode === 'dark' ? 'bg-gray-900' : "bg-gray-100"}`}>
      {/* Sidebar */}
<div className={`w-full md:w-1/4 sticky lg:sticky inset-y-0 left-0 z-10 ${themeMode === 'dark' ? 'bg-blue-900' : 'bg-blue-500' } text-white p-4 md:h-screen`}>
        <h2 className="text-xl font-bold"><Link to="/dashboard">Dashboard</Link></h2>
        <ul className="mt-4">
          <li className={`cursor-pointer py-2 ${activeTab === 'appointments' ? 'bg-blue-600' : ''}`} onClick={() => setActiveTab('appointments')}>
            <Link to="/dashboard/appointments">Book Appointment</Link>
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
      <div className={`${themeMode === 'dark' ? 'bg-gray-600 text-gray-50' : 'bg-white text-gray-700'} flex justify-between mx-auto p-4 shadow-lg border-spacing-x-10 mb-10`}>
          <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
          <LogOut activeTab={activeTab} />
        </div>
        {activeTab === 'dashboard' ? (
          <div>
            <div className={`${themeMode === 'dark' ? 'bg-gray-600 text-gray-50' : 'bg-white text-gray-700'} p-3 mb-6`}>
            <h2 className=" text-xl font-semibold mb-2">Current Appointments</h2>
            {appointments.length ? (
              <ul>
                {appointments.map((appointment, index) => (
                  <li key={index} className="border-b py-2">
                    {appointment.doctorName} - {appointment.date}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No appointments scheduled.</p>
            )}
          </div>

          {/* Visit History */}
          <div className={`${themeMode === 'dark' ? 'bg-gray-600 text-gray-50' : 'bg-white text-gray-700'} p-3 mb-6`}>
            <h2 className="text-xl font-semibold mb-2">Visit History</h2>
            {visitHistory.length ? (
              <ul>
                {visitHistory.map((visit, index) => (
                  <li key={index} className="border-b py-2">
                    {visit.date} - {visit.notes}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No visit history available.</p>
            )}
          </div>

          {/* Prescriptions */}
          <div className={`${themeMode === 'dark' ? 'bg-gray-600 text-gray-50' : 'bg-white text-gray-700'} p-3 mb-6`}>
            <h2 className="text-xl font-semibold mb-2">Prescriptions</h2>
            {prescriptions.length ? (
              <ul>
                {prescriptions.map((prescription, index) => (
                  <li key={index} className="border-b py-2">
                    {prescription.medicineName} - {prescription.dosage}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No prescriptions available.</p>
            )}
          </div>
        </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

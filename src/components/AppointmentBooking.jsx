// src/components/AppointmentBooking.jsx
import React, { useState } from 'react';
import Loader from './Loader';

const AppointmentBooking = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API request
    setTimeout(() => {
      // Simulate data submission or API call
      setLoading(false); // Hide loader after the "request" completes
      alert('Appointment booked successfully!');
    }, 2000);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">Book an Appointment</h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block">Select Date</label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block">Select Time</label>
          <input type="time" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block">Consultation Type</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="general">General Consultation</option>
            <option value="specialist">Specialist Consultation</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
          Book Appointment
        </button>
          </form>
            {/* Show the Loader if loading is true */}
      <Loader loading={loading} />
    </div>
  );
};

export default AppointmentBooking;
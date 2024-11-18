// src/components/Service.jsx
import React from 'react';

const NavServices = () => {
  const services = [
    { title: "Virtual Consultations", description: "Connect with doctors from the comfort of your home." },
    { title: "Appointment Booking", description: "Schedule appointments with ease." },
    { title: "Health Records", description: "Manage your health records securely." },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4 w-full md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-bold text-blue-500 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavServices;

// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border rounded-md" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

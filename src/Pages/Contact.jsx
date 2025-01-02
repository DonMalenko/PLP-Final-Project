// src/components/Contact.jsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeMode } from '../Recoil/State';

const Contact = () => {
const themeMode = useRecoilValue(ThemeMode);

  return (
    <div className={`${themeMode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-200 text-gray-600'} min-h-screen mx-auto p-10`}>
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <form className={`max-w-lg mx-auto p-8 shadow-lg rounded-lg ${themeMode === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-600'}`}>
        <div className="mb-4">
          <label className="block">Name</label>
          <input type="text" className="w-full text-gray-900 p-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input type="email" className="w-full text-gray-900 p-2 border rounded-md" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block">Message</label>
          <textarea className="w-full text-gray-900 p-2 border rounded-md" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

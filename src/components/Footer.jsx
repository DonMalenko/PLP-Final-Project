// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Telemedicine App. All rights reserved.
        </p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/servicePage" className="hover:underline">Services</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <Link to="https://www.facebook.com/abdulwasiuabubakr94" className="hover:text-blue-500">Facebook</Link>
          <Link to="https://x.com/Donmalenko09?t=qRY5U0Lqm5Pbcp-vsd42XA&s=09" className="hover:text-blue-400">Twitter</Link>
          <Link to="https://www.linkedin.com/in/abdulwasiu-abubakar-419511238" className="hover:text-blue-600">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

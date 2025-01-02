// src/components/About.jsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeMode } from '../Recoil/State';

const About = () => {
const themeMode = useRecoilValue(ThemeMode);

  return (
    <div className={`${themeMode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-600'} min-h-screen mx-auto py-16 px-4`}>
      <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
      <p className=" max-w-2xl mx-auto text-center">
        Our Telemedicine app is designed to bridge the gap between patients and healthcare providers,
        offering a seamless experience for consultations, appointments, and health management. We are dedicated to
        providing accessible and efficient healthcare solutions to empower individuals to take control of their health.
      </p>
    </div>
  );
};

export default About;

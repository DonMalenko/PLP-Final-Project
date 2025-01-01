// src/components/VideoConsultation.jsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeMode } from '../Recoil/State';

const VideoConsultation = () => {

const themeMode = useRecoilValue(ThemeMode);

  return (
    <div className={`${themeMode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-600'}`}>
      <h3 className="text-xl font-semibold">Start Video Consultation</h3>
      <div className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Join Video Call
        </button>
      </div>
      <p className="mt-4">Click the button to start your video consultation.</p>
    </div>
  );
};

export default VideoConsultation;

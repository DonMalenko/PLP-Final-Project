// src/components/VideoConsultation.jsx
import React from 'react';

const VideoConsultation = () => {
  return (
    <div>
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

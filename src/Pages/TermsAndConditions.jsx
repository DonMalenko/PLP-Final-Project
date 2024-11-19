// src/components/TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-800 mb-4">
          Welcome to our telemedicine application. By using our services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. User Agreement</h2>
        <p className="text-gray-700 mb-4">
          By accessing our platform, you confirm that you are at least 18 years old or have parental consent. You agree to provide accurate and up-to-date information while using our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          Your personal data will be securely stored and only used to provide medical services as described in our privacy policy. Please refer to our full privacy policy for more details.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Prohibited Activities</h2>
        <p className="text-gray-700 mb-4">
          Users are prohibited from attempting to hack, misrepresent, or misuse the platform in any way. Legal action will be taken against any malicious activity.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Disclaimer</h2>
        <p className="text-gray-700 mb-4">
          The telemedicine platform is not intended for emergencies. Always call your local emergency services if you require immediate medical assistance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update these terms at any time. Users will be notified of significant changes, and continued use of the platform implies agreement with the updated terms.
        </p>

        
      </div>
    </div>
  );
};

export default TermsAndConditions;

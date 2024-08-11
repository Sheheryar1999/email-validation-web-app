import React, { useState } from 'react';
import { FaCheckCircle, FaListAlt, FaClock, FaCogs, FaShieldAlt, FaDatabase, FaUserShield, FaEnvelopeOpenText } from 'react-icons/fa';
import './Feature.css'; // Custom CSS for animation

export const Feature = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleFeature = (feature) => {
    setActiveFeature(activeFeature === feature ? null : feature);
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Our Powerful Email Validation Features
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Feature 1 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaCheckCircle
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('accurate-validation')}
          />
          {activeFeature === 'accurate-validation' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              Ensure that your email addresses are accurate and deliverable with our real-time validation.
            </p>
          )}
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaListAlt
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('bulk-processing')}
          />
          {activeFeature === 'bulk-processing' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              Process and validate large lists of email addresses quickly and efficiently.
            </p>
          )}
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaClock
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('real-time-feedback')}
          />
          {activeFeature === 'real-time-feedback' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              Get instant feedback on email validity as users input their addresses.
            </p>
          )}
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaCogs
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('customizable-plans')}
          />
          {activeFeature === 'customizable-plans' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              Choose from a range of pricing plans to suit your validation needs.
            </p>
          )}
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaShieldAlt
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('secure-data')}
          />
          {activeFeature === 'secure-data' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              Your data is secure with our robust encryption and privacy protocols.
            </p>
          )}
        </div>

        {/* Feature 6 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaDatabase
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('data-cleaning')}
          />
          {activeFeature === 'data-cleaning' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              Clean your email list by removing invalid or undeliverable addresses.
            </p>
          )}
        </div>

        {/* Feature 7 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaUserShield
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('gdpr-compliance')}
          />
          {activeFeature === 'gdpr-compliance' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              We comply with GDPR regulations, ensuring your data is handled legally.
            </p>
          )}
        </div>

        {/* Feature 8 */}
        <div className="flex flex-col items-center p-5 border rounded shadow-sm">
          <FaEnvelopeOpenText
            className="w-16 h-16 text-teal-400 feature-icon"
            onClick={() => toggleFeature('detailed-reports')}
          />
          {activeFeature === 'detailed-reports' && (
            <p className="mt-4 text-gray-900 text-lg animate-pop-out">
              Receive detailed validation reports with actionable insights.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

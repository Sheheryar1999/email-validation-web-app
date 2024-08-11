import React from 'react';
import { useNavigate } from 'react-router-dom';

const pricingData = [
  { credits: '5,000,000', price: '$499', perVerification: '$0.00014' },
  { credits: '1,000,000', price: '$149', perVerification: '$0.00015' },
  { credits: '500,000', price: '$99', perVerification: '$0.00020' },
  { credits: '200,000', price: '$49', perVerification: '$0.00025' },
  { credits: '100,000', price: '$29', perVerification: '$0.00029' },
  { credits: '50,000', price: '$19', perVerification: '$0.00038' },
  { credits: '20,000', price: '$10', perVerification: '$0.00050' },
  { credits: '10,000', price: '$5', perVerification: '$0.00050' },
  { credits: '100', price: '$0', perVerification: '$0', action: 'FREE' }  // FREE option
];

export const Pricing = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = (credits) => {
    if (credits === '100') {
      navigate('/validation'); // Redirect to Validation page for the free option
    } else {
      navigate('/login'); // Redirect to Login page for all other options
    }
  };

  return (
    <div className="relative w-full h-full py-16 bg-gray-100">
      <div className="relative px-4 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Pricing Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white shadow-md rounded" style={{ fontFamily: 'Wittgenstein, sans-serif', fontSize: '120%' }}>
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Verification Credits</th>
                <th className="p-4">Price</th>
                <th className="p-4">Per Verification</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((plan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 text-gray-800">{plan.credits}</td>
                  <td className="p-4 text-gray-800">{plan.price}</td>
                  <td className="p-4 text-gray-800">{plan.perVerification}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleBuyNowClick(plan.credits)}
                      className="inline-flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      {plan.action || 'Buy now'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import './Pricing.css';

const pricingData = [
  { plan: '5,000,000 Credits', price: '$499', credits: '5,000,000 credits per verification', pricePerCredit: '$0.00014' },
  { plan: '1,000,000 Credits', price: '$149', credits: '1,000,000 credits per verification', pricePerCredit: '$0.00015' },
  { plan: '500,000 Credits', price: '$99', credits: '500,000 credits per verification', pricePerCredit: '$0.00020' },
  { plan: '200,000 Credits', price: '$49', credits: '200,000 credits per verification', pricePerCredit: '$0.00025' },
  { plan: '100,000 Credits', price: '$29', credits: '100,000 credits per verification', pricePerCredit: '$0.00029' },
  { plan: '50,000 Credits', price: '$19', credits: '50,000 credits per verification', pricePerCredit: '$0.00038' },
  { plan: '20,000 Credits', price: '$10', credits: '20,000 credits per verification', pricePerCredit: '$0.00050' },
  { plan: '10,000 Credits', price: '$5', credits: '10,000 credits per verification', pricePerCredit: '$0.00050' },
  { plan: 'Free Plan', price: '$0', credits: '10,000 credits per verification', pricePerCredit: '$0.00000' }
];

export const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRangeChange = (e) => {
    setActiveIndex(parseInt(e.target.value, 10));
  };

  const handleButtonClick = (price) => {
    if (price === '$0') {
      window.location.href = '/validation';
    } else {
      window.location.href = '/signup';
    }
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="pricing-timeline-section">
      <h1 className="main-heading">Pricing Plans</h1>
      <h2 className="secondary-heading">Affordable for Everyone</h2>
      <div className="pricing-display">
        <div className="pricing-box">
          <div className="mb-4 text-center">
            <p className="text-xl font-medium tracking-wide">{pricingData[activeIndex].plan}</p>
            <div className="flex items-center justify-center">
              <p className="mr-2 text-5xl font-semibold">{pricingData[activeIndex].price}</p>
              <p className="text-lg">/ month</p>
            </div>
          </div>
          <ul className="mb-8 space-y-2">
            <li className="flex items-center">
              <div className="mr-3">
                <svg className="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2">
                  <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
                  <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                </svg>
              </div>
              <p className="font-medium">{pricingData[activeIndex].credits}</p>
            </li>
            <li className="flex items-center">
              <div className="mr-3">
                <svg className="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2">
                  <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
                  <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                </svg>
              </div>
              <p className="font-medium">Price per verification: {pricingData[activeIndex].pricePerCredit}</p>
            </li>
          </ul>
          <button
            className={`button ${pricingData[activeIndex].price === '$0' ? 'free' : 'get'}`}
            onClick={() => handleButtonClick(pricingData[activeIndex].price)}
          >
            {pricingData[activeIndex].price === '$0' ? 'Get Started' : 'Buy Now'}
          </button>
        </div>
      </div>
      <fieldset className="slider-container">
        <input
          type="range"
          className="pricing-slider"
          min="0"
          max={pricingData.length - 1}
          value={activeIndex}
          onChange={handleRangeChange}
        />
        <div className="slider-dots">
          {pricingData.map((_, index) => (
            <div
              key={index}
              className="slider-dot"
              onClick={() => handleDotClick(index)}
              aria-label={`Go to ${index + 1}`}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
};

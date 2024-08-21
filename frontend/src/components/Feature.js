import React, { useState } from "react";
import "./Feature.css";

export const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Email Validation",
      description: "Ensure that email addresses are formatted correctly and are valid. Our validator checks for syntax errors and domain validity to ensure reliable communication."
    },
    {
      title: "Bulk Email Verification",
      description: "Upload and verify multiple email addresses at once. Our bulk verification tool processes large lists efficiently, saving you time and effort."
    },
    {
      title: "Spam Trap Detection",
      description: "Identify and remove potential spam traps from your email list. This feature helps in maintaining your sender reputation and improving deliverability."
    },
    {
      title: "Domain Validation",
      description: "Check if the email domain exists and is configured to receive emails. This ensures that the email addresses on your list are valid and active."
    },
    {
      title: "Real-Time Verification",
      description: "Verify email addresses in real-time as users sign up or submit forms. This feature helps in capturing valid emails from the start, reducing bounce rates."
    },
    {
      title: "Email List Cleaning",
      description: "Cleanse your email list by removing invalid, inactive, or duplicate addresses. Keep your list healthy and ensure higher engagement rates with your emails."
    }
  ];

  return (
    <div className="feature-container">
      <div className="feature-heading-container">
        <h2 className="feature-heading">Our Key Features</h2>
      </div>
      <div className="feature-content">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="feature-icon">
              <svg className="feature-svg" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="feature-title">{feature.title}</h6>
            <p className="feature-description">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

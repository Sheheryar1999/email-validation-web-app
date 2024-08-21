import { useState } from 'react';
import './Faq.css';

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className={`faq-item-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className="w-3 text-gray-600"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`faq-item-content ${isOpen ? 'open' : ''}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <p className="faq-title">Frequently Asked Questions</p>
        <p className="faq-description">
          Find answers to common questions about Lead Verify, including features, bulk validation, and more.
        </p>
      </div>
      <div className="space-y-4">
        <Item title="What features does Lead Verify offer?">
          Lead Verify provides a range of features including email validation, real-time verification, and detailed reporting. It helps ensure that your leads are accurate and valid, improving your marketing and outreach efforts.
        </Item>
        <Item title="How does Lead Verify work?">
          Lead Verify uses a combination of algorithms and databases to check the validity of email addresses. It verifies whether an email address is correctly formatted, whether the domain exists, and whether the domain has an active mail server.
        </Item>
        <Item title="Can I perform bulk email validation?">
          Yes, Lead Verify supports bulk email validation. You can upload a list of email addresses in various formats, and Lead Verify will process them to identify invalid or incorrect addresses.
        </Item>
        <Item title="Is Lead Verify suitable for small businesses?">
          Absolutely. Lead Verify is designed to be scalable and can accommodate the needs of small businesses as well as larger enterprises. Its features are tailored to enhance lead quality and streamline data management regardless of your business size.
        </Item>
        <Item title="How secure is my data with Lead Verify?">
          Lead Verify takes data security seriously. All data is encrypted and handled in compliance with relevant privacy regulations. Your email lists and other sensitive information are kept secure and confidential.
        </Item>
      </div>
    </div>
  );
};

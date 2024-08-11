// src/components/Faq.js
import React from 'react';

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Frequently Asked Questions
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Common Questions</span>
            </span>{' '}
            about Email Validator
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Find answers to the most frequently asked questions about our email validation service.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                How does the email validation process work?
              </p>
              <p className="text-gray-700">
                Our email validation process involves several steps: syntax checking, domain validation, and mailbox verification. We ensure that the email format is correct, the domain exists, and the mailbox is active.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What types of email addresses can be validated?
              </p>
              <p className="text-gray-700">
                We can validate various types of email addresses, including personal, business, and temporary email addresses. Our system also checks for disposable and role-based email addresses.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Is my data safe with your service?
              </p>
              <p className="text-gray-700">
                Yes, we prioritize data privacy and security. All email addresses processed are kept confidential and are not shared with third parties.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Can I integrate email validation into my application?
              </p>
              <p className="text-gray-700">
                Absolutely! We offer API access that allows you to integrate our email validation service directly into your application or system.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How can I get support if I encounter issues?
              </p>
              <p className="text-gray-700">
                You can reach out to our support team through our contact page. We offer assistance via email and live chat to resolve any issues you might face.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What is the pricing for your email validation service?
              </p>
              <p className="text-gray-700">
                We offer various pricing plans based on the number of verifications you need. Please visit our pricing page for detailed information on our plans and rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

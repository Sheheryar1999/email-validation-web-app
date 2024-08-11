// src/components/pages/ValidationPage.js
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export const ValidationPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
        <div className="w-full max-w-3xl p-8 bg-white rounded shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Bulk Email Validation</h1>
          <textarea
            className="w-full h-64 p-4 mb-6 text-gray-800 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Paste your emails here (one email per line)..."
          />
          <button className="w-full py-3 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
            Validate Emails
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

// src/components/pages/SignupPage.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder for signup logic
    // If signup is successful:
    navigate('/dashboard'); // Redirect to Dashboard
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-teal-500 rounded hover:bg-teal-600"
            >
              Signup
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Already have an account? <a href="/login" className="text-teal-500 hover:underline">Login</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;

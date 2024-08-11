import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS

const Navbar = () => {
  return (
    <nav className="relative bg-gray-900 bg-opacity-75">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-4 xl:mb-0 xl:pr-16 xl:w-7/12">
            <Link
              to="/"
              aria-label="Home"
              className="inline-flex items-center font-semibold tracking-wider email-validator"
            >
              <FaEnvelope className="mr-2 text-xl" />
              <span className="text-2xl font-bold">Email Validator</span>
            </Link>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="flex justify-center space-x-4">
              <Link
                to="/?scrollTo=features"
                className="navbar-link"
              >
                Features
              </Link>
              <Link
                to="/?scrollTo=pricing"
                className="navbar-link"
              >
                Pricing
              </Link>
              <Link
                to="/validation"
                className="navbar-link"
              >
                Validate
              </Link>
              <Link
                to="/login"
                className="navbar-link"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="navbar-link"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

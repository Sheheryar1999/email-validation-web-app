import React, { useState, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? 'navbar-shrink' : ''}`}>
      <div className="navbar-container">
        <Link
          to="/"
          aria-label="Home"
          className="navbar-brand"
        >
          <FaEnvelope className="navbar-icon" />
          <span className="navbar-title">Leads Verify</span>
        </Link>
        <div className="navbar-links">
          <Link to="/?scrollTo=features2" className="navbar-link">
            Features
          </Link>
          <Link to="/?scrollTo=pricing" className="navbar-link">
            Pricing
          </Link>
          <Link to="/validation" className="navbar-link">
            Validate
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/signup" className="navbar-link signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

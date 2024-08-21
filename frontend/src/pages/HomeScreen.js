import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Email Verification App</h1>
      <p>Verify your email lists quickly and easily.</p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/login" style={{ marginRight: '15px' }}>Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default HomeScreen;

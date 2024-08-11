// src/components/ScrollToTopButton.js
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css'; // Custom CSS for the button

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowUp className="scroll-to-top-icon" />
    </button>
  );
};

export default ScrollToTopButton;

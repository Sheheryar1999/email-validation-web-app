// src/components/pages/HomePage.js
import React, { useEffect } from 'react';
import Navbar from '../Navbar'; 
import { Header } from '../Header.js';
import { Feature2 } from '../Feature2';
import { Pricing } from '../Pricing';
import  Content  from '../Content';
import  {Faq}  from '../Faq';
import Footer from '../Footer';
import ScrollToTopButton from '../ScrollToTopButton';
import { useLocation } from 'react-router-dom';
import './HomePage.css'; // Import the CSS for styling

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Header />
      <section id="features2" className="homepage-section">
        <Feature2 />
      </section>
      <section id="pricing" className="homepage-section">
        <Pricing />
      </section>
      <section id="content" className="homepage-section">
        <Content />
      </section>
      <section id="faq" className="homepage-section">
        <Faq />
      </section>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;

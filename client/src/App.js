import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import { ValidationPage } from './components/pages/ValidationPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import PageTransition from './components/PageTransition'; // Import PageTransition component

const AppRoutes = () => {
  const location = useLocation();
  const { pathname } = location;

  // Detect if the route change is a full page navigation
  const isFullPageNavigation = pathname !== '/' && !window.location.hash;

  return (
    <PageTransition locationKey={pathname} enabled={isFullPageNavigation}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/validation" element={<ValidationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Added Dashboard route */}
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

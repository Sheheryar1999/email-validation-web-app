// src/components/Dashboard.js
import React, { useState } from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component
import { FaUpload, FaFileAlt, FaList } from 'react-icons/fa';
import './Dashboard.css'; // Custom CSS for the Dashboard

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upload');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar /> {/* Include Navbar here */}
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <ul>
            <li
              onClick={() => handleTabChange('upload')}
              className={activeTab === 'upload' ? 'active' : ''}
            >
              <FaUpload className="sidebar-icon" />
              <span>Upload Emails</span>
            </li>
            <li
              onClick={() => handleTabChange('list')}
              className={activeTab === 'list' ? 'active' : ''}
            >
              <FaList className="sidebar-icon" />
              <span>View List</span>
            </li>
            <li
              onClick={() => handleTabChange('history')}
              className={activeTab === 'history' ? 'active' : ''}
            >
              <FaFileAlt className="sidebar-icon" />
              <span>Validation History</span>
            </li>
          </ul>
        </div>
        <div className="dashboard-content">
          {activeTab === 'upload' && (
            <div className="tab-content">
              <h2>Upload Your Emails</h2>
              <input
                type="file"
                accept=".csv, .xlsx"
                className="file-input"
              />
              <div className="button-container">
                <button className="upload-button">Upload</button>
              </div>
              <p>Or drag and drop your file here.</p>
            </div>
          )}
          {activeTab === 'list' && (
            <div className="tab-content">
              <h2>View Email List</h2>
              <p>Here you can view and manage your email list.</p>
              {/* Implement the list display */}
            </div>
          )}
          {activeTab === 'history' && (
            <div className="tab-content">
              <h2>Validation History</h2>
              <p>View your past email validation results here.</p>
              {/* Implement history display */}
            </div>
          )}
        </div>
      </div>
      <Footer /> {/* Include Footer here */}
    </>
  );
};

export default Dashboard;

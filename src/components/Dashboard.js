import React, { useState } from 'react';

function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('about');

  const renderAbout = () => (
    <div className="section-content">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p className="profession">{user.profession || 'Professional'}</p>
          <p className="location">{user.city || 'Location'}</p>
        </div>
      </div>
      <div className="about-content">
        <h3>About Me</h3>
        <p>{user.bio || 'Welcome to my profile! I am passionate about technology and innovation.'}</p>
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Member Since</h4>
            <p>{user.joinDate}</p>
          </div>
          <div className="stat-card">
            <h4>Last Active</h4>
            <p>{user.lastLogin}</p>
          </div>
          <div className="stat-card">
            <h4>Profile Status</h4>
            <p>Active</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="section-content">
      <h2>Contact Information</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <div className="contact-info">
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📱</div>
          <div className="contact-info">
            <h4>Phone</h4>
            <p>{user.phone || 'Not provided'}</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <div className="contact-info">
            <h4>Address</h4>
            <p>{user.address || 'Not provided'}</p>
            <p>{user.city || ''}</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-icon">💼</div>
          <div className="contact-info">
            <h4>Profession</h4>
            <p>{user.profession || 'Not specified'}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDetails = () => (
    <div className="section-content">
      <h2>Account Details</h2>
      <div className="details-table">
        <div className="detail-row">
          <span className="detail-label">Full Name</span>
          <span className="detail-value">{user.name}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Email Address</span>
          <span className="detail-value">{user.email}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Phone Number</span>
          <span className="detail-value">{user.phone || 'Not provided'}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Address</span>
          <span className="detail-value">{user.address || 'Not provided'}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">City</span>
          <span className="detail-value">{user.city || 'Not provided'}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Profession</span>
          <span className="detail-value">{user.profession || 'Not specified'}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Member Since</span>
          <span className="detail-value">{user.joinDate}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Last Login</span>
          <span className="detail-value">{user.lastLogin}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-tabs">
          <button 
            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
          <button 
            className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
        </div>
        <div className="dashboard-content">
          {activeTab === 'about' && renderAbout()}
          {activeTab === 'contact' && renderContact()}
          {activeTab === 'details' && renderDetails()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
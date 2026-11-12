
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <main className="home-card">

        {/* Chat Logo */}
        <div className="home-logo">
          <div className="chat-bubble bubble-back"></div>
          <div className="chat-bubble bubble-front">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Brand */}
        <h1 className="home-title">ChatMe</h1>

        <p className="home-description">
          Connect with friends, share your thoughts,
          and enjoy conversations in real time.
        </p>

        {/* Features */}
        <div className="home-features">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>Fast messaging</span>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🔒</span>
            <span>Private chats</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="home-actions">
          <Link to="/Signin" className="home-btn login-btn">
            Sign In
          </Link>

          <Link to="/Signup" className="home-btn signup-btn">
            Sign Up
          </Link>
        </div>

        <p className="home-footer">
          Your conversations, your connections.
        </p>

      </main>
    </div>
  );
};

export default Home;

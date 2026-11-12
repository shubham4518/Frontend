import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Cine<span>Verse</span>
          </Link>

          <p>
            Discover your next favorite movie. Explore the latest films, popular
            releases, and timeless classics.
          </p>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/popular">Popular</Link>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CineVerse. All rights reserved.</p>
        <p>Made with ❤️ for movie lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;

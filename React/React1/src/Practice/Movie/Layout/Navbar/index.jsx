import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = ({ setSearch, search }) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Cine<span>Verse</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/movies">Movies</NavLink>

          <NavLink to="/tv">TV Shows</NavLink>

          <NavLink to="/popular">Popular</NavLink>
        </nav>

        <div className="navbar-actions">
          <form className="navbar-search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movies..."
              aria-label="Search movies"
            />
            <button type="submit" aria-label="Search">
              🔍
            </button>
          </form>

          <button className="profile-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

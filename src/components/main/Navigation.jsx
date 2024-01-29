import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <div>Joe Mo</div>
      </Link>
      <nav className="nav-bar__list">
        <Link to="/" className="nav-bar__list-item">
          Work
        </Link>
        <Link to="/about" className="nav-bar__list-item">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;

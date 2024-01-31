import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../../images/headshot.jpg';

const Navigation = () => {
  return (
    <header className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <div>Joe Mo</div>
      </Link>
      <img className="nav-bar__image" src={headshot} alt="Profile" />
    </header>
  );
};

export default Navigation;

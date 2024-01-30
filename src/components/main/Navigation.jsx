import React from 'react';
import { Link } from 'react-router-dom';
import japan from '../../images/japan.jpg';

const Navigation = () => {
  return (
    <header className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <div>Joe Mo</div>
        {/* <img className="about-image" src={japan} alt="Profile" /> */}
      </Link>
    </header>
  );
};

export default Navigation;

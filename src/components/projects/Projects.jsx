import React from 'react';
import { Link } from 'react-router-dom';
import marketThumbnail from '../../images/market-thumbnail.png';
import awareOfMeThumbnail from '../../images/aware-thumbnail.jpg';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <Link className="projects-link" to="/projects/awareOfMe">
        <img className="projects-first" src={awareOfMeThumbnail} />
      </Link>
      <Link className="projects-link" to="/projects/market-buddy">
        <img className="projects-second" src={marketThumbnail} />
      </Link>
    </div>
  );
};

export default Projects;

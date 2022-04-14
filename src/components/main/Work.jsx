import React from 'react';
import Projects from '../projects/Projects';
import Footer from './Footer';
import ProgressElements from './ProgressElements';

const Work = () => {
  return (
    <>
      <ProgressElements />
      <div className="intro">
        <div className="intro-text">
          <div className="intro-text__header">
            Hi, I'm Joe. A Problem Solver.
          </div>
          <div className="intro-text__description">
            I'm also a front-end developer with a deep appreciation for clean,
            accessible design
          </div>
        </div>
        <span className="intro-wave">👋</span>
      </div>

      <div className="intro-more">
        <a className="intro-more__link" href="#projects">
          <button className="intro-more__btn">
            <span className="intro-more__btn-text">Work</span>
          </button>
        </a>
        <div className="intro-more__arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <Projects />
      <Footer />
    </>
  );
};

export default Work;

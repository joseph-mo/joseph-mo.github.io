import React from 'react';
import Projects from '../projects/Projects';
import Footer from './Footer';
import ProgressElements from './ProgressElements';
import Timeline from '../timeline/Timeline';

const Work = () => {
  return (
    <>
      <ProgressElements />
      <div className="about">
        <div className="about-text">
          <div className="about-text__title">
            Hi, I’m Joe. A Front-end Developer working at UBS on Core Financial
            Advising Products.
          </div>
          <div className="about-text__description">
            <div className="about-text__work">
              I've been at UBS for a little over a year and a half now. During
              my first year, I was working on an Equities Order Management
              System within the Investment Bank. Recently, I have moved over to
              the Wealth Management Division where I have rekindled with my
              excitement of working on the front-end side of applications.
            </div>
            <div className="about-text__personal">
              Outside of work you'll find me spending quality time with friends
              & family, cooking all the delicious recipes I find on the internet
              and getting better at pushing, picking up and squatting heavy
              things.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="intro">
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
      </div> */}
      {/* <div className="intro-more">
        <a className="intro-more__link" href="/#projects">
          <button className="intro-more__btn">
            <span className="intro-more__btn-text">Work</span>
          </button>
        </a>
        <div className="intro-more__arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <Timeline />
      <Projects />
      <Footer />
    </>
  );
};

export default Work;

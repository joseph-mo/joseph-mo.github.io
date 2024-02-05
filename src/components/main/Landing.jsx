import React from 'react';
import Projects from '../projects/Projects';
import Footer from './Footer';
import ProgressElements from './ProgressElements';
import Timeline from '../timeline/Timeline';

const Landing = () => {
  return (
    <div className="landing">
      <ProgressElements />
      <div className="about">
        <div className="about-text">
          <div className="about-text__title">
            Hi, I’m Joe. A frontend software engineer based in Queens, New York.
          </div>
          <div className="about-text__description">
            <div className="about-text__work">
              Most recently, I've been with Level, a company committed to
              simplifying and providing clarity in utilizing employee benefits.
              I've contributed to Level's{' '}
              <b className="about-text__description-bold">
                internal tooling application
              </b>{' '}
              (Admin app) and the{' '}
              <b className="about-text__description-bold">
                employer-facing dashboard
              </b>{' '}
              (Employer Dashboard). Additionally, my interest in{' '}
              <b className="about-text__description-bold">design systems</b> has
              led me to make valuable contributions to Level’s{' '}
              <b className="about-text__description-bold">component library</b>.
            </div>
            <div className="about-text__personal">
              Outside of work you'll find me spending quality time with friends
              & family, trying out new recipes, in the CrossFit gym, reading, or
              indulging in whatever catches my eye on Netflix.
            </div>
          </div>
        </div>
      </div>
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
};

export default Landing;

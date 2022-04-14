import React from 'react';
import Timeline from '../timeline/Timeline';
import headshot from '../../images/headshot.png';
import Footer from './Footer';
import Interests from '../interests/Interests';
import ProgressElements from './ProgressElements';

const About = () => {
  return (
    <div>
      <ProgressElements />
      <div className="about">
        <img className="about-image" src={headshot} alt="Profile" />
        <div className="about-text">
          <div className="about-text__title">
            I’m Joe, a Front-end Developer working at UBS on Core Financial
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
              and getting better at pushing, picking up or squatting heavy
              things.
            </div>
          </div>
        </div>
      </div>
      <Timeline />
      {/* <Interests /> */}
      <Footer />
    </div>
  );
};

export default About;

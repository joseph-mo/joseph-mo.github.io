import React from 'react';
import mail from '../../images/mail-small.png';
import linkedin from '../../images/linkedin-small.png';

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-heading">Let's Chat!</h1>
      <hr className="footer-divider" />
      <div className="footer-links">
        <a className="footer-mail" href="mailto:jjm492@cornell.edu">
          Send me an{' '}
          <img className="footer-mail__icon" src={mail} alt="Mail icon" />
        </a>
        <a
          className="footer-linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/joseph-mo-35086b14a/"
        >
          Connect on{' '}
          <img
            className="footer-linkedin__icon"
            src={linkedin}
            alt="LinkedIn Logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

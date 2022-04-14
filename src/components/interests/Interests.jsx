import React from 'react';
import reactLogo from '../../images/react-logo.png';
import tsLogo from '../../images/ts-logo.png';
import sassLogo from '../../images/sass-logo.png';
import figmaLogo from '../../images/figma-logo.png';
import liftingEmoji from '../../images/lifting-emoji.png';
import meditationEmoji from '../../images/meditation-emoji.png';
import readingEmoji from '../../images/reading-emoji.png';

const Interests = () => {
  return (
    <div className="interests">
      <h4 className="interests-header">Current Tech Interests...</h4>
      <div className="interests-row">
        <img className="interests-logo" src={reactLogo} alt="React Logo" />
        <img className="interests-logo" src={tsLogo} alt="TypeScript Logo" />
        <img className="interests-logo" src={sassLogo} alt="Sass Logo" />
        <img className="interests-logo" src={figmaLogo} alt="Figma Logo" />
      </div>
      <h4 className="interests-header">Current Non-Tech Interests...</h4>
      <div className="interests-row">
        <img className="interests-logo" src={liftingEmoji} />
        <img className="interests-logo" src={meditationEmoji} />
        <img className="interests-logo" src={readingEmoji} />
      </div>
    </div>
  );
};

export default Interests;

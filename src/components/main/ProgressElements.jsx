import React, { useState, useEffect } from 'react';

const ProgressElements = () => {
  const [showButton, setShowButton] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', windowScrollHandler);

    return () => {
      window.removeEventListener('scroll', windowScrollHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', progressBarHandler);

    return () => {
      window.removeEventListener('scroll', progressBarHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const windowScrollHandler = () => {
    if (window.scrollY > 800) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const progressBarHandler = () => {
    const elem = document.documentElement;
    const totalScroll = elem.scrollTop;
    const windowHeight = elem.scrollHeight - elem.clientHeight;
    const scroll = totalScroll / windowHeight;

    setScroll(scroll);
  };

  return (
    <div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ transform: `scale(${scroll}, 1)` }}
        ></div>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <span className="back-to-top__arrow">⬆</span>
        </button>
      )}
    </div>
  );
};

export default ProgressElements;

import React, { useState } from 'react';
import './SideButtonsComponent.css';

const SideButtonsComponent = () => {
  const [tooltip, setTooltip] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = (text) => {
    setTooltip(text);
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  // Custom smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure progress does not exceed 1

      // Ease in-out function for smoother transition
      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleButtonClick = (sectionId) => {
    smoothScrollTo(sectionId);
  };

  return (
    <div className="side-buttons">
      <button
        className="side-button"
        onClick={() => handleButtonClick('home')}
        onMouseEnter={() => handleMouseEnter('Home')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-home"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('about')}
        onMouseEnter={() => handleMouseEnter('About')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-user"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('skills-and-certifications')}
        onMouseEnter={() => handleMouseEnter('Skills and Certifications')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-code"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('experience')}
        onMouseEnter={() => handleMouseEnter('Experience')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-book"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('portfolio')}
        onMouseEnter={() => handleMouseEnter('Projects')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-project-diagram"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('contact')}
        onMouseEnter={() => handleMouseEnter('Contact')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-envelope"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('media')}
        onMouseEnter={() => handleMouseEnter('Media')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fab fa-twitter"></i>
      </button>

      {tooltipVisible && <div className="tooltip">{tooltip}</div>}
    </div>
  );
};

export default SideButtonsComponent;
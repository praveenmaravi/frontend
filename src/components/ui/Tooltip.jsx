import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css'; // Add your CSS styles for tooltip positioning and appearance

const Tooltip = ({ text, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <div className={`tooltip ${position} ${isVisible ? 'visible' : ''}`}>
        {text}
      </div>
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,  // Tooltip text
  children: PropTypes.node.isRequired,  // The component(s) that will trigger the tooltip
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']), // Tooltip position (default 'top')
};

export default Tooltip;

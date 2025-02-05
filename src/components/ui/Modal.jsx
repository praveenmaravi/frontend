import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; // Optional for custom styles

const Modal = ({ isOpen, closeModal, title, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  // Close modal and trigger parent callback
  const handleClose = () => {
    setIsVisible(false);
    closeModal();
  };

  // Keypress handling to close modal
  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  // Only render modal if it's open
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

import React from 'react';
import PropTypes from 'prop-types';
import './QuickReplies.css'; // You can style your buttons here

const QuickReplies = ({ replies, onReplyClick }) => {
  return (
    <div className="quick-replies-container">
      {replies.map((reply, index) => (
        <button 
          key={index} 
          className="quick-reply-button"
          onClick={() => onReplyClick(reply)}
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

// Define PropTypes to ensure correct usage
QuickReplies.propTypes = {
  replies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onReplyClick: PropTypes.func.isRequired,
};

export default QuickReplies;

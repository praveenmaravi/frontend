import React from 'react';
import PropTypes from 'prop-types';
import './QuickReplies.css'; // Optional: for styling quick reply buttons

const QuickReplies = ({ replies, onReplyClick }) => {
  return (
    <div className="quick-replies">
      {replies.map((reply, index) => (
        <button
          key={index}
          className="quick-reply-btn"
          onClick={() => onReplyClick(reply)}
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

QuickReplies.propTypes = {
  replies: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of quick reply strings
  onReplyClick: PropTypes.func.isRequired, // Callback for when a reply is clicked
};

export default QuickReplies;

import React, { useState, useEffect } from 'react';
import './TypingIndicator.css'; // Add styles for the typing indicator

const TypingIndicator = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="typing-indicator">
      <span>Bot is typing{dots}</span>
    </div>
  );
};

export default TypingIndicator;

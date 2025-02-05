// frontend/src/views/ChatbotInterface/ChatWindow.js

import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';
import EmotionDisplay from './EmotionDisplay';
import MediaHandler from './MediaHandler';

const ChatWindow = ({ messages, isTyping, quickReplies, onSendMessage }) => {
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Chatbot</h3>
        {/* Add chatbot header UI here (like logo, user options, etc.) */}
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={chatEndRef}></div>
      </div>
      <div className="chat-input">
        <EmotionDisplay />
        <MediaHandler />
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
        {quickReplies && <QuickReplies replies={quickReplies} onQuickReplyClick={onSendMessage} />}
      </div>
    </div>
  );
};

export default ChatWindow;

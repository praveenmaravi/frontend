import React from 'react';

// Loader component for the chat window
const ChatLoader = () => {
  return (
    <div className="chat-loader-container flex justify-center items-center">
      <div className="loader border-4 border-t-4 border-gray-300 rounded-full w-8 h-8 animate-spin"></div>
      <style jsx>{`
        .chat-loader-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }
        .loader {
          border-top-color: #4fa3f7;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatLoader;

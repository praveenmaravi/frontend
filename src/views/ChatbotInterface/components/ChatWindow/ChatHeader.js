import React from 'react';

const ChatHeader = ({ chatbotName, userName, onClose }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-t-xl shadow-md">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-xl font-semibold text-white">{chatbotName[0]}</span>
        </div>
        <div className="ml-2">
          <h2 className="text-xl font-semibold">{chatbotName}</h2>
          {userName && <p className="text-sm">{`Hi, ${userName}!`}</p>}
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
        aria-label="Close chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 10.585l5.657-5.657 1.414 1.414-5.657 5.657 5.657 5.657-1.414 1.414-5.657-5.657-5.657 5.657-1.414-1.414 5.657-5.657-5.657-5.657 1.414-1.414z"/>
        </svg>
      </button>
    </div>
  );
};

export default ChatHeader;

import React from 'react';

const BotStatusCard = ({ status }) => {
  let statusColor = '';
  let statusText = '';

  // Determine the color and text based on the bot status
  switch (status) {
    case 'active':
      statusColor = 'bg-green-500';
      statusText = 'Bot is Active';
      break;
    case 'idle':
      statusColor = 'bg-yellow-500';
      statusText = 'Bot is Idle';
      break;
    case 'maintenance':
      statusColor = 'bg-red-500';
      statusText = 'Bot is in Maintenance';
      break;
    default:
      statusColor = 'bg-gray-500';
      statusText = 'Status Unknown';
      break;
  }

  return (
    <div className={`p-4 rounded-lg ${statusColor} text-white flex items-center space-x-4`}>
      <div className="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Icon based on status */}
          {status === 'active' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l4 4l-4 4m4-4h14M21 14l-4-4l4-4m-4 4H7" />
          ) : status === 'idle' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0h-6" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18l6-6m0 0l6 6m-6-6V6" />
          )}
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{statusText}</h3>
      </div>
    </div>
  );
};

export default BotStatusCard;

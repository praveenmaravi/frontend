// frontend/src/views/ChatbotInterface/MediaHandler.js

import React from 'react';

const MediaHandler = ({ mediaData }) => {
  // Determine the type of media
  const renderMedia = () => {
    if (!mediaData) {
      return null;
    }

    const { type, url, caption } = mediaData;

    switch (type) {
      case 'image':
        return <img src={url} alt={caption || 'Media'} className="media-image" />;
      case 'document':
        return (
          <div className="media-document">
            <a href={url} download>
              {caption || 'Download Document'}
            </a>
          </div>
        );
      case 'audio':
        return (
          <div className="media-audio">
            <audio controls>
              <source src={url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            {caption && <p>{caption}</p>}
          </div>
        );
      default:
        return <p>Unsupported media type</p>;
    }
  };

  return (
    <div className="media-handler">
      {renderMedia()}
    </div>
  );
};

export default MediaHandler;

import React, { useState, useEffect } from 'react';

const VoiceInput = ({ onSendMessage }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState(null);

  // Initialize SpeechRecognition API if available
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech Recognition is not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setTranscript(transcript);
    };
    recognition.onerror = (err) => {
      setError(err.error);
    };

    // Cleanup on component unmount
    return () => {
      recognition.stop();
    };
  }, []);

  const handleVoiceToggle = () => {
    if (isListening) {
      setTranscript('');
      window.webkitSpeechRecognition.stop();
    } else {
      window.webkitSpeechRecognition.start();
    }
  };

  const handleSendMessage = () => {
    if (transcript.trim()) {
      onSendMessage(transcript);
      setTranscript('');
    }
  };

  return (
    <div className="voice-input-container">
      {error && <p className="error-message">{error}</p>}

      <div className="voice-input-controls">
        <button onClick={handleVoiceToggle} className={`btn-toggle ${isListening ? 'listening' : ''}`}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
        {transcript && (
          <div className="transcript">
            <p>{transcript}</p>
            <button onClick={handleSendMessage} className="btn-send">
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceInput;

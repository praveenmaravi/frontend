// components/ai-features/VoiceSynthesizer.jsx

import React, { useState, useEffect } from 'react';

const VoiceSynthesizer = ({ text, language = 'en-US', pitch = 1, rate = 1 }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
      setSynth(window.speechSynthesis);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  }, []);

  const speakText = () => {
    if (synth && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.pitch = pitch;
      utterance.rate = rate;
      
      // Speak the text
      synth.speak(utterance);
      setIsSpeaking(true);
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
    }
  };

  const stopSpeech = () => {
    if (synth && isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="voice-synthesizer">
      <button onClick={speakText} disabled={isSpeaking}>
        {isSpeaking ? 'Speaking...' : 'Speak'}
      </button>
      <button onClick={stopSpeech} disabled={!isSpeaking}>
        Stop
      </button>
    </div>
  );
};

export default VoiceSynthesizer;

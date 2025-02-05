import React, { useState, useEffect } from 'react';

// A simple predictive typing component that suggests the next word
const PredictiveTyping = ({ userInput, onSuggestionClick }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState(userInput);

  // Dummy list of possible words for prediction (could be replaced with an AI model in real use)
  const wordBank = ["how", "are", "you", "doing", "today", "what", "is", "the", "weather", "like"];

  // Function to predict next word based on user input
  const predictNextWord = (input) => {
    const words = input.trim().split(' ');
    const lastWord = words[words.length - 1].toLowerCase();
    return wordBank.filter(word => word.startsWith(lastWord));
  };

  useEffect(() => {
    if (input) {
      setSuggestions(predictNextWord(input));
    }
  }, [input]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    onSuggestionClick(suggestion);
    setInput(input + ' ' + suggestion);
  };

  return (
    <div className="predictive-typing">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Start typing..."
        className="input-field"
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-button"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PredictiveTyping;

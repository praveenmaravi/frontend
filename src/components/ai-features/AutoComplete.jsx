import React, { useState, useEffect } from 'react';

const AutoComplete = ({ suggestions, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (inputValue === '') {
      setFilteredSuggestions([]);
    } else {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  }, [inputValue, suggestions]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prevIndex) => Math.min(prevIndex + 1, filteredSuggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      onSelect(filteredSuggestions[activeIndex]);
      setInputValue('');
      setFilteredSuggestions([]);
    }
  };

  const handleClickSuggestion = (suggestion) => {
    onSelect(suggestion);
    setInputValue('');
    setFilteredSuggestions([]);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type something..."
        className="autocomplete-input"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="autocomplete-suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`suggestion-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleClickSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;

import React, { useState } from 'react';

// List of available languages and tone settings
const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'zh', label: 'Chinese' }
];

const tones = [
  { value: 'formal', label: 'Formal' },
  { value: 'casual', label: 'Casual' }
];

const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedTone, setSelectedTone] = useState('formal');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Add functionality here to update language in the app (e.g., API call, context update)
  };

  const handleToneChange = (event) => {
    setSelectedTone(event.target.value);
    // Add functionality here to update tone in the app (e.g., API call, context update)
  };

  return (
    <div className="settings-container">
      <h2>Language Settings</h2>
      
      <div className="language-selector">
        <label htmlFor="language">Select Language:</label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <div className="tone-selector">
        <label htmlFor="tone">Select Tone:</label>
        <select
          id="tone"
          value={selectedTone}
          onChange={handleToneChange}
        >
          {tones.map((tone) => (
            <option key={tone.value} value={tone.value}>
              {tone.label}
            </option>
          ))}
        </select>
      </div>

      <div className="save-button">
        <button onClick={() => alert('Settings saved!')}>Save Settings</button>
      </div>
    </div>
  );
};

export default LanguageSettings;

// src/views/Onboarding/PreferencesSetup.js

import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

const PreferencesSetup = ({ onNext }) => {
  const [language, setLanguage] = useState('English');
  const [tone, setTone] = useState('Formal');
  const [error, setError] = useState('');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleToneChange = (event) => {
    setTone(event.target.value);
  };

  const handleNext = () => {
    if (!language || !tone) {
      setError('Please select both language and tone.');
      return;
    }
    onNext({ language, tone });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Set Your Preferences
      </Typography>
      
      <Typography variant="body1" paragraph>
        Select your preferred language and communication tone for the chatbot.
      </Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          onChange={handleLanguageChange}
          label="Language"
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="German">German</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Tone</InputLabel>
        <Select
          value={tone}
          onChange={handleToneChange}
          label="Tone"
        >
          <MenuItem value="Formal">Formal</MenuItem>
          <MenuItem value="Casual">Casual</MenuItem>
          <MenuItem value="Friendly">Friendly</MenuItem>
          <MenuItem value="Professional">Professional</MenuItem>
        </Select>
      </FormControl>

      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        style={{ marginTop: '20px' }}
      >
        Next
      </Button>
    </div>
  );
};

export default PreferencesSetup;

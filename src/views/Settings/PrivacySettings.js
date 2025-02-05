import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

const PrivacySettings = () => {
  const [isGDPRCompliant, setIsGDPRCompliant] = useState(false);
  const [dataRetentionPeriod, setDataRetentionPeriod] = useState('');
  const [isDataShared, setIsDataShared] = useState(false);

  const handleGDPRComplianceChange = (event) => {
    setIsGDPRCompliant(event.target.checked);
  };

  const handleDataRetentionChange = (event) => {
    setDataRetentionPeriod(event.target.value);
  };

  const handleDataSharingChange = (event) => {
    setIsDataShared(event.target.checked);
  };

  const handleSaveChanges = () => {
    // Logic to save privacy settings (e.g., API call)
    console.log('Saving Privacy Settings...');
    console.log('GDPR Compliance:', isGDPRCompliant);
    console.log('Data Retention Period:', dataRetentionPeriod);
    console.log('Data Sharing:', isDataShared);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Privacy Settings
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={isGDPRCompliant}
            onChange={handleGDPRComplianceChange}
            color="primary"
          />
        }
        label="Ensure GDPR Compliance"
      />

      <TextField
        label="Data Retention Period (in days)"
        type="number"
        value={dataRetentionPeriod}
        onChange={handleDataRetentionChange}
        fullWidth
        style={{ marginBottom: '20px' }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={isDataShared}
            onChange={handleDataSharingChange}
            color="primary"
          />
        }
        label="Allow Data Sharing with Third Parties"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveChanges}
        style={{ marginTop: '20px' }}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default PrivacySettings;

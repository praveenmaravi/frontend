// frontend/src/views/Onboarding/OnboardingComplete.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Box, Container } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const OnboardingComplete = () => {
  const history = useHistory();

  const handleComplete = () => {
    // Redirect to the main dashboard or chatbot interface after completing onboarding
    history.push('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <CheckCircleIcon
          color="primary"
          style={{ fontSize: 80, marginBottom: 20 }}
        />
        <Typography variant="h5" align="center" gutterBottom>
          Onboarding Complete!
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          You have successfully completed the onboarding process. You are now ready to start using your AI-powered chatbot.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleComplete}
          fullWidth
        >
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default OnboardingComplete;

import React, { useState } from 'react';

const FeatureTutorial = () => {
  const [step, setStep] = useState(0);
  
  const tutorialSteps = [
    {
      title: 'Welcome to the Chatbot',
      content: 'Let\'s get you familiar with the chatbot interface. You can start by typing your question below!',
    },
    {
      title: 'Chat Window',
      content: 'This is where all your conversations with the chatbot happen. Type your message here to start a chat.',
    },
    {
      title: 'Quick Replies',
      content: 'Click on quick replies for predefined responses. This helps speed up your interaction with the bot!',
    },
    {
      title: 'Media Handling',
      content: 'You can also send images, documents, or voice messages. Just click the media icon to upload.',
    },
    {
      title: 'Settings and Personalization',
      content: 'Click on the settings icon to personalize your experience, such as language or tone of responses.',
    },
    {
      title: 'Feature Completion',
      content: 'That’s it! You’re all set. Start chatting with your chatbot and explore the features.',
    },
  ];

  const handleNextStep = () => {
    if (step < tutorialSteps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="tutorial-container">
      <div className="tutorial-header">
        <h2>{tutorialSteps[step].title}</h2>
      </div>
      <div className="tutorial-content">
        <p>{tutorialSteps[step].content}</p>
      </div>
      <div className="tutorial-controls">
        {step > 0 && <button onClick={handlePrevStep}>Previous</button>}
        {step < tutorialSteps.length - 1 ? (
          <button onClick={handleNextStep}>Next</button>
        ) : (
          <button onClick={() => alert('Tutorial Completed!')}>Finish</button>
        )}
      </div>
    </div>
  );
};

export default FeatureTutorial;

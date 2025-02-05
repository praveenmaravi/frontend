import React, { useState } from "react";
import { Button, InputField, ProgressBar, Spinner, Modal } from "../ui"; // Assuming you're using reusable UI components
import { APIHelper } from "../utils/APIHelper"; // For API calls

const BotTraining = () => {
  const [trainingData, setTrainingData] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTrainingData(file);
    }
  };

  const handleTrainBot = async () => {
    if (!trainingData) {
      setError("Please upload training data.");
      return;
    }

    setIsTraining(true);
    setProgress(0);
    setError(null);

    try {
      // Simulate an API call to train the bot (this can be replaced with actual API)
      const formData = new FormData();
      formData.append("file", trainingData);

      const response = await APIHelper.post("/train-bot", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setProgress(progress);
        },
      });

      if (response.status === 200) {
        setProgress(100);
        setIsTraining(false);
        setModalOpen(true); // Show success modal
      }
    } catch (err) {
      setError("Training failed. Please try again.");
      setIsTraining(false);
    }
  };

  return (
    <div className="bot-training-container">
      <h2>Train Your Chatbot</h2>
      
      <InputField
        type="file"
        label="Upload Training Data"
        onChange={handleFileUpload}
        accept=".csv,.json"
      />
      
      {error && <p className="error-message">{error}</p>}
      
      <Button onClick={handleTrainBot} disabled={isTraining}>
        {isTraining ? <Spinner /> : "Start Training"}
      </Button>

      {isTraining && <ProgressBar progress={progress} />}
      
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>Training Complete</h3>
        <p>Your chatbot has been successfully trained with the new data.</p>
        <Button onClick={() => setModalOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
};

export default BotTraining;

// ImageRecognition.jsx
import React, { useState } from 'react';
import { Button, InputField, Spinner } from '../ui'; // Import UI components
import { useImageRecognition } from '../../hooks'; // Custom hook for image recognition

const ImageRecognition = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleRecognition = async () => {
    if (!image) {
      setError('Please upload an image.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const recognitionResult = await useImageRecognition(image); // Custom hook for image recognition API
      setResult(recognitionResult);
    } catch (err) {
      setError('Failed to recognize image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-recognition">
      <h2>AI-Based Image Recognition</h2>
      <div className="upload-section">
        <InputField
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <Button onClick={handleRecognition} disabled={loading}>
          {loading ? <Spinner /> : 'Recognize Image'}
        </Button>
      </div>

      {error && <p className="error">{error}</p>}
      
      {result && (
        <div className="result-section">
          <h3>Recognition Result</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default ImageRecognition;

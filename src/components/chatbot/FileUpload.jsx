// frontend/src/components/chatbot/FileUpload.jsx

import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError('');
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setIsUploading(true);
    try {
      // Simulate file upload (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake delay for upload

      // Call the onFileUpload callback if provided (pass file info or URL)
      onFileUpload(file);

      setFile(null); // Reset after successful upload
    } catch (err) {
      setError('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf,.docx,.txt" // Adjust file types as needed
        onChange={handleFileChange}
      />
      <button
        className="upload-btn"
        onClick={handleFileUpload}
        disabled={isUploading}
      >
        {isUploading ? 'Uploading...' : 'Upload File'}
      </button>
      {error && <p className="error">{error}</p>}
      {file && <p className="file-info">File selected: {file.name}</p>}
    </div>
  );
};

export default FileUpload;

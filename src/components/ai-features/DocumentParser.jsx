import React, { useState } from 'react';

// Dummy function simulating AI document parsing
const parseDocument = async (file) => {
  // Simulate AI document processing (in a real scenario, this would interact with an API or model)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (file) {
        resolve("Extracted text from the document: 'Sample Document Content'");
      } else {
        reject("No document provided");
      }
    }, 2000);
  });
};

const DocumentParser = () => {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleParseDocument = async () => {
    if (!file) {
      setError("Please upload a document first.");
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      const text = await parseDocument(file);
      setExtractedText(text);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="document-parser">
      <h2>AI Document Parser</h2>
      <input 
        type="file" 
        accept=".pdf,.docx,.txt,.jpg,.png" 
        onChange={handleFileChange} 
      />
      <button 
        onClick={handleParseDocument} 
        disabled={isLoading}
      >
        {isLoading ? "Parsing..." : "Parse Document"}
      </button>

      {error && <div className="error-message">{error}</div>}
      {extractedText && (
        <div className="extracted-text">
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentParser;

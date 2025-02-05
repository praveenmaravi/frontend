// AITextSummarizer.jsx
import React, { useState } from "react";

// Mock function to simulate an AI text summarizer
const summarizeText = (text) => {
  // In a real scenario, this would interact with an AI service or model.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Summary: ${text.slice(0, 100)}...`);
    }, 1000);
  });
};

const AITextSummarizer = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    if (inputText.trim() === "") {
      setError("Please enter some text to summarize.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const summarizedText = await summarizeText(inputText);
      setSummary(summarizedText);
    } catch (err) {
      setError("Error occurred while summarizing text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-text-summarizer">
      <h2>AI Text Summarizer</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="6"
        placeholder="Enter text to summarize"
      />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {error && <p className="error">{error}</p>}

      {summary && (
        <div className="summary">
          <h3>Summary</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default AITextSummarizer;

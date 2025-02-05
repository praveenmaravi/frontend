import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Sample data for the plugin (in a real application, this data might come from an API)
const samplePluginData = {
  id: 1,
  name: 'Chatbot Sentiment Analyzer',
  description: 'A plugin that analyzes the sentiment of user conversations in real-time, providing feedback on user moods.',
  version: '1.2.0',
  author: 'AI Solutions Inc.',
  installationDate: '2024-12-01',
  pricing: 'Free',
  features: [
    'Real-time sentiment analysis',
    'Sentiment-based conversation adjustments',
    'Integration with major chatbot platforms',
    'Detailed mood insights and analytics',
  ],
  documentationLink: 'https://www.aisolutions.com/sentiment-analyzer/docs',
  supportLink: 'https://www.aisolutions.com/support',
};

const PluginDetail = ({ pluginId }) => {
  const [pluginData, setPluginData] = useState(null);

  useEffect(() => {
    // Fetch plugin data from an API or backend (this is a mock request for now)
    // In real-life, you would use something like fetch or axios
    if (pluginId) {
      // Simulating an API call
      setPluginData(samplePluginData);
    }
  }, [pluginId]);

  if (!pluginData) {
    return <div>Loading plugin details...</div>;
  }

  return (
    <div className="plugin-detail">
      <h1>{pluginData.name}</h1>
      <p><strong>Version:</strong> {pluginData.version}</p>
      <p><strong>Author:</strong> {pluginData.author}</p>
      <p><strong>Pricing:</strong> {pluginData.pricing}</p>
      <p><strong>Installation Date:</strong> {pluginData.installationDate}</p>

      <h2>Description</h2>
      <p>{pluginData.description}</p>

      <h2>Features</h2>
      <ul>
        {pluginData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2>Useful Links</h2>
      <p>
        <a href={pluginData.documentationLink} target="_blank" rel="noopener noreferrer">
          Plugin Documentation
        </a>
      </p>
      <p>
        <a href={pluginData.supportLink} target="_blank" rel="noopener noreferrer">
          Support & Help
        </a>
      </p>
    </div>
  );
};

PluginDetail.propTypes = {
  pluginId: PropTypes.number.isRequired,
};

export default PluginDetail;

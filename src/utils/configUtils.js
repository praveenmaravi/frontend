// frontend/src/utils/configUtils.js

// Function to retrieve a configuration value by key
export const getConfig = (key) => {
    // Example: Retrieve values from environment variables or a config object
    const config = {
      API_URL: process.env.REACT_APP_API_URL || 'https://api.example.com',
      CHATBOT_MODEL: process.env.REACT_APP_CHATBOT_MODEL || 'gpt-3',
      FEATURE_TOGGLE_DARK_MODE: process.env.REACT_APP_FEATURE_TOGGLE_DARK_MODE === 'true',
    };
    
    return config[key] || null;
  };
  
  // Function to check if a feature is enabled based on configuration
  export const isFeatureEnabled = (feature) => {
    // Example: Return boolean based on feature toggles
    const features = {
      DARK_MODE: getConfig('FEATURE_TOGGLE_DARK_MODE'),
      CHATBOT_INTEGRATION: getConfig('CHATBOT_MODEL') !== null,
    };
    
    return features[feature] || false;
  };
  
  // Example function to get API URL for making requests
  export const getApiUrl = () => {
    return getConfig('API_URL');
  };
  
  // Example function to get the chatbot model being used (e.g., GPT-3, GPT-4, etc.)
  export const getChatbotModel = () => {
    return getConfig('CHATBOT_MODEL');
  };
  
  // Function to set a configuration value (if needed for runtime adjustments)
  export const setConfig = (key, value) => {
    // In a typical application, you'd store this in an environment variable or a global config object
    console.log(`Setting config for ${key}: ${value}`);
    // For example, localStorage or sessionStorage could be used to persist values in the browser
    localStorage.setItem(key, value);
  };
  
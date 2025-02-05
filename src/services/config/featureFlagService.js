// config/featureFlagService.js

class FeatureFlagService {
    constructor() {
      // A default set of feature flags, can be fetched from an API or configuration file
      this.flags = {
        newDashboard: false,  // Flag to enable or disable new dashboard
        chatHistory: true,    // Flag to enable or disable chat history feature
        voiceRecognition: false, // Flag to enable or disable voice recognition
        sentimentAnalysis: true, // Flag to enable or disable sentiment analysis
        // Add more flags as needed
      };
    }
  
    // Get the value of a feature flag
    isFeatureEnabled(feature) {
      return this.flags[feature] === true;
    }
  
    // Set a feature flag to true or false
    setFeatureFlag(feature, isEnabled) {
      if (this.flags.hasOwnProperty(feature)) {
        this.flags[feature] = isEnabled;
      } else {
        console.warn(`Feature flag for ${feature} does not exist.`);
      }
    }
  
    // Optionally fetch feature flags from an API endpoint
    // async fetchFeatureFlags() {
    //   try {
    //     const response = await apiClient.get('/feature-flags');
    //     this.flags = response.data; // Assuming response contains the flags
    //   } catch (error) {
    //     console.error('Error fetching feature flags:', error);
    //   }
    // }
  
    // Example of enabling or disabling flags dynamically
    enableFeature(feature) {
      this.setFeatureFlag(feature, true);
    }
  
    disableFeature(feature) {
      this.setFeatureFlag(feature, false);
    }
  }
  
  const featureFlagService = new FeatureFlagService();
  
  export default featureFlagService;
  
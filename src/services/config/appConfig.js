// config/appConfig.js

const appConfig = {
    environment: process.env.NODE_ENV || 'development', // Set environment (development, production, etc.)
    apiBaseUrl: process.env.API_BASE_URL || 'https://api.example.com', // Base URL for your API
    authToken: process.env.AUTH_TOKEN || '', // Optional token for auth, if needed
    featureFlags: {
      enableAnalytics: true, // Enable or disable analytics tracking
      enableVoiceRecognition: false, // Flag for enabling voice recognition features
      enableMultiTenancy: true, // Flag for enabling multi-tenancy support
    },
    sessionTimeout: 3600, // Session timeout in seconds (1 hour by default)
    dateFormat: 'YYYY-MM-DD', // Default date format for displaying dates
    timeFormat: 'HH:mm:ss', // Default time format for displaying times
    locale: 'en-US', // Default locale for language and regional settings
  };
  
  export default appConfig;
  
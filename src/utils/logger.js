// logger.js
const logLevels = {
    INFO: 'INFO',
    ERROR: 'ERROR',
    DEBUG: 'DEBUG',
    WARN: 'WARN',
  };
  
  // Function to get current timestamp
  const getTimestamp = () => new Date().toISOString();
  
  // Helper function to log messages based on log level
  const logMessage = (level, message) => {
    const timestamp = getTimestamp();
    console[level.toLowerCase()](`[${timestamp}] [${level}] ${message}`);
  };
  
  // Log an info message
  export const logInfo = (message) => {
    logMessage(logLevels.INFO, message);
  };
  
  // Log an error message
  export const logError = (message) => {
    logMessage(logLevels.ERROR, message);
  };
  
  // Log a warning message
  export const logWarn = (message) => {
    logMessage(logLevels.WARN, message);
  };
  
  // Log a debug message
  export const logDebug = (message) => {
    if (process.env.NODE_ENV === 'development') {
      logMessage(logLevels.DEBUG, message); // Only log debug messages in development environment
    }
  };
  
  // Example usage
  // logInfo("User logged in");
  // logError("Failed to fetch data");
  // logWarn("Low disk space");
  // logDebug("Bot response time: 200ms");
  
  
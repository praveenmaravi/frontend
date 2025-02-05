// utils/storageService.js

/**
 * A utility service to handle browser storage.
 * Supports localStorage and sessionStorage.
 */
const storageService = {
    // Save data to localStorage
    saveToLocalStorage: (key, value) => {
      try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
  
    // Get data from localStorage
    getFromLocalStorage: (key) => {
      try {
        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : null;
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
      }
    },
  
    // Remove data from localStorage
    removeFromLocalStorage: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing from localStorage:', error);
      }
    },
  
    // Save data to sessionStorage
    saveToSessionStorage: (key, value) => {
      try {
        const serializedValue = JSON.stringify(value);
        sessionStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error('Error saving to sessionStorage:', error);
      }
    },
  
    // Get data from sessionStorage
    getFromSessionStorage: (key) => {
      try {
        const serializedValue = sessionStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : null;
      } catch (error) {
        console.error('Error reading from sessionStorage:', error);
        return null;
      }
    },
  
    // Remove data from sessionStorage
    removeFromSessionStorage: (key) => {
      try {
        sessionStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing from sessionStorage:', error);
      }
    },
  
    // Clear all data from localStorage
    clearLocalStorage: () => {
      try {
        localStorage.clear();
      } catch (error) {
        console.error('Error clearing localStorage:', error);
      }
    },
  
    // Clear all data from sessionStorage
    clearSessionStorage: () => {
      try {
        sessionStorage.clear();
      } catch (error) {
        console.error('Error clearing sessionStorage:', error);
      }
    },
  };
  
  export default storageService;
  
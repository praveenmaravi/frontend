// LocalStorage.js
class LocalStorage {
    // Save data to local storage
    static setItem(key, value) {
      try {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  
    // Get data from local storage
    static getItem(key) {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
      }
    }
  
    // Remove data from local storage
    static removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing from localStorage:', error);
      }
    }
  
    // Clear all local storage data
    static clear() {
      try {
        localStorage.clear();
      } catch (error) {
        console.error('Error clearing localStorage:', error);
      }
    }
  
    // Check if an item exists in local storage
    static contains(key) {
      try {
        return localStorage.getItem(key) !== null;
      } catch (error) {
        console.error('Error checking item in localStorage:', error);
        return false;
      }
    }
  }
  
  export default LocalStorage;
  
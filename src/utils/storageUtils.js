// storageUtils.js

/**
 * Retrieves an item from localStorage.
 * @param {string} key - The key of the item to retrieve.
 * @returns {string|null} The stored item, or null if not found.
 */
export const getItem = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error retrieving item from localStorage:', error);
      return null;
    }
  };
  
  /**
   * Saves an item to localStorage.
   * @param {string} key - The key under which the item is stored.
   * @param {any} value - The value to store (can be any data type, will be stringified).
   */
  export const setItem = (key, value) => {
    try {
      const stringifiedValue = JSON.stringify(value);
      localStorage.setItem(key, stringifiedValue);
    } catch (error) {
      console.error('Error saving item to localStorage:', error);
    }
  };
  
  /**
   * Removes an item from localStorage.
   * @param {string} key - The key of the item to remove.
   */
  export const removeItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from localStorage:', error);
    }
  };
  
  /**
   * Clears all items from localStorage.
   */
  export const clearStorage = () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };
  
  /**
   * Retrieves an item from sessionStorage.
   * @param {string} key - The key of the item to retrieve.
   * @returns {string|null} The stored item, or null if not found.
   */
  export const getSessionItem = (key) => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error retrieving item from sessionStorage:', error);
      return null;
    }
  };
  
  /**
   * Saves an item to sessionStorage.
   * @param {string} key - The key under which the item is stored.
   * @param {any} value - The value to store (can be any data type, will be stringified).
   */
  export const setSessionItem = (key, value) => {
    try {
      const stringifiedValue = JSON.stringify(value);
      sessionStorage.setItem(key, stringifiedValue);
    } catch (error) {
      console.error('Error saving item to sessionStorage:', error);
    }
  };
  
  /**
   * Removes an item from sessionStorage.
   * @param {string} key - The key of the item to remove.
   */
  export const removeSessionItem = (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from sessionStorage:', error);
    }
  };
  
  /**
   * Retrieves a cookie by its name.
   * @param {string} name - The name of the cookie to retrieve.
   * @returns {string|null} The cookie value, or null if not found.
   */
  export const getCookie = (name) => {
    try {
      const cookieString = document.cookie;
      const cookies = cookieString.split(';').map(cookie => cookie.trim());
      const cookie = cookies.find(c => c.startsWith(`${name}=`));
      return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
    } catch (error) {
      console.error('Error retrieving cookie:', error);
      return null;
    }
  };
  
  /**
   * Saves a cookie.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {number} [days=7] - The number of days until the cookie expires (default is 7).
   */
  export const setCookie = (name, value, days = 7) => {
    try {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
    } catch (error) {
      console.error('Error saving cookie:', error);
    }
  };
  
  /**
   * Removes a cookie by its name.
   * @param {string} name - The name of the cookie to remove.
   */
  export const removeCookie = (name) => {
    try {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    } catch (error) {
      console.error('Error removing cookie:', error);
    }
  };
  
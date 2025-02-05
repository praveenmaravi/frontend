// utils/DateFormatter.js

/**
 * Utility function to format dates/timestamps.
 * @param {string|number|Date} date - The date or timestamp to format.
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    if (!date) {
      return '';
    }
  
    const moment = require('moment'); // You can install moment.js for advanced date handling
    return moment(date).format(format);
  };
  
  /**
   * Utility function to get the relative time from now (e.g., "2 hours ago").
   * @param {string|number|Date} date - The date or timestamp to compare with the current time.
   * @returns {string} - The relative time (e.g., "5 minutes ago").
   */
  export const relativeTime = (date) => {
    if (!date) {
      return '';
    }
  
    const moment = require('moment');
    return moment(date).fromNow();
  };
  
  /**
   * Utility function to convert a date to a human-readable format (e.g., "January 1, 2025").
   * @param {string|number|Date} date - The date or timestamp to format.
   * @returns {string} - The human-readable date (e.g., "January 1, 2025").
   */
  export const humanReadableDate = (date) => {
    if (!date) {
      return '';
    }
  
    const moment = require('moment');
    return moment(date).format('MMMM D, YYYY');
  };
  
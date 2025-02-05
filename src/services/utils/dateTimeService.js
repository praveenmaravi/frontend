// utils/dateTimeService.js

const moment = require('moment');  // You can install this package if not already available.

const dateTimeService = {
  /**
   * Formats a given date to a specified format.
   * @param {Date|string} date - The date to format (either a Date object or a date string).
   * @param {string} format - The format in which the date should be returned (e.g., 'YYYY-MM-DD HH:mm:ss').
   * @returns {string} The formatted date string.
   */
  formatDate: (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(date).format(format);
  },

  /**
   * Converts a date to a different time zone.
   * @param {Date|string} date - The date to convert (either a Date object or a date string).
   * @param {string} timeZone - The target time zone (e.g., 'America/New_York').
   * @returns {string} The date in the specified time zone.
   */
  convertToTimeZone: (date, timeZone) => {
    return moment(date).tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
  },

  /**
   * Gets the current timestamp in a specific format.
   * @param {string} format - The format for the timestamp (e.g., 'YYYY-MM-DD HH:mm:ss').
   * @returns {string} The current timestamp formatted as per the given format.
   */
  getCurrentTimestamp: (format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment().format(format);
  },

  /**
   * Gets the difference between two dates.
   * @param {Date|string} startDate - The starting date.
   * @param {Date|string} endDate - The ending date.
   * @returns {string} The difference between the two dates in a readable format.
   */
  getDateDifference: (startDate, endDate) => {
    const start = moment(startDate);
    const end = moment(endDate);
    return end.from(start);  // Returns a human-readable difference (e.g., "2 days ago")
  },

  /**
   * Adds a specified number of units (days, hours, minutes, etc.) to a date.
   * @param {Date|string} date - The date to which units will be added.
   * @param {number} amount - The number of units to add (can be negative to subtract).
   * @param {string} unit - The unit of time to add (e.g., 'days', 'hours', 'minutes').
   * @returns {string} The new date after the units are added.
   */
  addTime: (date, amount, unit = 'days') => {
    return moment(date).add(amount, unit).format('YYYY-MM-DD HH:mm:ss');
  },

  /**
   * Subtracts a specified number of units (days, hours, minutes, etc.) from a date.
   * @param {Date|string} date - The date to which units will be subtracted.
   * @param {number} amount - The number of units to subtract (can be negative to add).
   * @param {string} unit - The unit of time to subtract (e.g., 'days', 'hours', 'minutes').
   * @returns {string} The new date after the units are subtracted.
   */
  subtractTime: (date, amount, unit = 'days') => {
    return moment(date).subtract(amount, unit).format('YYYY-MM-DD HH:mm:ss');
  }
};

module.exports = dateTimeService;

// dateUtils.js

/**
 * Format a date to a specific string format (e.g., 'MM/DD/YYYY')
 * @param {Date|string} date - The date to format
 * @param {string} format - The desired format ('MM/DD/YYYY', 'YYYY-MM-DD', etc.)
 * @returns {string} - The formatted date string
 */
export function formatDate(date, format = 'MM/DD/YYYY') {
    const d = new Date(date);
    const options = {};

    // Define format options
    if (format === 'MM/DD/YYYY') {
        options.month = '2-digit';
        options.day = '2-digit';
        options.year = 'numeric';
    } else if (format === 'YYYY-MM-DD') {
        options.year = 'numeric';
        options.month = '2-digit';
        options.day = '2-digit';
    } else {
        // Default format
        options.year = 'numeric';
        options.month = 'long';
        options.day = 'numeric';
    }

    return d.toLocaleDateString('en-US', options);
}

/**
 * Get the difference in days between two dates
 * @param {Date|string} date1 - The first date
 * @param {Date|string} date2 - The second date
 * @returns {number} - The difference in days
 */
export function getDaysDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const timeDiff = d2.getTime() - d1.getTime();
    return timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days
}

/**
 * Get the start of the current day (00:00:00)
 * @returns {Date} - The start of the current day
 */
export function getStartOfDay() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
}

/**
 * Get the end of the current day (23:59:59)
 * @returns {Date} - The end of the current day
 */
export function getEndOfDay() {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return today;
}

/**
 * Add a specified number of days to a given date
 * @param {Date|string} date - The original date
 * @param {number} daysToAdd - The number of days to add
 * @returns {Date} - The new date after adding the days
 */
export function addDays(date, daysToAdd) {
    const d = new Date(date);
    d.setDate(d.getDate() + daysToAdd);
    return d;
}

/**
 * Subtract a specified number of days from a given date
 * @param {Date|string} date - The original date
 * @param {number} daysToSubtract - The number of days to subtract
 * @returns {Date} - The new date after subtracting the days
 */
export function subtractDays(date, daysToSubtract) {
    const d = new Date(date);
    d.setDate(d.getDate() - daysToSubtract);
    return d;
}

/**
 * Convert a Unix timestamp to a human-readable date format
 * @param {number} timestamp - The Unix timestamp (in seconds)
 * @returns {string} - The formatted date string
 */
export function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return formatDate(date, 'MM/DD/YYYY');
}

/**
 * Get the current date and time in ISO format
 * @returns {string} - The current date and time in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
 */
export function getCurrentDateTime() {
    return new Date().toISOString();
}


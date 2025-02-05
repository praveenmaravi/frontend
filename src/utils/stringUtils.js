// stringUtils.js

/**
 * Truncates a string to a specified length and adds an ellipsis if it's longer than the limit.
 * @param {string} str - The string to be truncated.
 * @param {number} length - The maximum length of the string.
 * @returns {string} - The truncated string with ellipsis.
 */
export function truncateString(str, length) {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  }
  
  /**
   * Capitalizes the first letter of a string.
   * @param {string} str - The string to capitalize.
   * @returns {string} - The string with the first letter capitalized.
   */
  export function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * Converts a string to camelCase.
   * @param {string} str - The string to convert.
   * @returns {string} - The string in camelCase format.
   */
  export function toCamelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
        index === 0 ? match.toLowerCase() : match.toUpperCase()
      )
      .replace(/\s+/g, '');
  }
  
  /**
   * Converts a string to snake_case.
   * @param {string} str - The string to convert.
   * @returns {string} - The string in snake_case format.
   */
  export function toSnakeCase(str) {
    return str
      .replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)
      .replace(/\s+/g, '_')
      .toLowerCase();
  }
  
  /**
   * Converts a string to kebab-case.
   * @param {string} str - The string to convert.
   * @returns {string} - The string in kebab-case format.
   */
  export function toKebabCase(str) {
    return str
      .replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)
      .replace(/\s+/g, '-')
      .toLowerCase();
  }
  
  /**
   * Checks if a string contains only alphabetic characters.
   * @param {string} str - The string to check.
   * @returns {boolean} - True if the string contains only alphabetic characters, false otherwise.
   */
  export function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  
  /**
   * Checks if a string contains only alphanumeric characters (letters and numbers).
   * @param {string} str - The string to check.
   * @returns {boolean} - True if the string contains only alphanumeric characters, false otherwise.
   */
  export function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }
  
  /**
   * Replaces all occurrences of a substring in a string.
   * @param {string} str - The string to search within.
   * @param {string} search - The substring to search for.
   * @param {string} replacement - The string to replace the substring with.
   * @returns {string} - The string with replaced occurrences.
   */
  export function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
  }
  
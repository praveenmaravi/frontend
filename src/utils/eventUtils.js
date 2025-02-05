// eventUtils.js

/**
 * Add an event listener to a DOM element
 * @param {HTMLElement} element - The DOM element to attach the listener to
 * @param {string} event - The event type (e.g., 'click', 'input', etc.)
 * @param {function} callback - The function to call when the event is triggered
 */
export const addEventListenerToElement = (element, event, callback) => {
    if (element && event && typeof callback === 'function') {
      element.addEventListener(event, callback);
    } else {
      console.error('Invalid parameters provided to addEventListenerToElement.');
    }
  };
  
  /**
   * Remove an event listener from a DOM element
   * @param {HTMLElement} element - The DOM element to remove the listener from
   * @param {string} event - The event type (e.g., 'click', 'input', etc.)
   * @param {function} callback - The function to remove
   */
  export const removeEventListenerFromElement = (element, event, callback) => {
    if (element && event && typeof callback === 'function') {
      element.removeEventListener(event, callback);
    } else {
      console.error('Invalid parameters provided to removeEventListenerFromElement.');
    }
  };
  
  /**
   * Trigger a custom event on a DOM element
   * @param {HTMLElement} element - The DOM element to dispatch the event on
   * @param {string} eventName - The name of the custom event
   * @param {Object} [detail={}] - The detail data to pass with the event (optional)
   */
  export const triggerCustomEvent = (element, eventName, detail = {}) => {
    if (element && eventName) {
      const event = new CustomEvent(eventName, { detail });
      element.dispatchEvent(event);
    } else {
      console.error('Invalid parameters provided to triggerCustomEvent.');
    }
  };
  
  /**
   * Add event listeners to multiple elements
   * @param {NodeList|Array} elements - The elements to attach listeners to
   * @param {string} event - The event type (e.g., 'click', 'input', etc.)
   * @param {function} callback - The function to call when the event is triggered
   */
  export const addEventListenersToElements = (elements, event, callback) => {
    if (elements && elements.length > 0 && typeof callback === 'function') {
      elements.forEach(element => {
        addEventListenerToElement(element, event, callback);
      });
    } else {
      console.error('Invalid parameters provided to addEventListenersToElements.');
    }
  };
  
  /**
   * Remove event listeners from multiple elements
   * @param {NodeList|Array} elements - The elements to remove listeners from
   * @param {string} event - The event type (e.g., 'click', 'input', etc.)
   * @param {function} callback - The function to remove
   */
  export const removeEventListenersFromElements = (elements, event, callback) => {
    if (elements && elements.length > 0 && typeof callback === 'function') {
      elements.forEach(element => {
        removeEventListenerFromElement(element, event, callback);
      });
    } else {
      console.error('Invalid parameters provided to removeEventListenersFromElements.');
    }
  };
  
  /**
   * Check if an event is triggered on a specific element
   * @param {HTMLElement} element - The DOM element to check
   * @param {string} event - The event type to check (e.g., 'click', 'input', etc.)
   * @param {function} callback - The function to call when the event is triggered
   * @returns {boolean} - Returns true if the event was triggered, otherwise false
   */
  export const isEventTriggeredOnElement = (element, event, callback) => {
    if (element && event && typeof callback === 'function') {
      const listener = (e) => {
        if (e.target === element) {
          callback(e);
        }
      };
      element.addEventListener(event, listener);
      return true;
    }
    return false;
  };
  
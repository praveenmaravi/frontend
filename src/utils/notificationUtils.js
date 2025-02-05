// notificationUtils.js

/**
 * Show a notification to the user.
 * @param {string} message - The notification message to display.
 * @param {string} type - The type of notification (e.g., 'success', 'error', 'info').
 * @param {number} [duration=3000] - How long to display the notification (in ms).
 */
export function showNotification(message, type, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Append notification to the body
    document.body.appendChild(notification);

    // Remove the notification after the specified duration
    setTimeout(() => {
        notification.remove();
    }, duration);
}

/**
 * Hide a notification by its ID or class name.
 * @param {string} id - The ID of the notification to hide.
 */
export function hideNotification(id) {
    const notification = document.getElementById(id);
    if (notification) {
        notification.remove();
    }
}

/**
 * Create and display a toast notification in the corner of the screen.
 * @param {string} message - The message to display.
 * @param {string} type - The type of toast (e.g., 'success', 'error').
 */
export function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    // Add toast to the container
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    toastContainer.appendChild(toast);

    // Remove toast after a short duration
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

/**
 * Create a toast container if it doesn't exist.
 * @returns {HTMLElement} - The created or existing toast container.
 */
function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    return container;
}

// frontend/src/store/selectors/notificationsSelectors.js

// Selector to get all notifications
export const getAllNotifications = (state) => state.notifications.allNotifications;

// Selector to get unread notifications
export const getUnreadNotifications = (state) => 
  state.notifications.allNotifications.filter(notification => !notification.read);

// Selector to get a specific notification by its ID
export const getNotificationById = (state, notificationId) => 
  state.notifications.allNotifications.find(notification => notification.id === notificationId);

// Selector to get notifications by type (e.g., error, info, success)
export const getNotificationsByType = (state, type) => 
  state.notifications.allNotifications.filter(notification => notification.type === type);

// Selector to get the total number of unread notifications
export const getUnreadCount = (state) => 
  state.notifications.allNotifications.filter(notification => !notification.read).length;

// Selector to get notifications based on read/unread status
export const getNotificationsByReadStatus = (state, isRead) => 
  state.notifications.allNotifications.filter(notification => notification.read === isRead);

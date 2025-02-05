// api/notificationService.js

import apiClient from './apiClient';  // Base API client to make HTTP requests

const notificationService = {
  // Send a notification to the user
  sendNotification: async (userId, message) => {
    try {
      const response = await apiClient.post('/notifications/send', {
        userId,
        message,
      });
      return response.data;
    } catch (error) {
      console.error('Error sending notification:', error);
      throw new Error('Failed to send notification');
    }
  },

  // Get notifications for a specific user
  getUserNotifications: async (userId) => {
    try {
      const response = await apiClient.get(`/notifications/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw new Error('Failed to fetch notifications');
    }
  },

  // Mark a notification as read
  markAsRead: async (notificationId) => {
    try {
      const response = await apiClient.patch(`/notifications/${notificationId}/read`);
      return response.data;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw new Error('Failed to mark notification as read');
    }
  },

  // Delete a notification
  deleteNotification: async (notificationId) => {
    try {
      const response = await apiClient.delete(`/notifications/${notificationId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw new Error('Failed to delete notification');
    }
  },
};

export default notificationService;

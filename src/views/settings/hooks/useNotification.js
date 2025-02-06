import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNotifications } from '../../../store/actions/notificationActions';
import { selectNotifications } from '../../../store/selectors/notificationSelectors';

const useNotification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications); // Get current notification settings from Redux store
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch current notification settings
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/settings/notifications');
      dispatch(setNotifications(response.data)); // Store the notification data in Redux
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Failed to load notification settings.');
    }
  };

  // Function to update notification preferences
  const updateNotificationPreferences = async (preferences) => {
    try {
      setLoading(true);
      const response = await axios.put('/api/v1/settings/notifications', preferences);
      dispatch(setNotifications(response.data)); // Update Redux store with new settings
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Failed to update notification settings.');
    }
  };

  // Fetch notifications on initial render
  useEffect(() => {
    fetchNotifications();
  }, []);

  return {
    notifications,          // Current notification settings
    loading,                // Loading state
    error,                  // Error message
    updateNotificationPreferences,  // Function to update preferences
  };
};

export default useNotification;

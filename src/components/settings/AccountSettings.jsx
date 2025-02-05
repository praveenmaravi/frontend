// AccountSettings.jsx
import React, { useState } from 'react';
import { Button, InputField, Modal } from '../ui';
import { updateUserSettings } from '../../utils/APIHelper';
import { useHistory } from 'react-router-dom';

const AccountSettings = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (userData.newPassword !== userData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    try {
      await updateUserSettings(userData);  // Assume this API call updates user settings
      setIsSubmitting(false);
      setIsModalOpen(true);
    } catch (error) {
      setError('Failed to update account settings. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Close modal and redirect
  const closeModal = () => {
    setIsModalOpen(false);
    history.push('/dashboard');  // Redirect after successful update
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <InputField
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            type="email"
            required
          />
        </div>

        <div className="input-group">
          <InputField
            label="Username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <InputField
            label="Current Password"
            name="currentPassword"
            value={userData.currentPassword}
            onChange={handleInputChange}
            type="password"
            required
          />
        </div>

        <div className="input-group">
          <InputField
            label="New Password"
            name="newPassword"
            value={userData.newPassword}
            onChange={handleInputChange}
            type="password"
            required
          />
        </div>

        <div className="input-group">
          <InputField
            label="Confirm New Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInputChange}
            type="password"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>

      {/* Success Modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h3>Account Settings Updated</h3>
          <p>Your account settings have been successfully updated!</p>
          <Button onClick={closeModal}>Close</Button>
        </Modal>
      )}
    </div>
  );
};

export default AccountSettings;

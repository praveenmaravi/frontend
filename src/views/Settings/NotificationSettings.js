import React, { useState } from 'react';

const NotificationSettings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const handleEmailToggle = () => {
        setEmailNotifications(prevState => !prevState);
    };

    const handlePushToggle = () => {
        setPushNotifications(prevState => !prevState);
    };

    const handleSmsToggle = () => {
        setSmsNotifications(prevState => !prevState);
    };

    const handleSaveSettings = () => {
        // Save the settings, e.g., make an API call
        alert('Notification settings saved!');
    };

    return (
        <div className="notification-settings">
            <h2>Notification Settings</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="setting-option">
                    <label htmlFor="email-notifications">Email Notifications</label>
                    <input
                        type="checkbox"
                        id="email-notifications"
                        checked={emailNotifications}
                        onChange={handleEmailToggle}
                    />
                </div>
                
                <div className="setting-option">
                    <label htmlFor="push-notifications">Push Notifications</label>
                    <input
                        type="checkbox"
                        id="push-notifications"
                        checked={pushNotifications}
                        onChange={handlePushToggle}
                    />
                </div>
                
                <div className="setting-option">
                    <label htmlFor="sms-notifications">SMS Notifications</label>
                    <input
                        type="checkbox"
                        id="sms-notifications"
                        checked={smsNotifications}
                        onChange={handleSmsToggle}
                    />
                </div>

                <button type="submit" className="save-button" onClick={handleSaveSettings}>
                    Save Settings
                </button>
            </form>
        </div>
    );
};

export default NotificationSettings;

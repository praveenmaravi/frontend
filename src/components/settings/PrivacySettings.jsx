import React, { useState } from 'react';

const PrivacySettings = () => {
    const [dataSharing, setDataSharing] = useState(false);
    const [cookies, setCookies] = useState(true);
    const [activityTracking, setActivityTracking] = useState(false);

    const handleToggle = (e) => {
        const { name, checked } = e.target;
        if (name === 'dataSharing') setDataSharing(checked);
        if (name === 'cookies') setCookies(checked);
        if (name === 'activityTracking') setActivityTracking(checked);
    };

    const handleSave = () => {
        // Call API or handle data saving logic here
        console.log('Privacy settings saved:', { dataSharing, cookies, activityTracking });
    };

    return (
        <div className="privacy-settings">
            <h2>Privacy Settings</h2>
            <form>
                <div className="setting-option">
                    <label>
                        <input
                            type="checkbox"
                            name="dataSharing"
                            checked={dataSharing}
                            onChange={handleToggle}
                        />
                        Share Data with Third Parties
                    </label>
                </div>
                <div className="setting-option">
                    <label>
                        <input
                            type="checkbox"
                            name="cookies"
                            checked={cookies}
                            onChange={handleToggle}
                        />
                        Enable Cookies
                    </label>
                </div>
                <div className="setting-option">
                    <label>
                        <input
                            type="checkbox"
                            name="activityTracking"
                            checked={activityTracking}
                            onChange={handleToggle}
                        />
                        Enable Activity Tracking
                    </label>
                </div>
                <div className="actions">
                    <button type="button" onClick={handleSave}>
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PrivacySettings;

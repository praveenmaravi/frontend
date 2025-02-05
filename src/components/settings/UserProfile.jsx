import React, { useState, useEffect } from 'react';
import { Button, InputField, Modal } from '../ui'; // Assuming reusable UI components are imported
import './UserProfile.css'; // Optional, for styling

const UserProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        avatar: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    // Simulating fetching user data
    useEffect(() => {
        // Fetch the user data from API or local storage
        const fetchedUserData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            avatar: 'https://example.com/avatar.jpg'
        };
        setUserData(fetchedUserData);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSaveChanges = () => {
        // API call to save updated user data
        console.log('User profile updated:', userData);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        // Reset to original data if editing is canceled
        setIsEditing(false);
        setUserData({
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            avatar: 'https://example.com/avatar.jpg'
        });
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="profile-details">
                <img src={userData.avatar} alt="User Avatar" className="avatar" />
                {isEditing ? (
                    <>
                        <InputField
                            label="Name"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Phone"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                        />
                    </>
                ) : (
                    <div className="profile-info">
                        <p><strong>Name:</strong> {userData.name}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Phone:</strong> {userData.phone}</p>
                    </div>
                )}
            </div>
            <div className="profile-actions">
                {isEditing ? (
                    <>
                        <Button onClick={handleSaveChanges}>Save</Button>
                        <Button onClick={handleCancelEdit}>Cancel</Button>
                    </>
                ) : (
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
            </div>

            <Modal
                isOpen={isEditing}
                onClose={handleCancelEdit}
                title="Edit Profile"
            >
                <p>Make changes to your profile information.</p>
            </Modal>
        </div>
    );
};

export default UserProfile;

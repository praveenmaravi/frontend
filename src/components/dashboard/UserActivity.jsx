import React, { useState, useEffect } from 'react';
import { fetchUserActivity } from '../../utils/APIHelper'; // Assuming APIHelper.js has an API call for fetching user activity data
import { Card, Spinner } from '../../ui'; // Reusing reusable UI components

const UserActivity = () => {
  const [userActivityData, setUserActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserActivityData = async () => {
      try {
        const data = await fetchUserActivity(); // Fetching user activity data
        setUserActivityData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user activity');
        setLoading(false);
      }
    };

    getUserActivityData();
  }, []);

  if (loading) {
    return (
      <Card>
        <div className="flex justify-center items-center">
          <Spinner /> {/* Shows loading spinner */}
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">User Activity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {userActivityData && userActivityData.length > 0 ? (
          userActivityData.map((activity, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <h3 className="font-medium text-lg">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-2">Last accessed: {new Date(activity.timestamp).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No activity data available</p>
        )}
      </div>
    </Card>
  );
};

export default UserActivity;

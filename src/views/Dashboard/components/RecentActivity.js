import React from 'react';

const RecentActivity = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="no-activity">No recent activity available</div>;
  }

  return (
    <div className="recent-activity-container">
      <h3 className="recent-activity-title">Recent Activity</h3>
      <ul className="recent-activity-list">
        {data.map((activity, index) => (
          <li key={index} className="activity-item">
            <div className="activity-info">
              <span className="activity-time">
                {new Date(activity.timestamp).toLocaleTimeString()}
              </span>
              <span className="activity-user">{activity.user}</span>
            </div>
            <div className="activity-message">
              <strong>{activity.type}:</strong> {activity.message}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;

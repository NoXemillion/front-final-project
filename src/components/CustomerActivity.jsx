import React from 'react';

const CustomerActivity = ({ data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Customer Activity</h2>
      <ul>
        {data.map((activity, index) => (
          <li key={index} className="mb-2">
            <strong>{activity.user}</strong> - Last Login: {activity.lastLogin} | Activity: {activity.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerActivity;

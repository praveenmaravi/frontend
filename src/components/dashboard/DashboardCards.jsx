// frontend/src/components/dashboard/DashboardCards.jsx

import React from 'react';
import PropTypes from 'prop-types';

const DashboardCard = ({ title, value, icon, color }) => (
  <div className={`bg-${color}-500 text-white rounded-lg shadow-lg p-4 flex items-center space-x-4`}>
    <div className="text-2xl">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
};

const DashboardCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((card, index) => (
        <DashboardCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
};

DashboardCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      icon: PropTypes.element.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DashboardCards;

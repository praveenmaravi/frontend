import React, { useState } from 'react';

const IndustrySelection = ({ onSelectIndustry }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const industries = [
    'Healthcare',
    'E-Commerce',
    'Finance',
    'Education',
    'HR',
  ];

  const handleSelectIndustry = (industry) => {
    setSelectedIndustry(industry);
    onSelectIndustry(industry);  // Pass selected industry to parent component
  };

  return (
    <div className="industry-selection">
      <h2>Select Your Industry</h2>
      <div className="industry-list">
        {industries.map((industry) => (
          <button
            key={industry}
            className={`industry-item ${industry === selectedIndustry ? 'selected' : ''}`}
            onClick={() => handleSelectIndustry(industry)}
          >
            {industry}
          </button>
        ))}
      </div>
      {selectedIndustry && (
        <div className="selected-industry">
          <p>You have selected: <strong>{selectedIndustry}</strong></p>
        </div>
      )}
    </div>
  );
};

export default IndustrySelection;

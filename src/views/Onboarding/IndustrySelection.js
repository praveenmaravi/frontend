// Onboarding/IndustrySelection.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const IndustrySelection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const history = useHistory();

  // List of available industries
  const industries = [
    'Healthcare',
    'E-commerce',
    'Education',
    'Finance',
    'Travel',
    'Real Estate',
    'Legal Assistance',
    'Agriculture',
    'Energy Management',
    'Sustainability',
  ];

  // Handle industry selection
  const handleSelectIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  // Proceed to the next step after selecting an industry
  const handleNext = () => {
    if (selectedIndustry) {
      // You can store the selected industry in state or context
      // Redirect to the next onboarding step, e.g., PreferencesSetup.js
      history.push('/onboarding/preferences');
    } else {
      alert('Please select an industry to proceed.');
    }
  };

  return (
    <div className="industry-selection-container">
      <h2>Select Your Industry</h2>
      <p>Choose the industry that best represents your business or use case.</p>

      <div className="industry-list">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`industry-item ${selectedIndustry === industry ? 'selected' : ''}`}
            onClick={() => handleSelectIndustry(industry)}
          >
            {industry}
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selectedIndustry}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .industry-selection-container {
          padding: 20px;
          text-align: center;
        }
        .industry-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .industry-item {
          cursor: pointer;
          padding: 10px 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        .industry-item.selected {
          background-color: #4caf50;
          color: white;
        }
        .action-buttons {
          margin-top: 30px;
        }
        .next-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .next-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default IndustrySelection;

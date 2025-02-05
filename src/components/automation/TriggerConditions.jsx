// TriggerConditions.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectDropdown, Button, InputField } from '../ui'; // Reusable UI components

const TriggerConditions = ({ onSave, existingConditions }) => {
  const [conditionType, setConditionType] = useState('message');
  const [conditionValue, setConditionValue] = useState('');
  const [conditions, setConditions] = useState(existingConditions || []);

  const handleAddCondition = () => {
    if (conditionValue) {
      const newCondition = { type: conditionType, value: conditionValue };
      setConditions([...conditions, newCondition]);
      setConditionValue('');
    }
  };

  const handleSave = () => {
    onSave(conditions);
  };

  return (
    <div className="trigger-conditions-container">
      <h2>Define Automation Trigger Conditions</h2>

      <div className="condition-form">
        <SelectDropdown
          label="Condition Type"
          options={['message', 'time', 'user_input', 'system_event']}
          value={conditionType}
          onChange={(e) => setConditionType(e.target.value)}
        />

        <InputField
          label="Condition Value"
          value={conditionValue}
          onChange={(e) => setConditionValue(e.target.value)}
          placeholder="Enter condition value"
        />

        <Button onClick={handleAddCondition}>Add Condition</Button>
      </div>

      <div className="conditions-list">
        {conditions.length > 0 ? (
          <ul>
            {conditions.map((condition, index) => (
              <li key={index}>
                {condition.type}: {condition.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No conditions defined yet.</p>
        )}
      </div>

      <Button onClick={handleSave} disabled={conditions.length === 0}>
        Save Conditions
      </Button>
    </div>
  );
};

TriggerConditions.propTypes = {
  onSave: PropTypes.func.isRequired, // Callback to save the conditions
  existingConditions: PropTypes.array, // Existing conditions to load
};

TriggerConditions.defaultProps = {
  existingConditions: [],
};

export default TriggerConditions;

import React, { useState } from "react";
import PropTypes from "prop-types";

// Mock actions for demonstration
const availableActions = [
  { id: "sendMessage", name: "Send Message" },
  { id: "triggerAPI", name: "Trigger API" },
  { id: "scheduleTask", name: "Schedule Task" },
  { id: "callWebhook", name: "Call Webhook" },
];

const ActionBlock = ({ action, onRemove }) => (
  <div className="action-block">
    <div className="action-name">{action.name}</div>
    <button className="remove-action" onClick={() => onRemove(action.id)}>
      Remove
    </button>
  </div>
);

const ActionBlocks = () => {
  const [selectedActions, setSelectedActions] = useState([]);

  const handleActionSelect = (action) => {
    setSelectedActions((prevActions) => [
      ...prevActions,
      action,
    ]);
  };

  const handleActionRemove = (actionId) => {
    setSelectedActions((prevActions) =>
      prevActions.filter((action) => action.id !== actionId)
    );
  };

  return (
    <div className="action-blocks-container">
      <div className="available-actions">
        <h3>Available Actions</h3>
        <div className="actions-list">
          {availableActions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleActionSelect(action)}
              className="action-button"
            >
              {action.name}
            </button>
          ))}
        </div>
      </div>

      <div className="selected-actions">
        <h3>Selected Actions</h3>
        {selectedActions.length > 0 ? (
          selectedActions.map((action) => (
            <ActionBlock
              key={action.id}
              action={action}
              onRemove={handleActionRemove}
            />
          ))
        ) : (
          <p>No actions selected yet. Start by selecting an action.</p>
        )}
      </div>
    </div>
  );
};

// Prop Types for ActionBlock
ActionBlock.propTypes = {
  action: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ActionBlocks;

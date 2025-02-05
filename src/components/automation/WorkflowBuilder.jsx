import React, { useState } from "react";
import { Button, Modal, Tooltip } from "../ui"; // Importing reusable UI components
import { Droppable, Draggable } from "react-beautiful-dnd"; // A library for drag-and-drop functionality

// Placeholder for Workflow Actions
const actionTypes = [
  { id: "sendMessage", label: "Send Message" },
  { id: "triggerEvent", label: "Trigger Event" },
  { id: "callAPI", label: "Call API" },
  { id: "delay", label: "Add Delay" },
];

const WorkflowBuilder = () => {
  const [workflow, setWorkflow] = useState([]); // Array to store the workflow actions
  const [showModal, setShowModal] = useState(false); // Modal state for adding actions
  const [selectedAction, setSelectedAction] = useState(null); // State for selected action

  const handleAddAction = (action) => {
    setWorkflow([...workflow, action]);
    setShowModal(false);
  };

  const handleDeleteAction = (index) => {
    const newWorkflow = workflow.filter((_, idx) => idx !== index);
    setWorkflow(newWorkflow);
  };

  const handleSaveWorkflow = () => {
    // Logic for saving workflow to backend (API call)
    console.log("Workflow saved:", workflow);
  };

  return (
    <div className="workflow-builder">
      <h2>Workflow Builder</h2>
      
      {/* Drag-and-drop workflow container */}
      <Droppable droppableId="workflowContainer">
        {(provided) => (
          <div
            className="workflow-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {workflow.map((action, index) => (
              <Draggable key={action.id} draggableId={action.id} index={index}>
                {(provided) => (
                  <div
                    className="workflow-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className="action-label">
                      <Tooltip title={`Action: ${action.label}`}>
                        <span>{action.label}</span>
                      </Tooltip>
                    </div>
                    <Button
                      label="Delete"
                      onClick={() => handleDeleteAction(index)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Button to open modal for adding new actions */}
      <Button label="Add Action" onClick={() => setShowModal(true)} />

      {/* Modal for adding actions */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h3>Select Action to Add</h3>
        <div className="action-options">
          {actionTypes.map((action) => (
            <Button
              key={action.id}
              label={action.label}
              onClick={() => handleAddAction(action)}
            />
          ))}
        </div>
      </Modal>

      {/* Save Button */}
      <Button label="Save Workflow" onClick={handleSaveWorkflow} />
    </div>
  );
};

export default WorkflowBuilder;

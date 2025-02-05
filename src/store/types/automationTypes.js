// types/automationTypes.js

// Action types for Automation
export const START_AUTOMATION = 'START_AUTOMATION';
export const STOP_AUTOMATION = 'STOP_AUTOMATION';
export const PAUSE_AUTOMATION = 'PAUSE_AUTOMATION';
export const RESUME_AUTOMATION = 'RESUME_AUTOMATION';
export const FETCH_AUTOMATION_STATUS = 'FETCH_AUTOMATION_STATUS';
export const UPDATE_AUTOMATION_TASK = 'UPDATE_AUTOMATION_TASK';
export const RESET_AUTOMATION = 'RESET_AUTOMATION';
export const SET_AUTOMATION_ERROR = 'SET_AUTOMATION_ERROR';
export const CLEAR_AUTOMATION_ERROR = 'CLEAR_AUTOMATION_ERROR';

// Example action for starting an automation task
export const startAutomation = (taskId) => ({
  type: START_AUTOMATION,
  payload: { taskId }
});

// Example action for updating an automation task
export const updateAutomationTask = (taskId, status) => ({
  type: UPDATE_AUTOMATION_TASK,
  payload: { taskId, status }
});

// You can expand this with more action types as needed for automation management

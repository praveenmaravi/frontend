// actions/automationActions.js

import { 
    START_AUTOMATION, 
    STOP_AUTOMATION, 
    FETCH_AUTOMATION_STATUS, 
    SET_AUTOMATION_ERROR, 
    UPDATE_AUTOMATION_TASK 
  } from '../types/automationTypes';
  
  // Action to start an automation task
  export const startAutomation = (taskId) => {
    return async (dispatch) => {
      try {
        // Simulate API call or automation task trigger
        const response = await fetch(`/api/startAutomation/${taskId}`, { method: 'POST' });
  
        if (response.ok) {
          dispatch({
            type: START_AUTOMATION,
            payload: taskId,
          });
        } else {
          throw new Error('Failed to start automation');
        }
      } catch (error) {
        dispatch(setAutomationError(error.message));
      }
    };
  };
  
  // Action to stop an automation task
  export const stopAutomation = (taskId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`/api/stopAutomation/${taskId}`, { method: 'POST' });
  
        if (response.ok) {
          dispatch({
            type: STOP_AUTOMATION,
            payload: taskId,
          });
        } else {
          throw new Error('Failed to stop automation');
        }
      } catch (error) {
        dispatch(setAutomationError(error.message));
      }
    };
  };
  
  // Action to fetch the status of a specific automation task
  export const fetchAutomationStatus = (taskId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`/api/getAutomationStatus/${taskId}`);
        const status = await response.json();
  
        if (response.ok) {
          dispatch({
            type: FETCH_AUTOMATION_STATUS,
            payload: { taskId, status },
          });
        } else {
          throw new Error('Failed to fetch automation status');
        }
      } catch (error) {
        dispatch(setAutomationError(error.message));
      }
    };
  };
  
  // Action to update an automation task (e.g., change configuration or settings)
  export const updateAutomationTask = (taskId, newSettings) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`/api/updateAutomationTask/${taskId}`, {
          method: 'PUT',
          body: JSON.stringify(newSettings),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          dispatch({
            type: UPDATE_AUTOMATION_TASK,
            payload: { taskId, newSettings },
          });
        } else {
          throw new Error('Failed to update automation task');
        }
      } catch (error) {
        dispatch(setAutomationError(error.message));
      }
    };
  };
  
  // Action to set an error in automation tasks
  export const setAutomationError = (error) => {
    return {
      type: SET_AUTOMATION_ERROR,
      payload: error,
    };
  };
  
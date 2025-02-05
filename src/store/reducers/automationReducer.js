import { 
    START_AUTOMATION,
    STOP_AUTOMATION,
    SET_AUTOMATION_STATUS,
    FETCH_AUTOMATION_TASKS,
    SET_AUTOMATION_TASKS,
    SET_AUTOMATION_ERROR
  } from '../types/automationTypes';
  
  const initialState = {
    tasks: [],
    automationStatus: 'idle',  // Could be 'idle', 'running', 'paused', etc.
    error: null
  };
  
  const automationReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_AUTOMATION:
        return {
          ...state,
          automationStatus: 'running',
          error: null
        };
  
      case STOP_AUTOMATION:
        return {
          ...state,
          automationStatus: 'paused',
          error: null
        };
  
      case SET_AUTOMATION_STATUS:
        return {
          ...state,
          automationStatus: action.payload.status,
          error: null
        };
  
      case FETCH_AUTOMATION_TASKS:
        return {
          ...state,
          error: null
        };
  
      case SET_AUTOMATION_TASKS:
        return {
          ...state,
          tasks: action.payload.tasks,
          error: null
        };
  
      case SET_AUTOMATION_ERROR:
        return {
          ...state,
          error: action.payload.error
        };
  
      default:
        return state;
    }
  };
  
  export default automationReducer;
  
// frontend/src/store/selectors/automationSelectors.js

// Selector to get all automation workflows
export const getAutomationWorkflows = (state) => state.automation.workflows;

// Selector to get a specific workflow by ID
export const getWorkflowById = (state, workflowId) => 
  state.automation.workflows.find(workflow => workflow.id === workflowId);

// Selector to get the status of all active automation tasks
export const getActiveAutomationTasks = (state) => 
  state.automation.tasks.filter(task => task.status === 'active');

// Selector to get the status of a specific automation task by ID
export const getAutomationTaskStatus = (state, taskId) => {
  const task = state.automation.tasks.find(task => task.id === taskId);
  return task ? task.status : null;
};

// Selector to get all automation triggers
export const getAutomationTriggers = (state) => state.automation.triggers;

// Selector to get automation workflow error messages
export const getWorkflowErrorMessages = (state) => 
  state.automation.errors ? state.automation.errors : [];

// Selector to check if any workflows are loading
export const isWorkflowLoading = (state) => state.automation.isLoading;

// selectors/automationSelectors.js

// Selector to get all automation tasks
export const selectAllAutomationTasks = (state) => state.automation.tasks;

// Selector to get the status of a specific task by task ID
export const selectTaskStatusById = (state, taskId) => {
  const task = state.automation.tasks.find((task) => task.id === taskId);
  return task ? task.status : null;
};

// Selector to get all active automation workflows
export const selectActiveWorkflows = (state) => 
  state.automation.workflows.filter((workflow) => workflow.status === 'active');

// Selector to get automation errors, if any
export const selectAutomationErrors = (state) => state.automation.errors;

// Selector to check if automation is loading (e.g., fetching tasks or workflows)
export const selectIsAutomationLoading = (state) => state.automation.loading;

// Selector to get a specific workflow by ID
export const selectWorkflowById = (state, workflowId) => {
  return state.automation.workflows.find((workflow) => workflow.id === workflowId);
};

// Selector to get the progress of a specific task by task ID
export const selectTaskProgressById = (state, taskId) => {
  const task = state.automation.tasks.find((task) => task.id === taskId);
  return task ? task.progress : 0;
};

// frontend/src/store/reducers/automationReducer.js

const initialState = {
  workflows: [],           // List of automated workflows
  loading: false,           // Flag for loading state
  error: null,              // Error handling for workflow failures
};

const automationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WORKFLOWS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_WORKFLOWS_SUCCESS':
      return {
        ...state,
        workflows: action.payload,
        loading: false,
      };
    case 'FETCH_WORKFLOWS_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'ADD_WORKFLOW':
      return {
        ...state,
        workflows: [...state.workflows, action.payload],
      };
    case 'UPDATE_WORKFLOW':
      return {
        ...state,
        workflows: state.workflows.map(workflow =>
          workflow.id === action.payload.id ? action.payload : workflow
        ),
      };
    case 'DELETE_WORKFLOW':
      return {
        ...state,
        workflows: state.workflows.filter(workflow => workflow.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default automationReducer;


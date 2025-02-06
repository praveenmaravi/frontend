// frontend/src/store/store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Middleware for handling async actions
import rootReducer from './reducers';  // Import the combined reducers

// Create the Redux store with middleware (redux-thunk for async actions)
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // You can add other middleware here (e.g., redux-saga, redux-logger)
);

export default store;

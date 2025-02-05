import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // You can also use other middleware like redux-saga
import rootReducer from './rootReducer';  // Combines all reducers

// Create the Redux store with middleware (redux-thunk for handling async actions)
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // You can add other middleware here (e.g., redux-saga, redux-logger)
);

export default store;
